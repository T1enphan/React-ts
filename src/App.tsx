import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/header";
import HomePage from "./pages/HomePage";
import Footer from "./layouts/footer";
import CreatePizzaPage from "./pages/CreatePizzaPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <CreatePizzaPage /> */}
      <Footer />
    </div>
  );
}

export default App;
