import { Link } from "react-router-dom";
export default function Seed() {
  return (
    <div>
      <nav>
        <h1>
          <Link to={"/questions/"}>Questions Homepage</Link>
        </h1>
      </nav>
      ;
      <br />
      Sorry! The seed route is for the backend users.
    </div>
  );
}
