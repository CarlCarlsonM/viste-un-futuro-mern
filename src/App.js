import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/landing-page.component";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";
import CreateClassifiedAd from "./components/create-classified-ad.component";
import EditClassifiedAd from "./components/edit-classified-ad.component";
import ClassifiedAdList from "./components/classified-ad-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar className="navbar-custom" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  <img class="app-logo" src="/logo.png" alt="App Icon" />
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-user"} className="nav-link">
                    Crear Usuario
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/user-list"} className="nav-link">
                    Lista de Usuarios
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/create-classified-ad"} className="nav-link">
                    Crear Clasificado
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/classified-ad-list"} className="nav-link">
                    Lista de Clasificados
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <LandingPage {...props} />}
                  />
                  <Route
                    exact
                    path="/create-user"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-user/:id"
                    component={(props) => <EditUser {...props} />}
                  />
                  <Route
                    exact
                    path="/user-list"
                    component={(props) => <UserList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-classified-ad"
                    component={(props) => <CreateClassifiedAd {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-classified-ad/:id"
                    component={(props) => <EditClassifiedAd {...props} />}
                  />
                  <Route
                    exact
                    path="/classified-ad-list"
                    component={(props) => <ClassifiedAdList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
