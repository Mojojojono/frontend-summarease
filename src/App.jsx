import { Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Homepage/Home";
import Result from "./pages/Result/Result";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
