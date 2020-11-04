import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {
  const [color, setColor] = useState("");
  const [colorTexto, setColorTexto] = useState("");

  return (
    <div
      style={{
        background: color,
        color: colorTexto,
      }}
    >
      <h1>Navbar</h1>
      <span>Color fondo</span>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <span>Color Texto</span>
      <input type="color" onChange={(e) => setColorTexto(e.target.value)} />
    </div>
  );
};

export default Navbar;
