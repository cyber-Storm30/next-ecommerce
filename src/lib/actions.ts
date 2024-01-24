import { signIn, signOut } from "next-auth/react";
import dbConnect from "./mongoConnect";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData: any) => {
  "use server";
  const { username, email, password, img } = Object.fromEntries(formData);
  console.log("form data", Object.fromEntries(formData));

  try {
    dbConnect();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
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
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

const isCredentialsSigninError = (error: any): error is { message: string } => {
  return error.message.includes("CredentialsSignin");
};

export const login = async (formData: any) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (isCredentialsSigninError(err)) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
