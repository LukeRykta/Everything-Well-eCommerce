import "../css/CartScreen.css";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { toRemove} from "../../redux/cartRedux";
import {useDispatch} from "react-redux";


const CartScreen = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()


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

                     <Link to ={`/item/${product._id}`} className="cartitem_name">
                         <p>{product.title}</p>
                     </Link>

                     <p className="cartitem_price">${(product.price * product.quantity).toFixed(2)}</p>
                     <p className="cartitem_price">{product.quantity}</p>

                     <button onClick={() => dispatch(toRemove(product,product.id))} className="cartitem_deleteBtn">
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
                 <input

                     name="promo code"

                     className="form-control mt-4"
                     placeholder="Enter Promo Code"
                     type="text"
                 />


             </div>

             <div className="cartscreem_info">
                 <h2>Order Summary</h2>

                 <tr>
                     <th><span>Subtotal</span></th>
                     <th> <span className="move_right">${cart.total.toFixed(2)}</span></th>

                 </tr>

                 <tr>
                     <td><span>Shipping</span></td>
                     <td> <span className="move_right">${5.99}</span></td>

                 </tr>

                 <tr>
                     <td><span>Tax</span></td>
                     <td> <span className="move_right">${(cart.total *.0825).toFixed(2)}</span></td>

                 </tr>



                 <tr>
                     <th><span>Total</span></th>
                     <th><span className="move_right">${(cart.total+Number(5.99)+(cart.total *.0825)).toFixed(2)}</span></th>
                 </tr>


             </div>

             <div>
             <button style={{backgroundColor: "rgba(119,82,158,1)", borderRadius: "25px"}}><Link to="/Checkout"><p style={{color: "whitesmoke"}}>Checkout</p></Link></button>
             </div>



         </div>


        </div>
    );
};

export default CartScreen;