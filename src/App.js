import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Student from "./components/student";
import Teacher from "./components/teacher";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" component={Student} />
          <Route path="/teacher" component={Teacher} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
