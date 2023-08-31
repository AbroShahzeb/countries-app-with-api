import { Link } from "react-router-dom";

export default function Country({ country }) {
  return (
    <div className="overflow-hidden rounded-md bg-white pb-8 shadow-md dark:bg-dark-blue">
      <img
        src={country.flags.png}
        alt={country.name.common + "flag"}
        className="h-auto w-full object-cover sm:h-[150px]"
      />
      <div className="flex flex-col gap-5 p-4">
        <Link
          to={`/${country.name.common
            .toLocaleLowerCase()
            .split(" ")
            .join("-")}`}
        >
          <h2 className="text-md mt-2 flex flex-col gap-3 font-bold">
            {country.name.common}
          </h2>
        </Link>
        <div className="text-sm dark:text-light-mode-bg">
          <p>
            <strong className="text-md font-semibold">Population: </strong>{" "}
            {Number(country.population).toLocaleString()}
          </p>
          <p>
            <strong className="text-md font-semibold">Region: </strong>{" "}
            {country.region}
          </p>
          <p>
            <strong className="text-md font-semibold">Capital: </strong>{" "}
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
