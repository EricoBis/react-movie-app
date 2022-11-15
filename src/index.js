import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import MovieDetails from "./pages/MovieDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="search" element={<SearchResult />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
