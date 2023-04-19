//Stores and provides the data defined by AuthContext to all the components below it

import React, { useState } from "react";
import { GRAPHQL } from "../utils/Constants";
import { useEffect } from "react";
import { getToken } from "../utils/helper";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GraphQLProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const httpLink = createHttpLink({
    uri: GRAPHQL,
    credentials: "same-origin",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${getToken()}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
