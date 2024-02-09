import React from "react";
import "./App.css";                                             //  ./ means current directory
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function nomenclature in PascalCasing
function App() {
  // We have created a React component using function componet just like regular JS function
  //const name = "Jyotirmay";
  return (
    <>
      {/*       JSX Comment, <></> are fragments when we want to wrap multiple lines of code       */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="App"> */}
      {/*       class is reserved in JavaScript that's why we use className       */}
      {/*<h1>{name} Travels</h1>*/}
      {/*       JSX: JavaScript XML, write any expression within {}       */}
      {/*<hr />        Close empty elements with '/'       */}
      {/* </div> */}
    </>
  );
}

export default App;
