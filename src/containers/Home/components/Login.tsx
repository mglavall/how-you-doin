import { styled } from "@stitches/react";
import { useState } from "react";
import Text from "~/src/components/Text/Text";
import prisma from "~/prisma";
import Input from "~/src/components/Input/Input";

export const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const auth = async (account, password) => {
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email: account,
    //   },
    // });
    // if (user && user.password == password) {
    //   setIsLogged(true);
    // }
    const h = await fetch("/api/auth/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ account, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(h);

    if (h.status == 200) {
      setIsLogged(true);
    }
  };

  return !isLogged ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        auth(account, password);
      }}
    >
      <Input onChange={(ev) => setAccount(ev.target.value)}></Input>
      <Input onChange={(ev) => setPassword(ev.target.value)}></Input>
      <input type="submit" value="Submit" />
    </form>
  ) : (
    <Text>Your are logged!</Text>
  );
};
