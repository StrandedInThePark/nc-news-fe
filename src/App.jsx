import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Articles } from "./components/Articles";
import { Navbar } from "./components/Navbar";
import { User } from "./components/User";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
