import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; //Get state and set state hooks from react-redux
import Card from "../components/Card";
import * as actionCreators from "../store/actions"; //Action Creators
import {  _products } from "../store/localStore"; //Key for localstorage of products



// --------------------------------------------functional component(All Products Page) ----------------------------------------------

const AllProducts = () => {
  const products = useSelector((state) => state.products); //Getting products state data from redux state
  const dispatch = useDispatch(); //Getting dispatch function from redux store


//Fetching data from local storage on first time page load 
useEffect(()=>{ 
 dispatch(actionCreators.fetchLocalData(_products))
  
}, []);


  return (
    <>
    <div className="heading_style">All Products</div>
   <div className="sortBtn">
    <button
    onClick={()=>dispatch(actionCreators.sort())} //Dispatching SORT action
    >Sort</button>
    
    {products.sort && <button
    onClick={()=>{
      dispatch(actionCreators.fetchLocalData(_products)) //Resuming nonsorted products list
      dispatch(actionCreators.removeSort()) //Dispatching REMOVE SORT action
    }}
    >X</button>}
   </div>
    <div className="cardholder">
      {/* Mapping over products list from products state */}
      {products.list.map((e) => {
        return (
          <Card
            key={e.id+"a"+e.price} //Unique key for each item
            id={e.id}
            title={e.title}
            price={e.price}
            imageUrl={e.thumbnail}
            item={e}
            editable={e.editable} //Props to start editing or not 
            deletable = {e.deletable} //Props to show delete confirmation
          />
        );
      })}
    </div>
    </>
  );
};

export default AllProducts;
 