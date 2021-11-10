import "./App.css";
import NavBar from "./components/navBar";
import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import LiveSessions from "./components/liveSessions";
import HomeBody from "./components/homeBody";
import Features from "./components/features";
import About from "./components/about";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter className="home-background">
        <NavBar />
        <main className="Container">
          <Route path="/live-sessions" component={LiveSessions}></Route>
          <Route path="/features" component={Features}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" exact component={HomeBody}></Route>
          <Redirect to="/not-found" />
          <Redirect from="/home" to="/" />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

<<<<<<< HEAD
//changes
=======
//changed nothing
>>>>>>> de7ae9f9b442b3ad893bf915901603af01eb8e86
