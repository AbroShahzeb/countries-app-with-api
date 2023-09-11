/* eslint-disable react/prop-types */
import SearchIconLight from "/icons/icon-search-light.svg";
import SearchIconDark from "/icons/icon-search-dark.svg";

export default function Search({ theme, countryName, setCountryName }) {
  return (
    <div className="flex  items-center rounded-sm bg-white pl-6 shadow-sm dark:bg-dark-blue dark:shadow-none md:w-[30rem]">
      <img
        className="m-4 w-4"
        src={theme === "dark" ? SearchIconDark : SearchIconLight}
        alt="Search icon"
      />
      <input
        className="sm:text-md  w-full py-2 pl-3 text-sm text-light-mode-input placeholder:text-light-mode-input focus:outline-none  dark:bg-dark-blue dark:text-white dark:placeholder:text-white"
        type="text"
        placeholder="Search for a country..."
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
    </div>
  );
}
