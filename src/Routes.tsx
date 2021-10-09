import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import Footer from "./molecules/Footer/Footer";
// import Nav from "./molecules/Nav/Nav";
import RouteConfig from "./RouteConfig";

function Routes() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {/* {RouteConfig.map(({ isPrivate, ...route }, index) => {
          return <Route {...route} key={index} />;
        })} */}
      <Route exact path="/(auth)" component={AuthRoutes} />
      <Route component={DefaultRoutes} />
    </Switch>
    // </Suspense>
  );
}

const AuthRoutes = () => (
  <Fragment>
    {RouteConfig.map(({ isPrivate, ...route }, index) => {
      if (route.path === "/auth") {
        return <Route {...route} key={route.path + index.toString()} />;
      }
      return null;
    })}
  </Fragment>
);
const DefaultRoutes = () => (
  <Fragment>
    {/* <Nav /> */}
    {RouteConfig.map(({ isPrivate, ...route }, index) => {
      if (route.path !== "/auth") {
        return <Route {...route} key={route.path + index.toString()} />;
      }
      return null;
    })}
  </Fragment>
);

export default Routes;
