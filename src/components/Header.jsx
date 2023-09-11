/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MoonIconLight from "/icons/icon-moon-light.svg";
import MoonIconDark from "/icons/icon-moon-dark.svg";

export default function Header({ theme, setTheme }) {
  const navigate = useNavigate();
  // Function to toggle the theme
  function toggleTheme() {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme((theme) => {
      return theme === "dark" ? "light" : "dark";
    });
  }
  useEffect(
    function () {
      let localTheme = localStorage.getItem("theme");
      if (localTheme) {
        setTheme(localTheme);
      } else {
        localStorage.setItem("theme", "light");
      }

      let bodyEl = document.getElementsByTagName("body")[0];
      if (theme === "dark") {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    },
    [theme],
  );

  return (
    <header className="flex w-full items-center justify-between bg-white  px-4 py-8 shadow-sm dark:bg-dark-blue sm:px-4 md:px-8  lg:px-20">
      <Link to={"/"}>
        <h1 className=" text-lg font-bold">Where in the world?</h1>
      </Link>
      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={toggleTheme}
      >
        <img
          src={theme === "dark" ? MoonIconDark : MoonIconLight}
          alt="Moon Icon Light Mode"
          className="w-4 -rotate-[30deg]"
        />
        <p className="text-sm font-bold">Dark Mode</p>
      </div>
    </header>
  );
}
