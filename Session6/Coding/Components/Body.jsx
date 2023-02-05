import RestrauntCard from "./RestrauntCard";
import { restaurantList } from "../constants";
import { useState } from "react";

import React from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restraunts, setRestraunts] = useState(restaurantList);

  const filterData = (searchText, restraunts) => {
    const filterData = restraunts.filter((restraunt) =>
      restraunt.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  };
  return (
    <>
      <div className="searchContainer">
        <input
          placeholder="Search Here"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restraunts);
            setRestraunts(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="cardList">
        {restraunts.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
