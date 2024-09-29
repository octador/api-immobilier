const mongoose = require("mongoose");
const enumexport = require("../utils/enum");

const annonceSchema = new mongoose.Schema({

  titre: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  surface: { type: Number, required: true },

  localisation: {
    ville: { type: String, required: true },
    codePostal: { type: String, required: true },
  },

  caractéristiques: {
    categorie: {
      type: String,
      enum: enumexport,
    },
    chambre: { type: Number, required: true },
    salleDeBain: { type: Number, required: true },
    balcon: { type: Boolean, default: false },
    jardin: { type: Boolean, default: false },
    parking: { type: Boolean, default: false }
  },
});

const Annonce = mongoose.model("Annonce", annonceSchema);
module.exports = Annonce;
