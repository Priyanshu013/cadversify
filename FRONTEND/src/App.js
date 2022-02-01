import "./App.css";
import NavigationBar from "./components/navBar";
import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import LiveSessions from "./components/liveSessions";
import HomeBody from "./components/homeBody";
import About from "./components/about";
import oppLogin from "./components/oppLogin";
import cadLogin from "./components/cadLogin";
import Footer from "./components/footer";
import oppSignup from "./components/oppSignup";
import cadSignup from "./components/cadSignup";
import TermsAndConditions from "./components/TermsAndConditions";
import Courses from "./components/courses";
import NotFound from "./components/notFound";
import BackToTop from "./BackToTop";
import Navigationbar from "./components/navigationBar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <BackToTop />

        <Navigationbar />
        <Switch>
          <Route path="/live-sessions" component={LiveSessions} />
          <Route path="/ourcourses" component={Courses} />
          <Route path="/about" component={About} />
          <Route path="/oppLogin" component={oppLogin} />
          <Route path="/cadLogin" component={cadLogin} />
          <Route path="/oppSignup" component={oppSignup} />
          <Route path="/cadSignup" component={cadSignup} />
          <Route path="/TermsAndConditions" component={TermsAndConditions} />
          <Route path="/" exact component={HomeBody} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect from="/home" to="/" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
