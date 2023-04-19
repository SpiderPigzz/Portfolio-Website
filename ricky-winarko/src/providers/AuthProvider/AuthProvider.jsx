//Stores and provides the data defined by AuthContext to all the components below it

import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { message } from "antd";
import { API, BEARER } from "../../utils/Constants";
import { useEffect } from "react";
import { getToken } from "../../utils/helper";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me?populate=role`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      message.error("Error While Getting Logged In User Details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
