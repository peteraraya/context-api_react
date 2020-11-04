import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {

    const { theme, cambioColor}  = useContext(ThemeContext);


  const [color, setColor] = useState("");
  const [colorTexto, setColorTexto] = useState("");

  return (
    <div
      style={{
              background: theme.background,
              color: theme.color,
      }}
    >
      <h1>Navbar</h1>
      <label>Color fondo</label>
          <input type="color" onChange={(e) => cambioColor({ ...theme, background: e.target.value})} />
      <label>Color Texto</label>
          <input type="color" onChange={(e) => cambioColor({ ...theme, color: e.target.value })} />
    </div>
  );
};

export default Navbar;
