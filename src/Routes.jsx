import React from "react";
import { Route, Switch } from "react-router";
import { TimeSlots } from "./Components/TimeSlots";
import { Details } from "./Components/Details";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={() => <TimeSlots />} exact />;
      <Route path="/details" component={() => <Details />} />;
    </Switch>
  );
}
