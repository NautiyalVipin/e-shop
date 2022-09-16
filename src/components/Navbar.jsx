import { useSelector } from "react-redux"; //Get state hook from react-redux
import {Link,Outlet} from "react-router-dom" //Anchor element and outlet element from react router


// --------------------------------------------functional component Navbar(Used in App) ----------------------------------------------

const Navbar = () => {
  const cart = useSelector((state) => state.cart); //Getting cart list data from global state cart
  

  return (
    <>
   
    <nav style={style.nav}>
      <ul 
      style={style.list}>
      <li>
         {/* Anchor to Home page */}
            <Link to="/">
            Home
            </Link></li>
        <li>
          {/* Anchor to All Products Page */}
            <Link to="allproducts">
            All Products</Link></li>
        <li>
           {/* Anchor to Add a Product page */}
            <Link to="addproduct">
            Add A Product</Link></li>
     
        <li>
           {/* Anchor to Cart page */}
            <Link to="cart">
          <i className="fa-solid fa-cart-shopping"></i>
            {/* Number of Cart Items in cart */}
          Cart(
          {cart.length})
          </Link>
        </li>
      </ul>
    </nav>
    {/* Loading Rest of the components according to routes in APP component */}
    <Outlet/>
    </>
  );
};

const style = {
  nav: {
    display: "flex",
    justifyContent: "center",
    background: "whitesmoke",
    position: "sticky",
    width: "100%",
    top: 0,
    zIndex: 100,
  },
  list: {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    textDecoration:"none",
    width: "100%",
    padding: "1rem",
    boderRadius:"2rem",
    margin:"8px 2px",
    background: "#d2dbdd",
  },
};

export default Navbar;
