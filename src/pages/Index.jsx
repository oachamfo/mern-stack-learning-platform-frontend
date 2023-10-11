import { Link } from "react-router-dom";
export default function Index({ questions }) {
  return (
    <div>
      <nav>
        <div className="create-a-new-question">
          <Link to={"/questions/new"}>Create a New Question</Link>
        </div>
      </nav>
      <ul>
        {questions?.map((question, i) => {
          return (
            <li className="index-page-question" key={i}>
              <Link
                className="question-text"
                to={`/questions/${question?._id}`}
              >
                {question?.title}
              </Link>
              {/* Delete form below*/}
              <form
                action={`/questions/${question?._id}?_method=DELETE`}
                method="POST"
              >
                <input className="button" type="submit" value="DELETE" />
              </form>
              <Link to={`/questions/${question?._id}/edit`}>Edit Question</Link>{" "}
              <Link to={`/answers/${question?._id}/`}>Answer Question</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
