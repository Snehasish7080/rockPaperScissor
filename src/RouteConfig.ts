import React from "react";
import { RouteProps } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

type RoutesConfigType = RouteProps & {
  isPrivate?: boolean;
};

const RouteConfig: RoutesConfigType[] = [
  {
    exact: true,
    path: "/",
    component: SignUpPage,
  },
  {
    exact: true,
    path: "/home",
    component: HomePage,
  },
  {
    exact: true,
    path: "/result",
    component: ResultPage,
  },
];

export default RouteConfig;
