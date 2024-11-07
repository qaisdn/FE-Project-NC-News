import ArticlesList from "./Components/ArticlesList";
import Nav from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./Components/SingleArticle";
import "../src/Components/styles/App.css";
import Users from "./Components/Users";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Contexts/userContext";

function App() {
  const userValue = useContext(UserContext);
  const [mainUser, setMainUser] = useState({});
  useEffect(() => {
    setMainUser(userValue);
    console.log(mainUser);
  });

  return (
    <div className="App">
      <Nav user={mainUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
