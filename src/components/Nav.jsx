import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav id="navbar">
        <Link to="/tasks">Tasks</Link>
        <Link to="/types">Types</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
}
