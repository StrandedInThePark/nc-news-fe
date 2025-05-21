import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Articles } from "./components/Articles";
import { Navbar } from "./components/Navbar";
import { User } from "./components/User";
import { useState, useEffect } from "react";
import { getUser } from "./api";

function App() {
  const [user, setUser] = useState({});
  const hardCodedUser = "grumpy19";

  useEffect(() => {
    getUser(hardCodedUser).then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/:article_id?" element={<Articles />}></Route>
        <Route path="/user" element={<User user={user} />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
