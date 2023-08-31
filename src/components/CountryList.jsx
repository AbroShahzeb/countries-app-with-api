import Country from "./Country";

export default function CountryList({ countries }) {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1  gap-10 px-4 sm:grid-cols-2 sm:px-4 md:mt-12 md:grid-cols-3 md:gap-12 md:px-8 lg:grid-cols-4 lg:gap-20 lg:px-20">
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </div>
  );
}
