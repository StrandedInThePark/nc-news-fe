import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Articles } from "./components/Articles";
import { Navbar } from "./components/Navbar";
import { User } from "./components/User";
import { useState, useEffect } from "react";
import { LoggedInUserContext } from "./contexts/LoggedInUser";
import { getUser } from "./api";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  //hard-coded while there is no login or createaccount feature
  //would use path with param based on account login to fetch username and display details for that account
  //using pre-existing account grumpy19
  const hardCodedUser = "grumpy19";
  useEffect(() => {
    getUser(hardCodedUser).then((user) => {
      setLoggedInUser(user);
    });
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/:article_id?" element={<Articles />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
        <Footer />
      </>
    </LoggedInUserContext.Provider>
  );
}

export default App;
