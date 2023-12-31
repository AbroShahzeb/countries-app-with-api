/* eslint-disable react/prop-types */
import Country from "./Country";

export default function CountryList({ countries }) {
  return (
    <>
      {countries.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4  py-8 pb-12 sm:grid-cols-2 sm:px-4 md:mt-12 md:grid-cols-3 md:gap-12 md:px-8 lg:grid-cols-4 lg:gap-16 lg:px-20">
          {countries?.map((country) => {
            return <Country country={country} key={crypto.randomUUID()} />;
          })}
        </div>
      ) : (
        <p className="mt-16 grid h-full place-content-center text-center text-2xl font-medium">
          No country found
        </p>
      )}
    </>
  );
}
