const React = require("react");

const DefaultLayout = require("./layouts/DefaultLayout.jsx");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Page">
        <nav>
          <h1>
            <a href="/questions/">Questions Homepage</a>
          </h1>
        </nav>
        {/* DefaultLayout takes in a prop called title. Up above, "Edit Page" is passed to the title prop.*/}
        {/* down below is the form*/}
        <form
          action={`/questions/${this.props.question._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="title"
            defaultValue={this.props.question.title}
          />
          <br />
          Entry:{" "}
          <input
            type="text"
            name="entry"
            defaultValue={this.props.question.entry}
          />
          <br />
          Ship is Broken:
          {this.props.question.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
