import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "../Coding/Components/Body";
import Header from "../Coding/Components/Header";
import Footer from "../Coding/Components/Footer";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);