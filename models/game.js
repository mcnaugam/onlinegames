const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GameSchema = new Schema({
  gameType: {
    type: String,
    required: true,
  },
  numPlayers: {
    type: Number,
    required: true,
  },
  initiator: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

  players: [{ type: Schema.Types.ObjectId, ref: "player" }],

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Game = mongoose.model("games", GameSchema);
