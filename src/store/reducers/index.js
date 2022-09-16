import { dataSetter, _products, _cart, dataGetter } from "../localStore"; //localstorage methods and keys

// All the action types
import {
  ADD_PRODUCT,
  ADD_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SHOW_PRODUCT,
  SORT,
  REMOVE_SORT,
  START_EDIT,
  EDIT_CHANGE,
  UPDATE_ITEM_HOME,
  DETAIL_CHANGE,
  UPDATE_ITEM_DETAIL,
  NEW_ITEM,
  DELETE_PRODUCT,
  START_DELETE,
} from "../actions";
import { combineReducers } from "redux"; //For combining multiple reducers

// Template for a single product object
const itemBody ={
    editable:false,
    deletable:false,
    id:1,
    title: "",
    description: "",
    rating: 0,
    price: 0,
    thumbnail:
      "https://previews.123rf.com/images/ronstik/ronstik1203/ronstik120300005/12718667-blank-product-box.jpg",
}
 
// Initializing the initial value for the products State
const products = {
  list: [],
  sort: false,
  item: {...itemBody},
  editBody: {...itemBody},
  newItem: {...itemBody}
   
};
// Reducer for handling all the actions related to products
const productsReducer = (state = products, action) => {
  switch (action.type) {
    // Load all the products to the state(product list) from API or LocalStorage
    case ADD_PRODUCTS:
      return { ...state, list: action.products };
    // Add a single product to the product list  
    case ADD_PRODUCT:
      let list = state.list.concat(action.product);
      dataSetter(_products, list); //Update Localstorage
      return { ...state, list,newItem:itemBody};
    // Delete a single product acc. to ID provided and update List
    case DELETE_PRODUCT:
      let list2 = state.list.filter(e=>e.id!==action.id);
      dataSetter(_products, list2); //Update Localstorage
      return { ...state, list:list2};
    // Load product details for the selected product id 
    case SHOW_PRODUCT:
      let item = state.list.find((e) => e.id === action.id);
      item.editable = false;
      item.deletable = false;
      return { ...state, item };
    // Update product list to be sorted by price  
    case SORT:
      let sortList = state.list.sort((a, b) => {
        return a.price - b.price;
      });
      return { ...state, list: sortList, sort: true };
    // Resume sort 
    case REMOVE_SORT:
      return { ...state, sort: false };
    // Make the content editable for the selected product id
    case START_EDIT:
      let editItem = {};
      let newList = state.list.map((e) => {
        if (e.id === action.id) {
          e.editable = true;
          editItem = { ...e };
          return e;
        } else return e;
      });
      dataSetter(_products, newList); //Update Localstorage
      return {
        ...state,
        list: newList,
        editBody: editItem,
        item: { ...state.item, editable: true },
      };
    // Start the delete process and show the confirmation    
    case START_DELETE:
        let bool
      let newList4 = state.list.map((e) => {
        if (e.id === action.id) {
          e.deletable = !e.deletable
          bool=e.deletable
          return e;
        } else return e;
      });
      dataSetter(_products, newList4); //Update Localstorage
      return {
        ...state,
        list: newList4,
        item: { ...state.item, deletable: bool },
      };
    // Update selected item on the all products page  
    case UPDATE_ITEM_HOME:
      let newList2 = state.list.map((e) => {
        if (e.id === action.product.id) {
          return { ...action.product };
        } else return e;
      });
      dataSetter(_products, newList2); //Update Localstorage
      return { ...state, list: newList2 };
    // Update selected item on the product detail page
    case UPDATE_ITEM_DETAIL:
      let newList3 = state.list.map((e) => {
        if (e.id === action.product.id) {
          return { ...action.product };
        } else return e;
      });
      dataSetter(_products, newList3); //Update Localstorage
      return { ...state, list: newList3, item: { ...action.product } };
    // save on change input for adding a new item  
    case NEW_ITEM:
      return {
        ...state,
        newItem: { ...state.newItem, [action.name]: action.value },
      };
     // save on change input for editing a all product page item    
    case EDIT_CHANGE:
      return {
        ...state,
        editBody: { ...state.editBody, [action.name]: action.value },
      };
    // save on change input for editing a  product detail page item   
    case DETAIL_CHANGE:
      return { ...state, item: { ...state.item, [action.name]: action.value } };

    default:
      return state;
  }
};

// Initializing the state for cart state
let cart= dataGetter(_cart) ? dataGetter(_cart) : [] //If key present in localstorage, retail cart items

const cartReducer = (state = cart, action) => {
    switch (action.type) {
        // Add Item to cart and update localstorage
        case ADD_TO_CART:
            let newCart = state.concat(action.product);
            dataSetter(_cart, newCart); //Update Localstorage
            return newCart
        // Remove Item from cart and update localstorage
        case REMOVE_FROM_CART:
            let newCart2 = state.filter((e, index) => index !== action.id);
            dataSetter(_cart, newCart2); //Update Localstorage
            return newCart2 
        default:
            return state
    }
}

const combinedReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer
});

export default combinedReducer;
