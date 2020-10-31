import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage.js";
import Header from "../common/Header";
import PageNotFound from "../common/PageNotFound";
import CoursesPage from "../courses/CoursesPage";
import ManageCourse from "../courses/ManageCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <div className="margin10">
        <Header />
      </div>
      <div id="app" className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/course/:slug" component={ManageCourse} />
          <Route path="/course" component={ManageCourse} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar newestOnTop />
      </div>
    </div>
  );
};

export default App;
