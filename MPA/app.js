// Importing packages
const express = require("express");
const Keycloak = require("keycloak-connect");
var session = require("express-session");
var memoryStore = new session.MemoryStore();
const app = express();

const keycloak_json = require("./keycloak.json");

// Keycloak config
// You can get this from the "Installation" tab of your Realm (app) in Keycloak
const keycloakConf = keycloak_json;

// Initializing Keycloak with memory store and Config.
const kc = new Keycloak({ store: memoryStore }, keycloakConf);

// Middle-wares
app.set("view engine", "ejs");
app.use(express.static("public"));

// To set the session to prevent Keycloak middleware from throwing error.
// Always use this before initializing Keycloak middleware.
app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

// Keycloak middleware 
app.use(
  kc.middleware({
    logout: "/logout",
    admin: "/",
  })
);

// The "/" route is unprotected. So, we can access without logging in. 
app.get("/", (req, res) => {
  res.render("unprotected", { logStatus: "out"});
});

// We used kc.protect() to redirect to KeyCloak login page.
// Once the user is authenticated it will redirect to "/home" route. 
app.get("/login", kc.protect(), (req, res) => {
  res.redirect("/home");
});

// We have used kc.protect() to protect this route "/home" 
app.get("/home", kc.protect(), (req, res, next) => {
  res.render("home", { logStatus: "in" });
});

// To Logout the user with keycloak using middelware defined above 
app.get("/logout", (req, res, next) => {
  res.send("Logged Out");
});

// Starting server at port 3000
app.listen(5001, () => console.log("Server Started at 5001....."));

// const express = require('express');
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');

// const app = express();

// // Configure session middleware with an in-memory session store
// const sessionStore = new session.MemoryStore();
// app.use(session({
//   secret: 'my-secret',
//   resave: false,
//   saveUninitialized: true,
//   store: sessionStore // Assign the session store
// }));

// // Configure Keycloak

// const keycloakConfig = {
//     url: 'http://localhost:8080',
//     realm: 'douanes',
//     clientId: 'MPA1',
//     clientSecret:'D1xu1kO7C1dx92dTC6mAtDhnNNWYgkaH',
// };
// const keycloak = new Keycloak({ store: sessionStore }, keycloakConfig);
// app.use(keycloak.middleware());

// // Set up EJS as the view engine
// app.set('view engine', 'ejs');

// // Define routes
// app.get('/', keycloak.protect(), (req, res) => {
//   // Render home page with authentication status
//   res.render('index', { isAuthenticated: req.isAuthenticated() });
// });

// // Start the server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
