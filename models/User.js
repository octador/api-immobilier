const moongoose = require("mongoose");

const userSchema = new moongoose.Schema({
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
});

const User = moongoose.model("User", userSchema);
module.exports = User