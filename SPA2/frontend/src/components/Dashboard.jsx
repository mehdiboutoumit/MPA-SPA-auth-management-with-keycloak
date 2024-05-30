// components/Dashboard.js
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Dashboard = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (keycloak.authenticated) {
    return (
        <div className="dashboard">
          <h1> Dashboard</h1>
          <button><a href={"http://localhost:8090/MPA-JSF-1.0-SNAPSHOT/contact.xhtml"}>Contact</a></button>

        </div>
    );
  } else {
    keycloak.login();
    return <div>Redirecting to login...</div>;
  }
};

export default Dashboard;
