import { resList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const [restaurants, setRestaurants] = useState(resList);

  return (
    <div className="body">
      <input
        type="text"
        value={searchTxt}
        placeholder="Search"
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          const data = filterData(searchTxt, restaurants);
          return setRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
