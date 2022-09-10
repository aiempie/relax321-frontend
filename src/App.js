import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import HomePage from "./Components/home/HomePage";
import Login from "./Components/login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
