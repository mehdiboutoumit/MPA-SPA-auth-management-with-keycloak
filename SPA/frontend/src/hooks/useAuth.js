import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'douanes',
  clientId: 'SPA',
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
      })
      .then((res) => {
        setLogin(res);
        setToken(client.token);
        console.log(res);
        console.log(client.token);
      })
      .catch((error) => { // Handle promise rejection
        setError(error);
        console.log(error);
      });
  }, []);

  if (error) {
    console.log('Error initializing Keycloak:', error);
    // You can handle the error further if needed, e.g., display an error message to the user
  }

  return [isLogin, token];
};

export default useAuth;
