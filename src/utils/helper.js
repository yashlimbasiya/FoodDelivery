export function filterData(searchTxt, allRestaurants) {
    return allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }