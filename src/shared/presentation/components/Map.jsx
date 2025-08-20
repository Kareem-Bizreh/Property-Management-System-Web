import {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {Button} from "@mui/material";
import {MapPinCheck, Locate, X} from "lucide-react";
import {useNotification} from "../../shared/hooks/useNotification.jsx";

// 📍 Marker Icons
const defaultIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
});

const selectedIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
    iconSize: [35, 35],
});

const myLocationIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
    iconSize: [35, 35],
});

// 📌 Handles map click to select location
const LocationMarker = ({onSelect}) => {
    useMapEvents({
        click(e) {
            onSelect(e.latlng);
        },
    });
    return null;
};

// 📌 Utility to fly map to given coordinates
const FlyToLocation = ({coords, setCoords}) => {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 15, {duration: 1.5});
        setCoords(null);
    }
    return null;
};

export const Map = ({
                        onClose,
                        center = {lat: 33.5131, lng: 36.2913},
                        zoom = 18,
                        scrollWheelZoom = true,
                        markers = [],
                        onSelect,
                    }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [myLocation, setMyLocation] = useState(null);
    const [flyCoords, setFlyCoords] = useState(null);
    const {notifyError, notifySuccess} = useNotification();

    const handleFindMe = () => {
        if (!navigator.geolocation) {
            notifyError("المتصفح لا يدعم تحديد الموقع");
            return;
        }
        if (flyCoords) {
            setMyLocation(null)
            setFlyCoords(null);
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const coords = [pos.coords.latitude, pos.coords.longitude];
                setMyLocation(coords);
                setFlyCoords(coords);
            },
            () => notifyError("تعذر الحصول على موقعك")
        );
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="relative w-full h-full">
                {/* Close Button */}
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<X size={18}/>}
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 54,
                        left: 16,
                        zIndex: 1000,
                        borderRadius: "10px",
                    }}
                >
                    إغلاق
                </Button>

                {/* My Location Button */}
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Locate size={18}/>}
                    onClick={handleFindMe}
                    sx={{
                        position: "absolute",
                        top: 10,
                        left: 16,
                        zIndex: 1000,
                        borderRadius: "10px",
                    }}
                >
                    {flyCoords ? 'إلغاء تحديد موقعي' : 'موقعي'}
                </Button>

                {/* My Select Location Button */}
                <Button
                    variant="contained"
                    color="success"
                    disabled={!onSelect || !selectedLocation}
                    startIcon={<MapPinCheck size={18}/>}
                    onClick={() => {
                        onSelect(selectedLocation);
                        notifySuccess("تم تأكيد الموقع");
                        onClose();
                    }}
                    sx={{
                        position: "absolute",
                        top: 98,
                        left: 16,
                        zIndex: 1000,
                        borderRadius: "10px",
                    }}
                >
                    تأكيد الموقع
                </Button>

                {/* Map */}
                <MapContainer
                    center={center}
                    zoom={zoom}
                    scrollWheelZoom={scrollWheelZoom}
                    style={{height: "100%", width: "100%"}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Fly to location when set */}
                    <FlyToLocation coords={flyCoords} setCoords={setFlyCoords}/>

                    {/* Default markers */}
                    {markers.map(({location, name}, idx) => (
                        <Marker position={location} key={idx} icon={defaultIcon}>
                            <Popup>{name}</Popup>
                        </Marker>
                    ))}

                    {/* Selected location marker */}
                    {selectedLocation && (
                        <Marker position={selectedLocation} icon={selectedIcon}>
                            <Popup>الموقع المحدد</Popup>
                        </Marker>
                    )}

                    {/* My location marker */}
                    {myLocation && (
                        <Marker position={myLocation} icon={myLocationIcon}>
                            <Popup>موقعي الحالي</Popup>
                        </Marker>
                    )}

                    {/* Click handler */}
                    {onSelect && <LocationMarker onSelect={setSelectedLocation}/>}
                </MapContainer>
            </div>
        </div>
    );
};
