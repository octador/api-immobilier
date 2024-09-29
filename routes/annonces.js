const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonce");
const authMiddleware = require("../middelware/middelware");



// Route pour créer une annonce
router.post("/", authMiddleware, async (req, res) => {
  console.log(req.body);
  const annonce = new Annonce(req.body);
  try {
    const savedAnnonce = await annonce.save();
    res.status(201).json(savedAnnonce);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour obtenir toutes les annonces
router.get("/", authMiddleware, async (req, res) => {
  try {
    const annonces = await Annonce.find();
    res.json(annonces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const annonce = await Annonce.findById(req.params.id);
    if (!annonce) {
      return res.status(404).json({ message: "Annonce non trouvee" });
    }
    res.status(200).json(annonce);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedAnnonce = await Annonce.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAnnonce) {
      return res.status(404).json({ message: "Annonce non trouvee" });
    }
    res.json(updatedAnnonce);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedAnnonce = await Annonce.findByIdAndDelete(req.params.id);
    if (!deletedAnnonce) {
      return res.status(404).json({ message: "Annonce non trouvee" });
    }
    res.json(deletedAnnonce);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


module.exports = router;
