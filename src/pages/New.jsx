import { Link } from "react-router-dom";
export default function New() {
  return (
    <div>
      <nav>
        <h1>
          <Link to={"/questions/"}>Questions Homepage</Link>
        </h1>
      </nav>
      <h1>New MERN Stack Question</h1>
      <form action="/questions" method="POST">
        Title: <input type="text" name="title" />
        <br />
        Error Message: <br />
        <textarea name="errorMessage" rows="4" cols="50" />
        <br />
        Ask Question: <br />
        <textarea name="question" rows="4" cols="50" />
        <br />
        Check if question is about an error message{" "}
        <input type="checkbox" name="hasErrorMessage" />
        <br />
        <input className="button" type="submit" value="Create Question" />
      </form>
    </div>
  );
}
