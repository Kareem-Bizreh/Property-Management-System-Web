import ServiceProviderRepository from "../../../domain/repositories/serviceProviderRepository.jsx";

export const editServiceProvider = async (serviceProvider, setServiceProvider) => {
    try {
        const data = new FormData();
        if (serviceProvider.image instanceof File) {
            data.append("logo", serviceProvider.image);
            setServiceProvider({...serviceProvider, image: URL.createObjectURL(serviceProvider.image)});
        }
        data.append("name", serviceProvider.name);
        data.append("phone", serviceProvider.phone);
        data.append("region_id", serviceProvider.region.id);
        data.append("opening_time", serviceProvider.opening_time);
        data.append("closing_time", serviceProvider.closing_time);
        data.append("details", serviceProvider.details);
        data.append("career", serviceProvider.career);
        data.append("status", serviceProvider.status ? "1" : "0");

        const response = await ServiceProviderRepository.edit(data);

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}