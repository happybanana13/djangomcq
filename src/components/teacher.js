import Form from "./form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CssBaseline, Typography, Button, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

function Teacher() {
  const [quizName, setQuizName] = useState();
  const [questionlist, setQuestionList] = useState([]);

  /*  useEffect(() => {
    if (questionlist.length === 10) {
      axios.post(
        "http://127.0.0.1:8000/api/show/",
        { questionlist },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
    }
  }, [questionlist]); */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setQuizName(data);
  console.log(quizName);
  console.log(questionlist);

  return (
    <div>
      <CssBaseline />
      <Box display="flex" marginTop="3vh" justifyContent="center">
        <Typography variant="h3" align="center">
          Create a mcq quiz
        </Typography>
      </Box>

      <Box align="center" width="10%">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            href="student"
            variant="outlined"
            size="small"
            color="secondary"
          >
            <Typography variant="p">Go Back</Typography>
          </Button>
        </Link>
      </Box>
      {
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Quiz Name"
            {...register("QuizName", { required: true })}
          />
          <input type="submit" />
        </form>
      }
      <Form setParentQuestionList={setQuestionList} />
    </div>
  );
}

export default Teacher;
