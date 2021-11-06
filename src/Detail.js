import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

export const Detail = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  axios
    .get("https://api-for-missions-and-railways.herokuapp.com/books/" + id, {
      headers: { Authorization: "Bearer " + props.token },
    })
    .then(function (response) {
      console.log(response);
      setData(response.data);
      setIsLoaded(true);
    })
    .catch(function (error) {
      console.log(error);
      alert("読み込みエラー")
    });
  if (isLoaded) {
    return (
      <>
        <h2>{data.title}</h2>
        <p>
          <a href={`${data.url}`}>{data.url}</a>
        </p>
        <p>詳細: {data.detail}</p>
        <p>レビュー: {data.review}</p>
        <p>投稿者: {data.reviewer}</p>
      </>
    );
  }
  return(
      <><h2>Loading...</h2></>
  )
};
