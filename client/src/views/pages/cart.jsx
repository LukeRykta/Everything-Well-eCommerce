import React from "react";
import '../css/Cart.css'
import Header from './header'
import Main from './main'
import Basket from './basket'
import {Link} from "react-router-dom";

function CartPage(){
    return(
        <div className="Cart">
            <Header></Header>
            <div className = "row">
                <Main></Main>
                <Basket></Basket>
            </div>
        </div>
    );
}
export default CartPage;