import "../css/CartScreen.css";
import "../css/CartItem.css";
import "../css/resizeImage.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { toRemove} from "../../redux/cartRedux";
import {useDispatch} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {useState} from "react";



const CartScreen = () => {
    const KEY = process.env.REACT_APP_STRIPE;
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const dispatch = useDispatch()
    const shipping = "1.99"
    const free = "0.00"
    const finalTotal = (cart.total+Number(cart.total === 0 ? free : shipping)+(cart.total *.0825)).toFixed(2);
    const onToken = (token) => {
        setStripeToken(token);
    };
    console.log(stripeToken)

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

                     <button onClick={() => dispatch(toRemove(product))} className="cartitem_deleteBtn">
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
                     <td> <span className="move_right">${cart.total === 0 ? free : shipping}</span></td>

                 </tr>

                 <tr>
                     <td><span>Tax(0.08%)</span></td>
                     <td> <span className="move_right">${(cart.total *.0825).toFixed(2)}</span></td>

                 </tr>



                 <tr>
                     <th><span>Total</span></th>
                     <th><span className="move_right">${finalTotal}</span></th>
                 </tr>


             </div>

             <div>
                 <StripeCheckout
                     name="Everything Well"
                     image="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
                     billingAddress
                     shippingAddress
                     description={`Your total is $${finalTotal}`}
                     amount={finalTotal * 100}
                     token={onToken}
                     stripeKey={KEY}
                 >
                    <button style={{backgroundColor: "rgba(119,82,158,1)", borderRadius: "25px"}}>
                        <Link to='/checkout'><i style={{color: "whitesmoke" , textDecoration: "none"}}>
                            Checkout</i>
                        </Link>
                    </button>
                 </StripeCheckout>
             </div>



         </div>


        </div>
    );
};

export default CartScreen;