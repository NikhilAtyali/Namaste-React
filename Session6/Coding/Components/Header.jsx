import React from 'react'


// Title component for display logo
const Title = () => (
    <img
      href="/"
      className="logo"
      alt="image"
      src="https://png.pngtree.com/element_our/png/20181115/hand-painted-thailand-food-hand-painted-png_240241.jpg"
    />
  );
const Header = () => {
  return (
    <>
     <div className="header">
      <Title />
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header
