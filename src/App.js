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
    }, 3500); // Edit Loading.gif playtime here (Currently at 3.5 seconds)
    setTimeout(() => {
      setLoaded(true);
    }, 5000); // Edit Loading.gif BACKGROUND before fadeout here (Currently at 5 seconds)
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
