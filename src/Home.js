import React, { useEffect, useState } from "react";

export const Home = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api-for-missions-and-railways.herokuapp.com/books", {
      method: "GET",
      headers: { Authorization: "Bearer " + props.token },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, [props.token]);

  const reviews = items.map((x) => (
    <div>
      <h3>{x.title}</h3>
      <p>詳細: {x.detail}</p>
      <p>レビュー: {x.review}</p>
      <p>投稿者: {x.reviewer}</p>
    </div>
  ));

  return (
    <>
      <h2>Home</h2>
      {reviews}
    </>
  );
};
