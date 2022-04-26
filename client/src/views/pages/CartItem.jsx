import '../css/CartItem.css';
import '../css/resizeImage.css';
import {Link} from 'react-router-dom'


const CartItem = () =>{
    return <div className="cartitem">
        <div className= "resizeimage">
            <img src="https://sneakernews.com/wp-content/uploads/2022/01/union-nike-dunk-low-DJ9649-401-2.jpg"
                 alt="product name"/>
        </div>

        <Link to ={`/product/${111}`} className="cartitem_name">
            <p>Product 1</p>
        </Link>

        <p className="cartitem_price">$499.99</p>
        <select className="cartitem_select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button className="cartitem_deleteBtn">
            <i className="fas fa-trash"></i>
        </button>
    </div>
};

export default CartItem;