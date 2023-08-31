export default function Header({ toggleTheme, theme }) {
  return (
    <header className="dark:bg-dark-blue flex w-full items-center justify-between  bg-white px-4 py-8 shadow-sm sm:px-4 md:px-8  lg:px-20">
      <h1 className=" text-lg font-bold">Where in the world?</h1>
      <div className="flex items-center gap-4" onClick={toggleTheme}>
        <img
          src={
            theme === "dark"
              ? "/icons/icon-moon-dark.svg"
              : "/icons/icon-moon-light.svg"
          }
          alt="Moon Icon Light Mode"
          className="w-4 -rotate-[30deg]"
        />
        <p className="text-sm font-bold">Dark Mode</p>
      </div>
    </header>
  );
}
