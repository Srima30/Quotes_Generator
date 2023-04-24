import React from "react";
import Quotegen from "./Quotegen";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
    <Header/>
    <div id="gen">
      <Quotegen/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;