import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";

export const New = (props) => {
  const formik = useFormik({
    initialValues: { title: "", url: "", detail: "", review: "" },
    onSubmit: (values) => {
      axios
        .post(
          "https://api-for-missions-and-railways.herokuapp.com/books",
          values,
          { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
        )
        .then(function (response) {
          console.log(response);
          alert("投稿成功！")
        })
        .catch(function (error) {
          console.log(error);
          alert("投稿失敗。")
        });
    },
  });

  return (
    <>
      <h2>New</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          title:
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </label>
        <br />
        <label>
          url:
          <input
            id="url"
            name="url"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.url}
          />
        </label>
        <br />
        <label>
          detail:
          <input
            id="detail"
            name="detail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.detail}
          />
        </label>
        <br />
        <label>
          review:
          <input
            id="review"
            name="review"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.review}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
