export default function Edit({ question }) {
  return (
    <div>
      <nav>
        <h1>
          <a href="/questions/">Questions Homepage</a>
        </h1>
      </nav>
      {/* DefaultLayout takes in a prop called title. Up above, "Edit Page" is passed to the title prop.*/}
      {/* down below is the form*/}
      <form action={`/questions/${question?._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={question?.title} />
        <br />
        Entry: <input type="text" name="entry" defaultValue={question?.entry} />
        <br />
        Ship is Broken:
        {question?.shipIsBroken ? (
          <input type="checkbox" name="shipIsBroken" defaultChecked />
        ) : (
          <input type="checkbox" name="shipIsBroken" />
        )}
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}
