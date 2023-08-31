export default function Filters() {
  return (
    <div className=" ">
      <select className="dark:bg-dark-blue md:text-md p-3 text-sm focus:outline-none">
        <option value="default">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Ocenaia</option>
      </select>
    </div>
  );
}
