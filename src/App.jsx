import {HashRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";


/* ------------------------------------- Component Structure  ------------------------------------
 
                                   
                                      App--------store(actions,redux store,reducer,localstore)
                                       |
                                     Home--------Navbar
                      _________________|_________________
                     |                 |                 \           
                AllProducts       AddProduct           Cart
                /          \                               \
           ProductDetails  Card                          CartCard
                                                  
                                            
*/

function App() {
 

  return (
      <HashRouter>
        {/* Notification container for react-toastify notifications */}
         <ToastContainer
         autoClose={2000}/> 
        <Routes>
          {/* Routes for "/" path common element Navbar */}
          <Route path="/" element={<Navbar />} >
          <Route index element={<Home  />} />
          <Route path="allproducts" element={<AllProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </HashRouter>
   
  );
}


export default App;
