const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Esquema usuario
const userSchema = new Schema({
  // tipos de datos
  firstName: String,
  lastName: String,
  email: String,
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref:'car'
    }
  ]
});

module.exports = mongoose.model("user", userSchema);
