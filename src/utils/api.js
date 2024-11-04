import axios from "axios";

const request = axios.create({
  baseURL: "https://be-project-nc-news-16ce.onrender.com/api",
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};