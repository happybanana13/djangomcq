import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
//import {TextField} from '@material-ui/core';
//import axios from "axios";

function Form({ setQuestionList }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setQuestionList((prevList) => [...prevList, data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Question"
        {...register("Question", { required: true })}
      />
      <input
        type="text"
        placeholder="Correct Answer"
        {...register("Correct Answer", { required: true })}
      />
      <input
        type="text"
        placeholder="Wrong Answer"
        {...register("Wrong Answer1", { required: true })}
      />
      <input
        type="text"
        placeholder="Wrong Answer"
        {...register("Wrong Answer2", { required: true })}
      />
      <input
        type="text"
        placeholder="Wrong Answer"
        {...register("Wrong Answer3", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
export default Form;
