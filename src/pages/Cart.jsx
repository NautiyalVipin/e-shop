import { useSelector,useDispatch } from "react-redux" //Get state and set state hooks from react-redux
import * as actionCreators from "../store/actions"; //Action Creators for Redux
import CartCard from "../components/CartCard"; 



// ----------------------------------------- functional component(Cart Page) ----------------------------------------------

const Cart = () => {
  const cart = useSelector((state)=>state.cart) //Getting data for cart list from cart state
  
  // Calculating total sum of the price present in cart
  const total = cart.reduce((sum,product)=>{
      sum=sum+parseInt(product.price)
      return sum;
  },0)


  const dispatch = useDispatch() //Getting dispatch from redux
  
  // function to dispatch remove cart action, passed as prop to Cartcard
  const removeFromCart = (id)=>{
    dispatch(actionCreators.removeFromCart(id))
  }
  return (
    <>
     <div className="heading_style">Cart</div>
    <div className="cartContainer">
      {/* Mapping over all the items present in cart list  */}
      {cart.map((product,index)=>{
        return <CartCard
        key={index}
        id={index}
        title={product.title}
        description={product.description}
        price={product.price}
        thumbnail={product.thumbnail}
        item={product}
        removeFromCart={removeFromCart}
        />
      })}
    </div>
    <div className="cartItems">
    <div className="cartItem" >
    <p></p>
    <div className="cart_info">
      <h3 className="cart_title">Total Price</h3>
      {/* Total price of all the cart items */}
      <span className="cart_category">${total}</span>
    </div>
    <div className="cart_button">
      <button disabled >Make Payment</button>
    </div>
    </div>
    </div>
  
    </>
  )
}

export default Cart