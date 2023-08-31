import { useState, useEffect } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Search from "./components/Search";
import Filters from "./components/Filters";
import CountryList from "./components/CountryList";

function App() {
  const [theme, setTheme] = useState("dark");
  const [countries, setCountries] = useState([]);

  // Function to toggle the theme
  function toggleTheme() {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme((theme) => {
      return theme === "dark" ? "light" : "dark";
    });
  }

  useEffect(function () {
    async function getCountryData() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    }

    getCountryData();
  }, []);

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
    <div className="text-light-mode-text  bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen dark:text-white">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Controls>
        <Search theme={theme} />
        <Filters />
      </Controls>

      <CountryList countries={countries} />
    </div>
  );
}

export default App;
