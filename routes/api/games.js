const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");

const User = require("../../models/User");

// add new game
router.post("/", (req, res) => {
  console.log(req.body);

  User.findById(req.body.initiator.id).then((user) => {
    console.log(user);

    const newGame = new Game({
      id: req.body._id,
      gameType: req.body.gameType,
      numPlayers: req.body.numPlayers,
      initiator: user,
      players: [user],
    });

    newGame.save().then((err, newGame) => {
      Game.findOne(err, newGame)
        .populate({
          path: "players",
          model: "users",
        })
        .exec((err, newGame) => {
          res.json(newGame);
        });
    });
  });
});

// item.save(function(err, item) {
//   Item.findOne(item).populate('comments.created_by').exec(function (err, item) {
//       res.json({
//           status: 'success',
//           message: "You have commented on this item",
//           comment: item.comments.id(comment._id)
//       });
//   });
// });

//get all games
router.get("/", (req, res) => {
  Game.find()
    .populate({
      path: "players",
      model: "users",
    })
    .exec(function (err, games) {
      res.json({
        success: true,
        games: games,
      });
    });
});

// get game by id
router.get("/:gameId", (req, res) => {
  const gameId = req.params.gameId;

  Game.findById(gameId)
    .populate("players")
    .then((game) => {
      res.json({
        success: true,
        game: game,
      });
    })
    .catch((err) => console.log(err));
});

// delete all games
router.delete("", (req, res) => {
  Game.deleteMany({}, function (err) {
    res.json({
      success: true,
    });
  }).catch((err) => console.log(err));
});

module.exports = router;
