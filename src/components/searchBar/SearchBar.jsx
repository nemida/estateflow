import "./searchBar.scss";

const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className="type"></div>
            <form action="">
                <input
                    type="text"
                    name="location"
                    placeholder="City Location"
                />
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={100000}
                    placeholder="Min Price"
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={100000}
                    placeholder="Max Price"
                />
            </form>
        </div>
    );
};

export default SearchBar;
