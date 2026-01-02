import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/Nav.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tasks" element={<Tasks />} />
          <Route path="/types" element={<Types />} />
          <Route path="/categories" element={<Categories />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
