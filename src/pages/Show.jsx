import { useParams } from "react-router-dom";
import { getQuestion } from "../utilities/questions-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Show() {
  //useParams() gets all the parameters in a given url
  //so we destructure {id} from the useParams object
  const { id } = useParams();

  //state to hold question
  const [question, setQuestion] = useState();

  useEffect(() => {
    //async function inside useEffect() is used to call an imported async function and to update the state
    const getQuestionandUpdateState = async () => {
      const question = await getQuestion(id);
      //set the question state with the return value of the imported getQuestion() function
      setQuestion(question);
      console.log(question);
    };
    //inside useEffect() invoke the async helper function defined in useEffect()
    getQuestionandUpdateState();
  }, []);

  return (
    <div>
      <nav>
        <h1>
          <Link to={"/questions/"}>Questions Homepage</Link>
        </h1>
      </nav>
      <div className="question">
        <h2>Question Show Page</h2>
        <h1>{question?.title}</h1>
        <b>
          {question?.hasErrorMessage
            ? `This question is about an error message the user is trying to debug.`
            : `This question is not about an error message the user is trying to debug.`}
        </b>
        <br></br>
        <p>{question?.errorMessage}</p>
        <p>{question?.question}</p>
        <br></br>
        <p>created on: {question?.createdAt}</p>
        <p>updated on: {question?.updatedAt}</p>
      </div>
      <div className="answers">
        <h2>Answers</h2>
        <br />
        {question?.answers.map((answer, i) => {
          return (
            <div key={i} className="answer">
              <h3>Answer # {i + 1}</h3>
              {answer?.answer}
            </div>
          );
        })}
      </div>
    </div>
  );
}
