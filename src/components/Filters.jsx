export default function Filters({ region, setRegion }) {
  return (
    <div className=" ">
      <select
        className="md:text-md p-3 text-sm focus:outline-none dark:bg-dark-blue"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="default">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Ocenaia</option>
      </select>
    </div>
  );
}
