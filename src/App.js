import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resister from "./pages/Resister";
import "./app.css";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Resister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<h1>Page Not found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
