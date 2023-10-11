import { useParams } from "react-router-dom";
import { getQuestion } from "../utilities/questions-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Answer() {
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
          <Link to="/questions/">Questions Homepage</Link>
        </h1>
      </nav>
      <h2>Answer Question Show Page</h2>
      <h1>{question?.title}</h1>
      <b>
        {question?.hasErrorMessage
          ? `This question has an error message the user is trying to debug.`
          : `This question does not have an error message the user is trying to debug.`}
      </b>
      <br></br>
      <p>{question?.question}</p>
      <br></br>
      <p>created on: {question?.createdAt}</p>
      <p>updated on: {question?.updatedAt}</p>
      <div>
        <form action={`/answers/${question?._id}`} method="POST">
          Answer: <br />
          <textarea type="text" name="answer" rows="4" cols="50" />
          <br />
          <input className="button" type="submit" value="Create Answer" />
        </form>
      </div>
    </div>
  );
}
