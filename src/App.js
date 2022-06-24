import AOS from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Home from "./Pages/Home";
function App() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  AOS.init({ duration: 1200 });
  AOS.refresh();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home loading={loading} loaded={loaded} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
