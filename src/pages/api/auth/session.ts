import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  const { cookies } = req;
  const token = cookies.session_token;

  if (!token) {
    res.status(401).json({ message: "Not logged" });
  } else {
    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
      if (err) return res.status(403).json({ message: "err" });
      res.status(200).json({ message: "Valid Session" });
    });
    res.status(201).json({ message: "Not logged" });
  }
}
