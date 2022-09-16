import { useSelector,useDispatch } from "react-redux" //Get state and set state hooks from react-redux
import * as actionCreators from "../store/actions"; //Action Creators for Redux
import { useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom" //navigate to go to a link/path, params to get props from url/path


// ----------------------------------------- functional component(ProductDetails Page) ----------------------------------------------

const ProductDetails = () => {
    const navigate = useNavigate() 
    const {id} = useParams() //Getting ID from url 

    const product = useSelector((state)=>state.products.item) //Getting "item" data from products state to save the onchange inputs
    const dispatch = useDispatch(); //Getting dispatch from redux 
    
    // Change Handler for any input change in product properties
    const changeHandler = (e) => {
      const { name, value } = e.target;
      dispatch(actionCreators.detailChangeHandler(name, value)); //Calling action creator to update global state for "item"
    };
    const {UPDATE_ITEM_DETAIL} = actionCreators //Action type to update item in product details page

useEffect(()=>{
  dispatch(actionCreators.showProduct(id)) // Action dispatched to load the id product from products list in "item"
},[])

    return (
    <><div className="heading_style">
      Product Details
      </div>
      <div className="cartItems">
    <div className="editItem" >
      <div className="edit_img">
    <img src={product.thumbnail} alt="" className="edit_img" />
    <p className="cart_category">{product.title}</p>
   
      </div>
    <div className="edit_info">
      <h3 className="edit_title">
      <textarea className="area-label" disabled defaultValue="Name:"/> 
       {/* It editable allow users to edit the properties else textareas and input fields will be disabled */}
        {product.editable?<textarea 
        onChange={changeHandler} 
        name="title" 
        className="area1" 
        autoFocus
        value={product.title}/>:<span>{product.title}</span>}
        </h3>
      <h3 className="edit_title">
        <textarea className="area-label" disabled defaultValue="Desc:"/> 
        <textarea 
        onChange={changeHandler}
        name="description"
        className="area2" 
        disabled={!product.editable} 
        value={product.description}/>
        </h3>
      <h3 className="edit_title">
        <input disabled defaultValue="Price:"/> 
        <input 
        autoFocus={!product.editable}
        onChange={changeHandler}
        name="price"
        disabled={!product.editable} 
        value={product.price}/>
        </h3>
      <h3 className="edit_title">
      <input disabled defaultValue="Rating:"/> 
        <input 
        onChange={changeHandler}
        name="rating"
        disabled={!product.editable} 
        value={product.rating}/>
        </h3>
    </div>
    <div className="edit_button">
      {/* Update products list for the changes in product using "item as product" object  */}
          {product.editable ? (
            <button
            onClick={() => dispatch(actionCreators.handleUpdateProduct(UPDATE_ITEM_DETAIL,product))}
            >Update</button>
          ) : (
            
            <button 
              // Add item to cart list in state cart 
            onClick={() => dispatch(actionCreators.addToCart(product))}>ADD TO CART</button>
          )}
        
            <i
            // Toggle editable property
              onClick={() =>dispatch(actionCreators.startEdit(product.id))}
              className="fa-solid fa-pencil"
            ></i>
            <i 
            // Toggle deletable property and show delete confirmation
             onClick={()=>dispatch(actionCreators.startDelete(product.id))}
            className="fa-solid fa-trash"></i>  
    </div>
    </div>
    </div>
    {product.deletable?<div className="card-delete"><span>
        Are you sure you want to delete?
        </span>
        {/* Delete the loaded id item */}
        <button
        onClick={()=>{
          dispatch(actionCreators.handleDeleteProduct(product.id))
          navigate("/allproducts")

        }}
        >Yes,Delete</button>
        <button
        // Toggle deletable property, remove delete confirmation without deleting
        onClick={()=>dispatch(actionCreators.startDelete(product.id))}
        >Cancel</button>
        </div>:""}
    </>
  )
}

export default ProductDetails