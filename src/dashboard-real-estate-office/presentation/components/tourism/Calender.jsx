import Header1 from "../addProperty/Header1.jsx";
import Calendar from "react-calendar";
import useDateStore from "../../../application/state/tourism/useDateStore.jsx";

const Calender = () => {
    const {date, highlightedDays, setDate, setHighlightedDays} = useDateStore();

    const toggleDate = (date) => {
        const dateStr = date.toDateString();
        const alreadySelected = highlightedDays.find(d => d.toDateString() === dateStr);

        if (alreadySelected) {
            setHighlightedDays(highlightedDays.filter(d => d.toDateString() !== dateStr));
        } else {
            setHighlightedDays([...highlightedDays, date]);
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <Header1 title={"جدول الحجوزات"} align={"right"}/>
            <Calendar
                onClickDay={toggleDate}
                onChange={setDate}
                value={date}
                formatShortWeekday={(locale, date) =>
                    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][(date.getDay() + 6) % 7]}
                tileClassName={({date}) => {
                    return highlightedDays.find(d => d.toDateString() === date.toDateString())
                        ? 'highlighted'
                        : null;
                }}
            />

        </div>
    )
}
export default Calender
