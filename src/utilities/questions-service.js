import axios from "axios";
export async function getQuestions() {
  const response = await fetch("/questions/");
  //parse json into JS object
  let questions = await response.json();
  questions = Array.from(questions);
  console.log(questions);
  /*
  const questions = axios
    .get("http://localhost:3001/questions")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  */
  return questions;
}
