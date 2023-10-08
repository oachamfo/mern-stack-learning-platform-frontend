const React = require("react");

class Show extends React.Component {
  createdOn() {
    //stringify MongoDb time stamp object and return human readable date
    const createdAtMonth = JSON.stringify(
      this.props.question.createdAt.getMonth() + 1
    );
    const createdAtDay = JSON.stringify(
      this.props.question.createdAt.getDate()
    );
    const createdAtYear = JSON.stringify(
      this.props.question.createdAt.getFullYear()
    );
    const createdAt = createdAtMonth + "/" + createdAtDay + "/" + createdAtYear;
    return createdAt;
  }

  updatedOn() {
    //stringify MongoDb time stamp object and return human readable date
    const updatedAtMonth = JSON.stringify(
      this.props.question.updatedAt.getMonth() + 1
    );
    const updatedAtDay = JSON.stringify(
      this.props.question.updatedAt.getDate()
    );
    const updatedAtYear = JSON.stringify(
      this.props.question.updatedAt.getFullYear()
    );
    const updatedAt = updatedAtMonth + "/" + updatedAtDay + "/" + updatedAtYear;
    return updatedAt;
  }

  render() {
    return (
      <div>
        <nav>
          <h1>
            <a href="/questions/">Questions Homepage</a>
          </h1>
        </nav>
        <h2>Question show page</h2>
        <h1>{this.props.question.title}</h1>
        <h2>
          {this.props.question.shipIsBroken
            ? `The ship is broken.`
            : `The ship is not broken.`}
        </h2>
        <br></br>
        <p>{this.props.question.entry}</p>
        <br></br>
        <p>created on: {this.createdOn()}</p>
        <p>updated on: {this.updatedOn()}</p>
      </div>
    );
  }
}
module.exports = Show;
