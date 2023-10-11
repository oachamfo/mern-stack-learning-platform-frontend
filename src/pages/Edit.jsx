import { useParams } from "react-router-dom";
import { getQuestion } from "../utilities/questions-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Edit() {
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
      <h1>Edit MERN Stack Question</h1>
      <form
        action={`https://mern-stack-questionandanswer-backend.onrender.com/questions/${question?._id}?_method=PUT`}
        method="POST"
      >
        Title: <input type="text" name="title" defaultValue={question?.title} />
        <br />
        Error Message: <br />
        <textarea
          name="errorMessage"
          rows="4"
          cols="50"
          defaultValue={question?.errorMessage}
        />
        <br />
        Ask Question: <br />
        <textarea
          name="question"
          rows="4"
          cols="50"
          defaultValue={question?.question}
        />
        <br />
        Check if question is about an error message{" "}
        {question?.hasErrorMessage ? (
          <input type="checkbox" name="hasErrorMessage" defaultChecked />
        ) : (
          <input type="checkbox" name="hasErrorMessage" />
        )}
        <br />
        <input className="button" type="submit" value="Update Question" />
      </form>
    </div>
  );
}
