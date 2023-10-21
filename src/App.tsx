import "./App.css";
import Home from "./page/home";
import { Route, Routes } from "react-router-dom";
import LayoutMain from "./common/layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
