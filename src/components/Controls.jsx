export default function Controls({ children }) {
  return (
    <div className="container mx-auto mt-8 flex  flex-col justify-between gap-8 px-4 md:mt-12 md:flex-row md:px-8  lg:px-20">
      {children}
    </div>
  );
}
