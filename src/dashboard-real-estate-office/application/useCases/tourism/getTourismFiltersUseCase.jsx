import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";

export const getTourismFilters = async (city, region, status) => {
    try {
        const response = await TourismRepository.filters(city, region, status);
        response.data.sort((a, b) => a.id - b.id);
        response.data = response.data.map((item) => ({
            id: item.id,
            postTitle: item.title,
            postImage: item.postImage,
            location: item.location,
            area: item.area,
            price: item.price,
            postStatus: item.status,
        }));

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}