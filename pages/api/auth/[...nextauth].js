import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "../../models/userModel";
import bcrypt from "bcrypt";
import connectDB from "./lib/connectDB";
connectDB();

export default NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error("You haven't signed up yet");
        }
        if (user) {
          return signInUser({ password, user });
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "../../login",
  // },
  secret: process.env.JWT_SECRET,
  database: process.env.MONGODB_URI,
});

const signInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("please enter password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  return user;
};
