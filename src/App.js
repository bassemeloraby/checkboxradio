import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Filter1 from "./pages/Filter1";
import Filter2 from "./pages/Filter2";
import Header from "./components/Header";
import Filter3 from "./pages/Filter3";
import Filter4and from "./pages/Filter4and";
import Cuisine from "./pages/Cuisine";
import FilterC from "./pages/FilterC";
import CosmoticSF from "./pages/CosmoticSF";
import CosmoticGrid from "./pages/CosmoticGrid";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter1" element={<Filter1 />} />
        <Route path="/filter2" element={<Filter2 />} />
        <Route path="/filter3" element={<Filter3 />} />
        <Route path="/filter4" element={<Filter4and />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/filterC" element={<FilterC />} />
        <Route path="/cosmoticSF" element={<CosmoticSF />} />
        <Route path="/cosmoticGrid" element={<CosmoticGrid />} />
      </Routes>
    </div>
  );
}

export default App;
