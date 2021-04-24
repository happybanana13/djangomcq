//import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Student() {
  const [quizName, setQuizName] = useState([]);

  useEffect(() => {
    axios.get("/api/quiz/").then((res) => {
      const quiz = res.data;
      setQuizName(quiz);
      console.log(quiz);
    });
  }, []);
  return (
    <div>
      <h3>Student</h3>
      <p>{quizName[0] && quizName[0].quizname}</p>
    </div>
  );
}

export default Student;
