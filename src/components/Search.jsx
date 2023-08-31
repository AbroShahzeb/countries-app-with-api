export default function Search({ theme, countryName, setCountryName }) {
  return (
    <div className="dark:bg-dark-blue  flex items-center rounded-sm bg-white pl-6 shadow-sm dark:shadow-none md:w-[30rem]">
      <img
        className="m-4 w-4"
        src={
          theme === "dark"
            ? "/icons/icon-search-dark.svg"
            : "/icons/icon-search-light.svg"
        }
        alt="Search icon"
      />
      <input
        className="text-light-mode-input  sm:text-md dark:bg-dark-blue placeholder:text-light-mode-input w-full py-2 pl-3 text-sm  focus:outline-none dark:text-white dark:placeholder:text-white"
        type="text"
        placeholder="Search for a country..."
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
    </div>
  );
}
