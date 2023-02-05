import React from 'react'

const RestrauntCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
  return (
    <>
      <div className="card">
      <img
        alt="Restraunt Logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
    </div>
    </>
  )
}

export default RestrauntCard
