import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/errors/404/NotFoundPage";
import Layout from "./components/util/Layout";
import { ThemeProvider } from "@mui/material";
import MapPage from "./pages/maps/MapPage";
import SearchPage from "./pages/search/SearchPage";

interface Props {}

function RouteManagerComponent(props: Props) {
  const {} = props;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/maps" element={<MapPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default RouteManagerComponent;
