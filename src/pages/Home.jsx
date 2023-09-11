/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Controls from "../components/Controls";
import Search from "../components/Search";
import Filters from "../components/Filters";
import CountryList from "../components/CountryList";

function Home({ theme, setTheme }) {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("default");

  let filteredCountries =
    region !== "default"
      ? countries.filter((country) => country.region === region)
      : countries;

  useEffect(function () {
    async function getCountryData() {
      setLoading(true);
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    }

    getCountryData();
  }, []);

  useEffect(
    function () {
      async function getCountriesData() {
        setLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      }
      const abortController = new AbortController();

      async function getCountryData() {
        setLoading(true);
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
        setLoading(false);
      }
      if (countryName.length > 2) {
        getCountryData();
      }

      if (countryName.length === 0) {
        getCountriesData();
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
      {loading ? (
        <p className="mt-16 text-center text-2xl font-bold">Loading...</p>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default Home;
