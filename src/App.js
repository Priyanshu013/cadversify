import "./App.css";
import NavBar from "./components/navBar";
import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import LiveSessions from "./components/liveSessions";
import HomeBody from "./components/homeBody";
import Features from "./components/features";
import About from "./components/about";
import oppLogin from "./components/oppLogin";
import cadLogin from "./components/cadLogin";
import Footer from "./components/footer";
import { Navbar } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <main className="Container">
          <Route path="/live-sessions" component={LiveSessions}></Route>
          <Route path="/features" component={Features}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/oppLogin" component={oppLogin}></Route>
          <Route path="/cadLogin" component={cadLogin}></Route>
          <Redirect to="/not-found" />
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={HomeBody}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
