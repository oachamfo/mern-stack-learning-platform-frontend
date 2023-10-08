export default function New() {
  return (
    <div>
      <nav>
        <h1>
          <a href="/questions/">Questions Homepage</a>
        </h1>
      </nav>
      <h1>New Question page</h1>
      <form action="/questions" method="POST">
        Title: <input type="text" name="title" />
        <br />
        Entry: <input type="textarea" name="entry" />
        <br />
        Ship is Broken: <input type="checkbox" name="shipIsBroken" />
        <br />
        <input type="submit" value="Create Question" />
      </form>
    </div>
  );
}
