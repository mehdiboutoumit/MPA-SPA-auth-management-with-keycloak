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

  console.log(token);
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
      });
  }, []);

  return [isLogin, token];
  console.log(token);
};

export default useAuth;
