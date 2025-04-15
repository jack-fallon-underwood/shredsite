import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/game-info", (req, res) => {
  res.json({ title: "My Indie Game", version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

