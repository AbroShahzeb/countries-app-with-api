import { useState, useEffect } from "react";
import Header from "../components/Header";
import Controls from "../components/Controls";
import Search from "../components/Search";
import Filters from "../components/Filters";
import CountryList from "../components/CountryList";

function Home({ theme, setTheme }) {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("default");

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
      if (!(region === "default")) {
        setCountries((countries) => {
          return countries.filter((country) => country.region === region);
        });
      }
    },
    [region],
  );

  useEffect(
    function () {
      const abortController = new AbortController();
      async function getCountryData() {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`,
          {
            signal: abortController.signal,
          },
        );

        if (res.ok) {
          const data = await res.json();
          setCountries(data);
        } else {
          setCountries([]);
        }
      }
      if (countryName) {
        getCountryData();
      } else {
        async function getCountryData() {
          const res = await fetch("https://restcountries.com/v3.1/all");
          const data = await res.json();
          setCountries(data);
        }

        getCountryData();
      }

      return () => abortController.abort();
    },

    [countryName],
  );

  return (
    <div className="min-h-screen  bg-light-mode-bg text-light-mode-text dark:bg-dark-mode-bg dark:text-white">
      <Header setTheme={setTheme} theme={theme} />
      <Controls>
        <Search
          theme={theme}
          countryName={countryName}
          setCountryName={setCountryName}
        />
        <Filters region={region} setRegion={setRegion} />
      </Controls>

      <CountryList countries={countries} />
    </div>
  );
}

export default Home;
