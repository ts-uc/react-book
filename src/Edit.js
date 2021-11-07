import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useParams } from "react-router";

export const Edit = (props) => {
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      title: "string",
      url: "string",
      detail: "string",
      review: "string",
    },
    onSubmit: (values) => {
      axios
        .put(
          "https://api-for-missions-and-railways.herokuapp.com/books/" + id,
          values,
          { headers: { Authorization: "Bearer " + props.token } }
        )
        .then(function (res) {
          console.log(res);
          alert("Change was submitted!");
        })
        .catch(function (error) {
          console.log(error);
          alert("書き換え失敗。");
        });
    },
  });

  const DeletePage = (id) => {
    axios
      .delete(
        "https://api-for-missions-and-railways.herokuapp.com/books/" + id,
        { headers: { Authorization: "Bearer " + props.token } }
      )
      .then(function (res) {
        console.log(res);
        alert("削除成功！");
      })
      .catch(function (error) {
        console.log(error);
        alert("削除失敗");
      });
  };
  return (
    <>
      <div>
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
      </div>
      <div>
        <a href="javacript:void(0)" onClick={DeletePage(id)}>
          ページを削除する
        </a>
      </div>
    </>
  );
};
