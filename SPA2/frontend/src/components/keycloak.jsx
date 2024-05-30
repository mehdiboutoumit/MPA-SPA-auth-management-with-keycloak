// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'douanes',
  clientId: 'SPA-react',

};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
