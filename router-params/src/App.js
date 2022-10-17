import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div>
        <h1>TV APPS</h1>
      </div>
      <Routes>
        <Route>

        </Route>
      </Routes>
    </Router>
  )
  }


function Child() {

  // Below this comment, there's one major key script missing
  

  // return (
  //   <div>
  //     <h3>You Selected:<span>{id}</span></h3>
  //   </div>
  // );
}
export default App;