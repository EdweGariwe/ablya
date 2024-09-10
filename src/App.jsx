import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Loading";
import HomePage from "./HomePage";

const App = () => {
  console.log("App");

  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default App;
