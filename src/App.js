import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import Login from "./containers/Login";
import listmakanan from "./components/listmakanan";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listmakakan" element={<listmakanan/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
