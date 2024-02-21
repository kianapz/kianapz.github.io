import { useContext } from "react";
import * as fa from "react-icons/fa";
import { ThemeContext } from "../context/Theme";
import { Link } from "react-router-dom";
import logoLight from "../../public/logo.png";
import logoDark from "../../public/logo-dark.png";

export default function Nav() {
  const navSpanLight: string =
    "relative inline-block group text-black font-cmu animate-fadeIn";
  const navSpanDark: string =
    "relative inline-block group text-slate-300 font-cmu animate-fadeIn";
  const spanUnderlineLight: string =
    "absolute bottom-0 left-0 w-full h-px bg-black transform origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100";
  const spanUnderlineDark: string =
    "absolute bottom-0 left-0 w-full h-px bg-slate-300 transform origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100";
  const { theme, toggleTheme } = useContext(ThemeContext);
  const logo = theme === "light" ? logoLight : logoDark;

  return (
    <nav
      key={theme}
      className="w-full h-20 flex items-center justify-evenly animate-fadeIn"
    >
      <Link to= "/">
      <img src={logo} alt="Logo" className="h-8" />
      </Link>
      <Link to="/">
        <span className={theme === "light" ? navSpanLight : navSpanDark}>
          Home
          <span
            className={
              theme === "light" ? spanUnderlineLight : spanUnderlineDark
            }
          ></span>
        </span>
      </Link>

      <Link to="/projects">
        <span className={theme === "light" ? navSpanLight : navSpanDark}>
          Projects
          <span
            className={
              theme === "light" ? spanUnderlineLight : spanUnderlineDark
            }
          ></span>
        </span>
      </Link>

      <Link to="/contact">
        <span className={theme === "light" ? navSpanLight : navSpanDark}>
          Contact
          <span
            className={
              theme === "light" ? spanUnderlineLight : spanUnderlineDark
            }
          ></span>
        </span>
      </Link>

      <Link to="/resume">
        <span className={theme === "light" ? navSpanLight : navSpanDark}>
          Resume
          <span
            className={
              theme === "light" ? spanUnderlineLight : spanUnderlineDark
            }
          ></span>
        </span>
      </Link>

      {theme === "light" ? (
        <fa.FaMoon
          className="text-black animate-fadeIn"
          onClick={() => toggleTheme()}
        ></fa.FaMoon>
      ) : (
        <fa.FaSun
          className="text-slate-300 animate-fadeIn"
          onClick={() => toggleTheme()}
        ></fa.FaSun>
      )}
    </nav>
  );
}