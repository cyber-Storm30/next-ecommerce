import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import dbConnect from "./mongoConnect";
import { User } from "@/models/User";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
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
          } else {
            return true;
          }
        } catch (err) {
          console.log("err", err);
          return false;
        }
      }
      return true;
    },
  },
});
