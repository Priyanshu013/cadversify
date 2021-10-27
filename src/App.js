import "./App.css";
import NavBar from "./components/navBar";
import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import LiveSessions from "./components/liveSessions";
import HomeBody from "./components/homeBody";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <main className="Container">
          <Route path="/live-sessions" component={LiveSessions}></Route>
          <Route path="/" exact component={HomeBody}></Route>
          <Redirect to="/not-found" />
          <Redirect from="/home" to="/" />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
