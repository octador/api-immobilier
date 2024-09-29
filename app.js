const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const connectDatabase = require("./config/database");
const annoncesRoutes = require("./routes/annonces");
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour fichiers statiques
app.use(express.static("public"));

// Configuration de Mustache
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

// Middleware pour le support JSON et les formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion à la base de données
connectDatabase();

// Routes
app.use("/annonces", annoncesRoutes);
// api/users/login pour connexion
app.use('/api/users', userRoutes);


// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
