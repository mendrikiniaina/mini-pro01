const express = require('express');
const router = express.Router();

// Route pour la liste des utilisateurs
router.get("/", (req, res) => {
    res.send("User List");
});

// Route pour un formulaire de création d'utilisateur
router.get("/new", (req, res) => {
    res.send("User new form");
});

module.exports = router;
