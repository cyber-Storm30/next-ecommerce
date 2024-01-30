import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./mongoConnect";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials: any) {
        try {
          dbConnect();
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("Wrong credentials!");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Wrong credentials!");
          }
          return user;
        } catch (err) {
          throw new Error("Failed to login!");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        dbConnect();
        try {
          const dbUser = await User.findOne({ email: profile?.email });
          if (!dbUser) {
            const newUser = new User({
              name: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
