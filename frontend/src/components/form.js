import axios from "axios";
import React from "react";
//import { useState } from "react";
import { useForm } from "react-hook-form";
//import {TextField} from '@material-ui/core';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("/api/addquestion/", data);
    props.setParentQuestionList((prevList) => [...prevList, data.questionname]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Question"
        {...register("questionname", { required: true })}
      />
      <input
        type="text"
        placeholder="Correct Answer"
        {...register("sol", { required: true })}
      />
      <input
        type="text"
        placeholder="Wrong Answer"
        {...register("wrongans1", { required: true })}
      />
      <input
        type="text"
        placeholder="Wrong Answer"
        {...register("wrongans2", { required: true })}
      />
      <input
        type="text"
        placeholder="Wrong Answer"
        {...register("wrongans3", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
export default Form;
