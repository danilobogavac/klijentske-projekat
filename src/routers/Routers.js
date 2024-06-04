import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Početna from "../pages/Početna";
import ONama from "../pages/ONama";
import Automobili from "../pages/Automobili";
import Automobil from "../pages/Automobil";
import Blog from "../pages/Blog";
import Blogovi from "../pages/Blogovi";
import NotFound from "../pages/NotFound";
import Kontakt from "../pages/Kontakt";

const Routers = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to="/početna" />} />
          <Route path="/početna" element={<Početna />} />
          <Route path="/onama" element={<ONama />} />
          <Route path="/automobili" element={<Automobili />} />
          <Route path="/automobili/:slug" element={<Automobil />} />
          <Route path="/blogovi" element={<Blogovi />} />
          <Route path="/blogovi/:slug" element={<Blog />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
}
 
export default Routers;