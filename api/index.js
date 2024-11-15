import express from "express";
import cors from "cors";

const app = express();

const MONSTERS = [
  {
    id: "monster-1",
    name: "Monster 1",
    attack: 60,
    defense: 40,
    hp: 10,
    speed: 80,
    type: "Type",
    imageUrl: "image_url_1",
  },
  {
    id: "monster-2",
    name: "Monster 2",
    attack: 70,
    defense: 30,
    hp: 20,
    speed: 90,
    type: "Fire",
    imageUrl: "image_url_2",
  },
  {
    id: "monster-3",
    name: "Monster 3",
    attack: 55,
    defense: 45,
    hp: 15,
    speed: 60,
    type: "Water",
    imageUrl: "image_url_3",
  },
  {
    id: "monster-4",
    name: "Monster 4",
    attack: 80,
    defense: 50,
    hp: 25,
    speed: 70,
    type: "Earth",
    imageUrl: "image_url_4",
  },
  {
    id: "monster-5",
    name: "Monster 5",
    attack: 65,
    defense: 35,
    hp: 30,
    speed: 50,
    type: "Electric",
    imageUrl: "image_url_5",
  },
  {
    id: "monster-6",
    name: "Monster 6",
    attack: 75,
    defense: 55,
    hp: 20,
    speed: 85,
    type: "Ice",
    imageUrl: "image_url_6",
  },
];

app.use(express.json());

app.use(cors());

app.get("/api/monsters", (req, res) => {
  res.status(200).json({ data: MONSTERS });
});

app.post("/api/init-battle", (req, res) => {
  const winner = req.body.user;

  res.status(200).json({
    message: "Battle initialized",
    data: {
      winner: {
        id: winner,
        name: winner,
        // attack: 60,
        // defense: 40,
        // hp: 10,
        // speed: 80,
        // type: "Type",
        // imageUrl: "image url",
      },
      tie: false,
    },
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 5000!");
});
