import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./Router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://4000-tramos-problem3part2-3w9pqtx60v3.ws-us38.gitpod.io/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
