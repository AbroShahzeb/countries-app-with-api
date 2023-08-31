import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function CountryDetails({ theme, setTheme }) {
  let { name } = useParams();
  name = name.split("-").join(" ");
  const [country, setCountry] = useState({});

  useEffect(function () {
    async function getCountryData() {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`,
      );
      const data = await res.json();
      setCountry(data[0]);
    }

    getCountryData();
  }, []);

  return (
    <div className="min-h-screen  bg-light-mode-bg text-light-mode-text dark:bg-dark-mode-bg dark:text-white">
      <Header theme={theme} setTheme={setTheme} />
      <div>
        <div className="container mx-auto mt-8 flex items-center px-4 sm:px-4 md:mt-12 md:px-8 lg:px-20">
          <Link
            to="/"
            className=" flex items-center gap-4 bg-white p-3 px-5 dark:bg-dark-blue"
          >
            <img
              className="h-4"
              src={
                theme === "dark"
                  ? "/icons/icon-back-dark.svg"
                  : "/icons/icon-back-light.svg"
              }
              alt="Back arrow"
            />
            <p>Back</p>
          </Link>
        </div>

        <div className="container mx-auto mt-8 px-4 sm:px-4 md:mt-12 md:px-8 lg:px-20">
          <img
            src={country?.flags?.png}
            alt={country?.name?.common + "flag"}
            className="mt-16 w-full"
          />

          <div>
            <h1>{country?.name?.common}</h1>
            <div>
              <ul>
                <li>
                  <strong>Native Name: </strong>
                  Belgie
                </li>
                <li>
                  <strong>Population: </strong>
                  {Number(country?.population).toLocaleString()}
                </li>
                <li>
                  <strong>Region: </strong>
                  {country?.region}
                </li>
                <li>
                  <strong>Sub Region: </strong>
                  {country?.subregion}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {country?.capital}
                </li>
              </ul>

              <ul>
                <li>
                  <strong>Top Level Domain: </strong>
                  {country?.tld}
                </li>
                <li>
                  <strong>Currencies: </strong>
                  Euro
                </li>
                <li>
                  <strong>Languages: </strong>
                  {country?.region}
                </li>
              </ul>
            </div>

            <div>
              <h2>Border Countries</h2>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
