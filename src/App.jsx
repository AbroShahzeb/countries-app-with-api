import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <Router basename={import.meta.env.DEV ? "/" : "/countries-app-with-api/"}>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/:name"
          exact
          element={<CountryDetails theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
