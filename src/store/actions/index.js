import { dataGetter, dataSetter, _products } from "../localStore"; //localstorage methods and keys
import { toast } from "react-toastify"; //Notification method
import "react-toastify/dist/ReactToastify.css"; //Notification stylesheet
import { useNavigate } from "react-router-dom";

// Notify functions for various tasks
const notifyAdd = () => toast.success("Product Added Successfully");
const notifyError = (error) => toast.error(error);
const notifyEdit = () => toast.success("Product Edited Successfully");
const notifyDelete = () => toast.success("Product Deleted Successfully");

// Action types for various tasks
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const SORT = "SORT";
export const REMOVE_SORT = "REMOVE_SORT";
export const START_EDIT = "START_EDIT";
export const START_DELETE = "START_DELETE";
export const EDIT_CHANGE = "EDIT_CHANGE";
export const NEW_ITEM = "NEW_ITEM";
export const DETAIL_CHANGE = "DETAIL_CHANGE";
export const UPDATE_ITEM_HOME = "UPDATE_ITEM_HOME";
export const UPDATE_ITEM_DETAIL = "UPDATE_ITEM_DETAIL";

// Action creators for various tasks

// dispatches products list to the reducer
export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    products,
  };
};

// dispatches product to be added to the productreducer
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

// dispatches id of the deleted product to the productreducer
export const deleteProduct = (id) => {
  
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

// starts the delete process, asks for confirmation from user
export const startDelete = (id) => {
  return {
    type: START_DELETE,
    id
  };
};

// dispatches product to be added to cart to cartReducer
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

// dispatches product to be removed  to the cartReducer
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

// makes the selected id editable for any change
export const startEdit = (id) => {
  return {
    type: START_EDIT,
    id,
  };
};

// Updates item in all products page by copying the "editBody" into products list
export const updateItemHome = (product) => {
  return {
    type: UPDATE_ITEM_HOME,
    product,
  };
};

// Updates item in  product details by copying the "item" into products list
export const updateItemDetail = (product) => {
  return {
    type: UPDATE_ITEM_DETAIL,
    product,
  };
};

// Saves provided input value for the given field and  for adding a new product to "newItem"
export const newChangeHandler = (name, value) => {
  return {
    type: NEW_ITEM,
    name,
    value,
  };
};

// Saves provided input field and value for updating product to "editBody" item
export const editChangeHandler = (name, value) => {
  return {
    type: EDIT_CHANGE,
    name,
    value,
  };
};

// Saves provided input for updating product to "item" item
export const detailChangeHandler = (name, value) => {
  return {
    type: DETAIL_CHANGE,
    name,
    value,
  };
};

// dispatches product id to the productReducer for loading an item in productDetails page
export const showProduct = (id) => {
  return {
    type: SHOW_PRODUCT,
    id: parseInt(id),
  };
};

// Display a sorted list based on price in ascending order
export const sort = () => {
  return {
    type: SORT,
  };
};

// Remove sort 
export const removeSort = () => {
  return {
    type: REMOVE_SORT,
  };
};

// Load the products list from the api if local storage key is not present
export const handleFetchProducts = () => {
  const url = "https://my-json-server.typicode.com/nautiyalvipin/JSONserver/products";
  return async (dispatch) => {
    try {
        const response = await fetch(url);
        if(response.status===200){
      const data = await response.json();
      let updatedData = data.map((e) => {
        e.editable = false; //Adding editable property for edit
        e.deletable = false; //Adding deletable property for deleting
        return e;
      });
      dataSetter(_products, updatedData); //Creating the _products key and loading the data
      dispatch(addProducts(updatedData)); //Calling action creator to update global state
    }
    else{
        notifyError(response.statusText)
    }
    } catch (error) {
      notifyError(error);
    }
  };
};

export const fetchLocalData = (key) => {
  return (dispatch) => {
    let data = dataGetter(key);
    dispatch(addProducts(data));
  };
};

// Updating a product using PUT request via API
export const handleUpdateProduct = (type, product) => {
  const { title, price, description, rating, id } = product;
  const url = `https://my-json-server.typicode.com/nautiyalvipin/JSONserver/products/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         ...product
        }),
      });
      if(response.status===200){
      const data = await response.json();
      data.editable = false; //reset property
      data.deletable = false; //reset property
    //   If update required in allproducts page
      if (type === UPDATE_ITEM_HOME) {
        dispatch(updateItemHome(data)); 
        notifyEdit(); //Success Notification
    //   If update required in products detail page 
      } else if (type === UPDATE_ITEM_DETAIL) {
        dispatch(updateItemDetail(data));
        notifyEdit(); //Success Notification
      }
    }
    else{
        notifyError(response.statusText) //Locatl server error notification
    }
    } catch (error) {
      notifyError(error); //Internal Server Error Notification
    }
  };
};


// Adding a product via POST mehtod of fetch API
export const handleAddProduct = (product) => {
    const { title, price, description, rating, id,thumbnail } = product;
  const url = "https://my-json-server.typicode.com/nautiyalvipin/JSONserver/products"
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,price,description,rating,thumbnail
        }),
      });
      if(response.status===201){
      const data = await response.json();
      data.editable = false; //Adding prop to edit
      data.deletable = false; //Adding prop to delete
      dispatch(addProduct(data)); //Calling action creator for adding product to list
      notifyAdd();
      }
      else{
        notifyError(response.statusText)
      }
    } catch (error) {
      notifyError(error);
    }
  };
};

// Deleting the product using DELETE method of fetch API
export const handleDeleteProduct = (id) => {
  const url = `https://my-json-server.typicode.com/nautiyalvipin/JSONserver/products/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if(response.status===200){
      dispatch(deleteProduct(id)); // Calling action creator to remove item from local storage and global state
      notifyDelete();
      }
      else{
        notifyError(response.statusText)
      }
    } catch (error) {
      notifyError(error);
    }
  };
};

