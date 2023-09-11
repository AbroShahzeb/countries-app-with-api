/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function CountryDetails({ theme, setTheme }) {
  let { name } = useParams();
  name = name.split("-").join(" ");
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(
    function () {
      async function getCountryData() {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`,
        );
        const data = await res.json();
        setCountry(data[0]);
      }

      getCountryData();
      setBorderCountries([]);
    },
    [name],
  );

  useEffect(
    function () {
      country?.borders?.map(async (border) => {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${border}&fields=name`,
        );

        const data = await res.json();
        setBorderCountries((countries) => [
          ...new Set([...countries, data.at(0).name.common]),
        ]);
      });
    },
    [country],
  );

  return (
    <div className="min-h-screen  bg-light-mode-bg pb-8 text-light-mode-text dark:bg-dark-mode-bg dark:text-white">
      <Header theme={theme} setTheme={setTheme} />
      <div>
        <div className="container mx-auto mt-8 flex items-center px-4 sm:px-4 md:mt-12 md:px-8 lg:px-20">
          <Link
            to={import.meta.env.DEV ? "/" : "/countries-app-with-api/"}
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

        <div className="container mx-auto mt-8 px-4 sm:flex sm:items-center sm:gap-5 sm:px-4 md:mt-12 md:justify-center md:px-8 lg:px-20 ">
          <img
            src={country?.flags?.png}
            alt={country?.name?.common + "flag"}
            className="mt-16 w-full md:mt-0 md:w-1/3"
          />

          <div className="flex flex-col gap-6">
            <h1 className="mt-6 text-xl font-bold">{country?.name?.common}</h1>
            <div className="flex flex-col gap-8 md:flex-row">
              <ul className="flex flex-col gap-2">
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">
                    Native Name:
                  </strong>
                  {country.name
                    ? Object.values(country?.name?.nativeName)
                        .map((n) => n.common)
                        .join(", ")
                    : ""}
                </li>
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">
                    Population:{" "}
                  </strong>
                  {Number(country?.population).toLocaleString()}
                </li>
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">Region: </strong>
                  {country?.region}
                </li>
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">
                    Sub Region:{" "}
                  </strong>
                  {country?.subregion}
                </li>
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">Capital: </strong>
                  {country?.capital}
                </li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">
                    Top Level Domain:{" "}
                  </strong>
                  {country?.tld}
                </li>
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">
                    Currencies:{" "}
                  </strong>
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : ""}
                </li>
                <li className="flex gap-1">
                  <strong className="text-md font-semibold">Languages: </strong>
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : ""}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-md font-semibold">Border Countries:</h2>
              <ul className="flex flex-wrap gap-3">
                {borderCountries.length ? (
                  borderCountries.map((country) => (
                    <li
                      key={country}
                      className=" rounded-sm border-2 border-gray-300 px-5 py-2 text-center text-sm dark:border-dark-blue dark:bg-dark-blue"
                    >
                      <Link to={`/${country}`}>{country}</Link>
                    </li>
                  ))
                ) : (
                  <p>No border country</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
