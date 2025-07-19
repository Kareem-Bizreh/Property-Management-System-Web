import search from "../../../assets/shared/search-normal.svg";
import { BACKGROUND_COLORS } from "../../../../shared/colors.jsx";

const SearchBar = ({register}) => {

    return (
        <div className="relative h-[48px] w-full max-w-[400px]">
            <img
                className="absolute w-[22px] h-[22px] right-4 top-1/2 transform -translate-y-1/2"
                alt="Search"
                src={search}
            />
            <input
                {...register("search")}
                type="text"
                placeholder="ابحث"
                className='rounded-full pl-6 pr-12 h-full w-full'
                style={{
                    backgroundColor: BACKGROUND_COLORS.app,
                    fontFamily: 'ABeeZee, sans-serif',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '130%',
                    letterSpacing: '2%'
                }}
            />
        </div>
    );
}

export default SearchBar;
