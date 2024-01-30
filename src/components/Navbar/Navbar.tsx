import React from "react";
import Links from "./Links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return <Links user={session?.user} />;
};

export default Navbar;
