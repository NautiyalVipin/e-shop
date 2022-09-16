import { useEffect } from "react";
import { Link } from "react-router-dom" //Anchor element from react router
import { useSelector,useDispatch } from "react-redux" //Get state and set state hooks from react-redux
import * as actionCreators from "../store/actions"; //Action Creators for Redux
import { dataGetter, _products } from "../store/localStore"; //Get data method and products key for localstorage



// --------------------------------------------functional component(Home Page) ----------------------------------------------

const Home = () => {
  const cart = useSelector(state=>state.cart) //Getting data for cart list from global cart state 
  const dispatch = useDispatch(); //Getting dispatch function from redux store
  
  //Dispatching action to Load data from API if "_products" key is not already present in localstorage
  useEffect(() => {
    if(!dataGetter(_products)){
      dispatch(actionCreators.handleFetchProducts());
      console.log("In useEffect HOME")
    }
    else{
      // If key is present, dispatch actioncreator to load data from localstorage
      dispatch(actionCreators.fetchLocalData(_products))
    }
  }, []);
  
  return (
    <>
    <div className='heading_style'>Welcome to E-Shop</div>
    <nav style={style.nav}>
      <ul style={style.list}>
      <li>
        {/* Anchor to HOME page */}
            <Link to="/"> 
            <i className="fa-solid fa-house">&nbsp;</i>
            Home
            </Link></li>
        <li>
             {/* Anchor to All Products page */}
            <Link to="allproducts">
        <i className="fa-solid fa-gifts">&nbsp;</i>
            All Products</Link></li>
        <li>
             {/* Anchor to Add a product page */}
            <Link to="addproduct">
        <i className="fa-solid fa-plus">&nbsp;</i>
            Add A Product</Link></li>
     
        <li>
             {/* Anchor to Cart page */}
            <Link to="cart">
        <i className="fa-solid fa-cart-shopping">&nbsp;</i>
        {/* Number of Cart Items in cart */}
         Cart(
           
          {cart.length})
          </Link>
        </li>
      </ul>
    </nav>
    </>  
  )
}

// --------------------------------- Styles -----------------------------------

const style = {
  nav: {
    background: "whitesmoke",
    width: "100%",
  },
  list: {
    display: "grid",
    justifyContent: "center",
    listStyle:"none",
    width: "100%",
    padding: "1rem 6rem",
    boderRadius:"2rem",
    background: "#d2dbdd",
    fontSize:40
  },
};

export default Home