import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Landing from "./components/Landing";

export interface IRouterCompProps {
}

export function RouterComp (props: IRouterCompProps) {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />

    </Switch>
  );
}

export default RouterComp;