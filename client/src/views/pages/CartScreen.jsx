import "../css/CartScreen.css";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const CartScreen = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div className="cartscreen">
         <div className="cartscreen_left">
            <h2>Shopping Cart</h2>
             {cart.products.map(product => (
                 <div className="cartitem">
                     <div className= "resizeimage">
                         <img src={product.image}
                              alt="product name"/>
                     </div>

                     <Link to ={`/product/${111}`} className="cartitem_name">
                         <p>{product.title}</p>
                     </Link>

                     <p className="cartitem_price">${product.price * product.quantity}</p>

                     <select
                     className="cartitem_select"
                     value={product.quaantity}
                     onChange={() => console.log('something')}>
                         {[...Array(product.quantity).keys()].map(x =>(
                             <option key={x+1} value={x+1}> {x+1}</option>
                         ))}
                     </select>

                     <button className="cartitem_deleteBtn">
                         <i style={{textAlign: 'center',
                             width: "100%"}} className="fas fa-trash"></i>
                     </button>
                 </div>
                 )
             )}
         </div>
         <div className="cartscreen_right">
             <div className="cartscreen_discount">
                 <h2>Promo Code</h2>
                 <span>Total</span>


             </div>

             <div className="cartscreem_info">
                 <h2>Order Summary</h2>

                 <tr>
                     <th><span>Total</span></th>
                     <th> <span className="move_right">${cart.total.toFixed(2)}</span></th>

                 </tr>
                 <tr>
                     <td><span>Discount</span></td>
                     <td> <span className="move_right">${cart.total.toFixed(2)}</span></td>

                 </tr>

             </div>

             <div>
                 <button style={{backgroundColor: "rgba(119,82,158,1)", borderRadius: "25px"}}>Proceed to Checkout</button>
             </div>



         </div>


        </div>
    );
};

export default CartScreen;