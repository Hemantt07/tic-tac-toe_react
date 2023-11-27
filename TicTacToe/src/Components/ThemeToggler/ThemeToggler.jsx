import { useEffect, useState } from "react";
import "./ThemeToggler.css";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ThemeToggler() {
  const [colorMode, setColorMode] = useState(localStorage.getItem("colorMode"));
  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("data-theme", colorMode == "dark" ? "dark" : "light");
  }, [colorMode]);

  const changeMode = () => {
    localStorage.setItem("colorMode", colorMode !== "dark" ? "dark" : "light");
    setColorMode(colorMode !== "dark" ? "dark" : "light");
  };

  return (
    <Box onClick={changeMode} className="toggler">
      {colorMode == "dark" ? (
        <Brightness4Icon className="darkBtn" />
      ) : (
        <Brightness7Icon className="lightBtn" />
      )}
    </Box>
  );
}
