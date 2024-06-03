import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Početna from "../pages/Početna";
import ONama from "../pages/ONama";
import Automobili from "../pages/Automobili";
import Automobil from "../pages/Automobil";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
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
          <Route path="/blogovi" element={<Blog />} />
          <Route path="/blogovi/:slug" element={<BlogDetails />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
}
 
export default Routers;