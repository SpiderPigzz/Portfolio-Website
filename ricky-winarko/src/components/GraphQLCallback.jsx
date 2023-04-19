import React from "react";
import { useState, useEffect } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

const useGQLQuery = (query, callback) => {
  const [queryFunction, response] = useLazyQuery(gql(query), {
    fetchPolicy: "network-only",
  });
  useEffect(() => {
    if (!response.loading) {
      if (response.error) {
        console.log("error with GQL query!");
        console.log(response.error);
      } else if (response.data && callback) {
        callback(response.data);
      }
    }
  }, [response.loading]);

  const runFunction = (data) => {
    queryFunction({ variables: data });
  };

  return [runFunction];
};

const useGQLMutation = (query, callback) => {
  const [queryFunction, response] = useMutation(gql(query), {
    fetchPolicy: "network-only",
  });
  useEffect(() => {
    if (!response.loading) {
      if (response.error) {
        console.log("error with GQL query!");
        console.log(response.error);
      } else if (response.data && callback) {
        callback(response.data);
      }
    }
  }, [response.loading]);

  const runFunction = (data) => {
    queryFunction({ variables: data });
  };

  return [runFunction];
};

export { useGQLQuery, useGQLMutation };
