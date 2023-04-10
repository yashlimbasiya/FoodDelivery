import { resList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

function filterData(searchTxt, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
  );
}
//useEffect
// without dependency array callback runs on every re render.
// dependency array with values, callback functions will run when those values change state update
// Empty Array (present scenario)  call back is called one time after (inital render).

//Render Keyword Meaning(eg)
//Process of Execution of code of particular component.(React World)(eg line - 19 -63)
// Generic Defination - to make things visible, page loading  web app e.g seeing a youtube video
// Re-render
//Imagine Process of Execution of code of particular component happening one more time.
//Re-render two times
//Imagine Process of Execution of code of particular component happening one more time.
//(Only changing the state(seSet) can trigger re render)

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); // optional chaining
  }
  console.log("render");
  
  
  //avoid render ,early render
  if(filteredRestaurants?.length ===0) return <h1>No Restaurants found. Match your filter!</h1>
  
  // conditional rendering
  return allRestaurants.length === 0 ? (
    <>Shimmer Ui loading</>
  ) : (
    // browser will only execute JSX is browser content
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
          const data = filterData(searchTxt, allRestaurants);
          return setfilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {console.log("component update")}
      </div>
    </div>
  );
};

export default Body;

//update -execution of entire code happens once again (entire code)
// re render means when line 35 to 63 is executed,
// normal eye will not detect
