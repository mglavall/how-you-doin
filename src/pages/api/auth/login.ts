import { redirect } from "next/dist/next-server/server/api-utils";
import prisma from "~/prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = "bullshit";

export default async function handler(req, res) {
  if (!req.body) {
    res.statusCode(404);
    res.end("No credentials");
    return;
  }
  const credentials = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: "mg@gmail.com",
    },
  });

  if (user && user.password == credentials.password) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 30), // 1 month expiration date
        password: credentials.password,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    const serial = serialize("session_token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serial);
    res.status(200).json({ message: "Logged" });
  }
  res.status(401).json({ message: "Login incorrect" });
}
