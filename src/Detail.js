import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const Detail = (props) => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://api-for-missions-and-railways.herokuapp.com/books/" + id, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then(function (response) {
        console.log(response);
        props.setDetail(response.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("読み込みエラー");
      });
  }, []);
  if (isLoaded) {
    return (
      <>
        <h2>{props.detail.title}</h2>
        <p>
          <a href={`${props.detail.url}`}>{props.detail.url}</a>
        </p>
        <p>詳細: {props.detail.detail}</p>
        <p>レビュー: {props.detail.review}</p>
        <p>投稿者: {props.detail.reviewer}</p>
        <EditButton id={id} isMine={props.detail.isMine} />
      </>
    );
  }
  return (
    <>
      <h2>Loading...</h2>
    </>
  );
};

const EditButton = (props) => {
  if (props.isMine) {
    return <Link to={`/edit/${props.id}`}>編集</Link>;
  }
  return "";
};
