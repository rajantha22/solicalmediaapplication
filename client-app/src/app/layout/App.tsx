import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../features/activities/dashboard/activityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "../features/home/homePage";
import activityForm from "../features/activities/form/activityForm";
import activityDetails from "../features/activities/details/activityDetails";
import TestErrors from "../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import Notfound from "../features/errors/NotFound";
import ServerError from "../features/errors/ServerError";

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar></ToastContainer>
      <Route exact path="/" component={HomePage}></Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route
                  exact
                  path="/activities"
                  component={ActivityDashboard}
                ></Route>
                <Route
                  path="/activities/:id"
                  component={activityDetails}
                ></Route>
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={activityForm}
                ></Route>
                <Route path="/errors" component={TestErrors}></Route>
                <Route path="/server-error" component={ServerError}></Route>
                <Route component={Notfound}></Route>
              </Switch>
            </Container>
          </>
        )}
      ></Route>
    </>
  );
}

export default observer(App);
