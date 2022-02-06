import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./views/homePage";
import NotFoundPage from "./views/404Page";
import ListTest from "./views/todoPage";

function App () {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/todoPage" element={<ListTest />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;