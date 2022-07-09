import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Hello World!" });
});

router.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default router;
