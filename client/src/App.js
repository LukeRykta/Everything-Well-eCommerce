import React from 'react';
import './views/css/Home.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./views/pages/home";
import TrackPart from "./views/pages/tracks";
import NotFoundPage from "./views/pages/404";
import ListTest from "./views/pages/todo";
import FitPage from "./views/pages/fitness";
import NutPage from "./views/pages/nutrition";
import WellPage from "./views/pages/wellness";
import Login from "./views/pages/login";
import ItemDetails from "./views/pages/itemDetails";
import NavBar from "./components/NavBar";
import AddItem from "./views/pages/addItem";
import Register from "./views/pages/register";
import Account from "./views/pages/Account";
import AuthRoute from "./components/AuthRoute";
import AdminRoute from "./components/AdminRoute";
import EditItem from "./views/pages/EditItem";
// import CartPage from "./views/pages/CartScreen";
import Checkout from "./views/pages/Checkout";
import Settings from "./views/pages/settings";


function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<MainPage />} /> //Route to main page
                <Route path="/tracks" element={<TrackPart />} /> //Route to track page
                <Route element={<AdminRoute/>}>
                    <Route path="/addItem" element={<AddItem />} /> //page to create new item
                    <Route path="/settings" element={<Settings/>} />
                </Route>
                    <Route element={<AuthRoute />}> //Contains routes to protected pages
                </Route>
                <Route path="*" element={<NotFoundPage />} /> //default 404 page
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                {/*<Route path="/cart" element={<CartPage />} />*/}
                <Route path="/editItem/:id" element={<EditItem/>} />
                <Route path="/todo" element={<ListTest />} />
                <Route path="/fitness" element={<FitPage />} />
                <Route path="/wellness" element={<WellPage />} />
                <Route path="/nutrition" element={<NutPage />} />
                <Route path="/itemDetails" element={<ItemDetails />} /> //detail page for item that is clicked on
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
import NavBar from "./components/navbar";
 */