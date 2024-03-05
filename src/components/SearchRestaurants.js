const SearchRestaurants = () => {
  // <div className="filter flex items-center flex-wrap justify-around">
  //   <div className="search m-4 p-4">
  //     <input
  //       type="text"
  //       className="border border-solid border-black"
  //       value='Search'
       
  //     />

  //     <button
  //       className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        
  //     >
  //       Search
  //     </button>
  //   </div>

  //   <div className="filter-btn flex items-center m-4 p-4 flex-wrap ">
  //     <button
  //       className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
        
  //     >
  //       Top rated Restaurants
  //     </button>
  //   </div>
  //   <div className="filter-btn flex items-center m-4 p-4 flex-wrap">
  //     <label className="m-4">UserName</label>
  //     <input
  //       type="text"
        
  //       className="m-4 border border-solid border-black"
       
  //     />
  //   </div>
  // </div>
  return (
<div>
  <div className="search flex items-center justify-center w-2/3 mx-auto mt-4">
  <input
    type="text"
    className="border border-solid border-black p-3 rounded-l-lg w-2/3 border-r-0"  
    placeholder="Search a restaurant you want ..."
  />
  <button
    className="px-4 py-[13px] bg-green-400 rounded-r-lg hover:bg-green-500 transition-colors duration-300"
  >
    Search
  </button>
  </div>


    <div className="filter flex items-center flex-wrap justify-around">

    <div className="filter-btn flex items-center m-4 p-4 flex-wrap ">
      <button
        className="px-4 py-2 bg-gray-100 m-4 rounded-lg hover:bg-gray-200"
       
      >
        Ratings 4.0+
      </button>
    </div>
    <div className="filter-btn flex items-center m-4 p-4 flex-wrap">
      <label className="m-4">UserName</label>
      <input
        type="text"
        className="m-4 border border-solid border-black"
       
      />
    </div>
</div>
</div>

  )
};
export default SearchRestaurants;
