import React from 'react'
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const TourismPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div>TourismPage</div>
    )
}
export default TourismPage
