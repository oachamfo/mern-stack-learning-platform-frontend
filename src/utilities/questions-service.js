import axios from "axios";
export async function getQuestions() {
  //fetch data
  const response = await fetch(
    "https://mern-stack-questionandanswer-backend.onrender.com/questions"
  );
  //parse data from json format to JS object
  let questions = await response.json();
  //questions = Array.from(questions);
  console.log(questions);

  return questions;
}
export async function getQuestion(id) {
  //fetch data
  const response = await fetch(`/questions/${id}`, {
    mode: "no-cors",
  });

  //parse data from json format to JS object
  let question = await response.json();
  console.log(question);

  return question;
}
