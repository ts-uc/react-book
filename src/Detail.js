import axios from "axios";
import * as React from "react";
import { useParams } from "react-router";

export const Detail = () => {
  const {id} = useParams();
  return <h2>Post {id}</h2>;
};
