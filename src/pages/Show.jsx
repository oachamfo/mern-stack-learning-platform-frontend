export default function Show() {
  function createdOn() {
    //stringify MongoDb time stamp object and return human readable date
    const createdAtMonth = JSON.stringify(
      props.question.createdAt.getMonth() + 1
    );
    const createdAtDay = JSON.stringify(props.question.createdAt.getDate());
    const createdAtYear = JSON.stringify(
      props.question.createdAt.getFullYear()
    );
    const createdAt = createdAtMonth + "/" + createdAtDay + "/" + createdAtYear;
    return createdAt;
  }

  function updatedOn() {
    //stringify MongoDb time stamp object and return human readable date
    const updatedAtMonth = JSON.stringify(
      props.question.updatedAt.getMonth() + 1
    );
    const updatedAtDay = JSON.stringify(props.question.updatedAt.getDate());
    const updatedAtYear = JSON.stringify(
      props.question.updatedAt.getFullYear()
    );
    const updatedAt = updatedAtMonth + "/" + updatedAtDay + "/" + updatedAtYear;
    return updatedAt;
  }

  return (
    <div>
      <nav>
        <h1>
          <a href="/questions/">Questions Homepage</a>
        </h1>
      </nav>
      <h2>Question Show Page</h2>
      <h1>{props?.question?.title}</h1>
      <h2>
        {props?.question?.isErrorMessage
          ? `This question has an error message the user is trying to debug.`
          : `This question does not have an error message the user is trying to debug.`}
      </h2>
      <br></br>
      <p>{props.question.question}</p>
      <br></br>
      <p>created on: {createdOn()}</p>
      <p>updated on: {updatedOn()}</p>
    </div>
  );
}
