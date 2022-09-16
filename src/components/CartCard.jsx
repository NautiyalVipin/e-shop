
// --------------------------------------------functional component CartCard(used in page CART) ----------------------------------------------

const CartCard = (props) => {
    const { id, thumbnail, title, price, description, removeFromCart } = props; //Props from Cart components
  return (
    <div className="cartItems">
    <div className="cartItem" >
      {/* Image for the product */}
    <img src={thumbnail} alt="" className="card_img" />
    <div className="cart_info">
      {/* Product Title, description and price */}
    <h3 className="cart_title">{title}</h3>
      <h3 className="cart_title">{description}</h3>
      <span className="cart_category">${price}</span>
    </div>
    <div className="cart_button">
      {/* Button to remove product from cart */}
      <button onClick={() => {
        removeFromCart(id)}}>Remove</button>
    </div>
    </div>
    </div>
   
    
  )
}

export default CartCard