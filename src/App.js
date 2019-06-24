import React from "react";
import "./App.css";

import Authors from "./Authors";

const fetchAuthors = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response.json()
  );
};

const fetchPosts = authorId => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${authorId}`
  ).then(response => response.json());
};

function App() {
  return <Authors fetchAuthors={fetchAuthors} fetchPosts={fetchPosts} />;
}

export default App;
