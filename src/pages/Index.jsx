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
              <a href={`/questions/${question?._id}`}>{question?.title} </a>

              {/* Delete form below*/}
              <form
                action={`/questions/${question._id}?_method=DELETE`}
                method="POST"
              >
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/questions/${question._id}/edit`}>
                Answer This Question
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
