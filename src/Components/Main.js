import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Hooks from "./Hooks";
import Comms from "./Comms";

function Main() {
  return (
    <div>
<BrowserRouter>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
          <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks">Hooks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/communication">Communication</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h5 className="container text-center mt-3 mb-3">Welcome to Main</h5>

      <div className="card border-info mt-0 mb-3 mx-5">
        <div className="card-body">
          <h4 className="card-title">My React App</h4>
          <Routes>
            <Route exact path="/" element={ <Home></Home> }></Route>
            <Route exact path="/home" element={ <Home></Home> }></Route>
            <Route exact path="/hooks" element={ <Hooks></Hooks> }></Route>
            <Route exact path="/communication" element={ <Comms></Comms> }></Route>
          </Routes>
          <p className="card-text">Card body content...</p>
        </div>

      </div>
          </BrowserRouter>
    </div>
  );
}

export default Main;

