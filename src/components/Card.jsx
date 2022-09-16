import { useNavigate} from "react-router-dom"; //useNavigate hook, to navigate to a link/path
import { useSelector,useDispatch } from "react-redux"; //Get state and set state hooks from react-redux
import * as actionCreators from "../store/actions"; //Action Creators for Redux



// ---------------------------------functional component Card(used in page ALL Products) ----------------------------------------------

const Card = (props) => {
  const editBody = useSelector(state=>state.products.editBody) //Getting "editBody" object from products state to save editing progress
  const dispatch = useDispatch(); //Getting dispatch of Redux
  const { id, imageUrl, title, price, item, editable,deletable } =
    props; // Props from AllProducts components
  
    const navigate = useNavigate();
  
  // Change Handler for any input change in product proerties
    const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(actionCreators.editChangeHandler(name, value));//Calling action creator to update global state for "editBody"
  };
  const {UPDATE_ITEM_HOME} = actionCreators //Action type to update item in all product page

  return (
    <div className="cards">
      <div className="card">
        {/* Navigate to product details page for the selected ID */}
        <img
          onClick={() => {
            navigate(`/productdetails/${id}`); 
          }}
          src={imageUrl}
          alt=""
          className="card_img"
        />
        <div className="card_info">
          {/* If editable allow users to provide input else not */}
          {editable ? (
            <>
              <h3 className="card_title">
                <input
                  name="title"
                  autoFocus
                  onChange={changeHandler}
                  defaultValue={title}
                />
              </h3>
              <h3 className="card_category">
                <input 
                name="price"
                onChange={changeHandler} 
                defaultValue={price} />
              </h3>
            </>
          ) : (
            <>
            {/* Not editable, read only state */}
              <h3 className="card_title">{title}</h3>
              <h3 className="card_category">${price}</h3>
            </>
          )}
        </div>
        <div className="card_button">
          {/* If editable show update button in place of Add to cart button */}
          {editable ? (
            
            <button
            //Update the global products list and local storage for the provided item in all products page
            onClick={() => dispatch(actionCreators.handleUpdateProduct(UPDATE_ITEM_HOME,editBody))} 
            >Update</button>
          ) : (
            <button 
              //Update the global cart list and local storage for the provided item
            onClick={() => dispatch(actionCreators.addToCart(item))}>ADD TO CART</button>
          )}
          <span>
            <i
              onClick={() => {
                // Toggle editable property
                dispatch(actionCreators.startEdit(id));
              }}
              className="fa-solid fa-pencil"
            ></i>
            <i 
            // Toggle deletable property
            onClick={()=>dispatch(actionCreators.startDelete(id))}
            className="fa-solid fa-trash"></i>
          </span>
        </div>
        
      </div>
      {/* If deletable show delete confirmation else not */}
      {deletable?<div className="card-delete"><span>
        Are you sure you want to delete?
        </span>
        <button
        // Delete the selected item and update the state
        onClick={()=>dispatch(actionCreators.handleDeleteProduct(id))}
        >Yes,Delete</button>
        <button
         // Close the delete confirmation without deleting, toggle deletable
         onClick={()=>dispatch(actionCreators.startDelete(id))}
        >Cancel</button>
        </div>:""}
      
    </div>
  );
};

export default Card;
