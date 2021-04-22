import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/student">
        <h3>Student Page</h3>
      </Link>
      <Link to="/teacher">
        <h3>Teacher Page</h3>
      </Link>
    </div>
  );
}

export default Home;
