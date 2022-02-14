import React from 'react';
import './views/css/Home.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./views/pages/home";
import NotFoundPage from "./views/pages/404";
import ListTest from "./views/pages/todo";
import FitPage from "./views/pages/fitness";
import NutPage from "./views/pages/nutrition";
import WellPage from "./views/pages/wellness";
import NavBar from "./components/navbar";

function App () {
  return (
      <BrowserRouter>
          <Routes>

              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/todo" element={<ListTest />} />
              <Route path="/fitness" element={<FitPage />} />
              <Route path="/nutrition" element={<NutPage />} />
              <Route path="/wellness" element={<WellPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;