import { Link } from "react-router-dom";
export default function Index({ questions }) {
  return (
    <div>
      <nav>
        <a href="/questions/new">Create a New Question</a>
      </nav>
      <ul>
        {questions?.map((question, i) => {
          return (
            <li key={i}>
              {/*alternatively instead of React's <Link>, HTML anchor tags also works: <a href={`/questions/${question?._id}`}>{question?.title} </a>}*/}
              {
                <Link to={`/questions/${question?._id}`}>
                  {question?.title}
                </Link>
              }

              {/* Delete form below*/}
              <form
                action={`/questions/${question?._id}?_method=DELETE`}
                method="POST"
              >
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/questions/${question?._id}/edit`}>Edit Question</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
