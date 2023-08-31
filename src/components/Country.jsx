export default function Country({ country }) {
  return (
    <div className="dark:bg-dark-blue overflow-hidden rounded-md bg-white pb-8 shadow-md">
      <img
        src={country.flags.png}
        alt={country.name.common + "flag"}
        className="h-auto w-full object-cover sm:h-[150px]"
      />
      <div className="flex flex-col gap-5 p-4">
        <h2 className="text-md mt-2 flex flex-col gap-3 font-bold">
          {country.name.common}
        </h2>
        <div className="dark:text-light-mode-bg text-sm">
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
