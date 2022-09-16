import { useSelector,useDispatch } from "react-redux" //Get state and set state hooks from react-redux
import * as actionCreators from "../store/actions"; //Action Creators for Redux




// ----------------------------------------- functional component(Add a Product Page) ----------------------------------------------

const AddProduct = () => {
  const newItem = useSelector(state=>state.products.newItem) //Getting data for "newItem" to load the on change inputs
  const dispatch = useDispatch() //Getting dispatch from redux


   // Change Handler for any input change 
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(actionCreators.newChangeHandler(name, value)); //Calling action creator to update global state for "newItem"
  };
  return (
    <div className="heading_style">
      Add a Product
    <form 
    method="POST"  
    onSubmit={(e)=>{
                e.preventDefault()
                dispatch(actionCreators.handleAddProduct(newItem) //Calling Action to add product to DB using POST method of fetch API
                
                )
            }}>
    <div >
            <label  htmlFor="name">Name</label>
            <input  type="text" id="name" name="title" value={newItem.title} onChange={changeHandler}  />
            </div> 
    <div >
            <label  htmlFor="description">Description</label>
            <input  type="text" id="description" name="description" value={newItem.description} onChange={changeHandler}  />
            </div> 
    <div >
            <label  htmlFor="price">Price</label>
            <input  type="number" id="price" name="price" value={newItem.price} onChange={changeHandler}  />
            </div> 
    <div >
            <label  htmlFor="rating">Rating</label>
            <input  type="number" min={0} max={5} id="rating" name="rating" value={newItem.rating} onChange={changeHandler}  />
            </div> 
            {/* Triggers Onsubmit method mentioned above */}
            <button 
            >ADD</button> 

    </form>
    </div>
  );
};


export default AddProduct;
