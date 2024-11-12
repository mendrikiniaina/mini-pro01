const express = require('express');
const router = express.Router();

// Route pour la liste des utilisateurs
router.get("/", (req, res) => {
    // res.send("User List");
    res.render("users");
});

// Route pour un formulaire de création d'utilisateur
router.get("/new", (req, res) => {
    res.render("new-users");
});

module.exports = router;
