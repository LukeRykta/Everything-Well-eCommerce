import React from 'react';
import './views/css/Home.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./views/pages/home";
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
import AuthRoute from "./components/AuthRoute";

function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route element={<AuthRoute/>}>
                    <Route path="/addItem" element={<AddItem />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<ListTest />} />
                <Route path="/fitness" element={<FitPage />} />
                <Route path="/wellness" element={<WellPage />} />
                <Route path="/nutrition" element={<NutPage />} />
                <Route path="/itemDetails" element={<ItemDetails />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/addItem" element={<AddItem />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
import NavBar from "./components/navbar";
 */