// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'douanes',
  clientId: 'SPA',
  clientSecret:'D1xu1kO7C1dx92dTC6mAtDhnNNWYgkaH',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
