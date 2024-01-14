import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
