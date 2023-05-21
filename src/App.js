import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Container from "./components/Container";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/search" element={<Search />} />
        <Route path="/image/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
