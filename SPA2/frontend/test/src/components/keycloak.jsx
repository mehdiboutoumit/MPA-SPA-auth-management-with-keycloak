// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8082/',
  realm: 'douanes',
  clientId: 'spa-frontend',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
