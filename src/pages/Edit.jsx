export default function Edit({ question }) {
  return (
    <div>
      <nav>
        <h1>
          <a href="/questions/">Questions Homepage</a>
        </h1>
      </nav>
      <h1>Edit MERN Stack Question</h1>
      <form action={`/questions/${question?._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={question?.title} />
        <br />
        Category: <input type="textarea" name="category" />
        <br />
        Ask Question/ Paste Error Message:{" "}
        <input type="textarea" name="question" />
        <br />
        Check if question is about an error message{" "}
        <input type="checkbox" name="isErrorMessage" />
        <br />
        <input type="submit" value="Update Question" />
      </form>
    </div>
  );
}
