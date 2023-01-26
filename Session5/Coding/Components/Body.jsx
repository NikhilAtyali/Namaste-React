import React from "react";
import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { restaurantList } from "../constants";

const filterData = (restraunt, searchText) => {
    const filterData = restraunt.filter((item) => {
        item.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filterData;
  };
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restraunt, setRestraunt] = useState(restaurantList);
  //   const searchHandeler = (e) =>{
  //     console.log("Clicked")
  //     setSearchText()
  //   }
  
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search Something"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          onClick={() => {
            const newData = filterData(restraunt, searchText);
            setRestraunt(newData);
          }}
        >
          Search
        </button>
        </div>
        <div className="cardList">
          {restraunt.map((restaurant) => {
            return (
              <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      
    </>
  );
};

export default Body;
