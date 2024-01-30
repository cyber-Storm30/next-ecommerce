"use server";

import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import dbConnect from "./mongoConnect";
import { User } from "@/models/User";
import { useRouter } from "next/navigation";

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const signup = async (previousState: any, formData: any) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    dbConnect();

    const user = await User.findOne({ email });

    if (user) {
      return { error: "Email already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (previousState: any, formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (err: any) {
    if (err.message.includes("callbackrouteerror")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
