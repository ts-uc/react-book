import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const Detail = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
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
        alert("読み込みエラー");
      });
  }, []);
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
        <EditButton id={id} isMine={data.isMine} />
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
