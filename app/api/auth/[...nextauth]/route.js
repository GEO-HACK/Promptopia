import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const timeoutPromise = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), ms));

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        console.log("Connecting to DB for session...");
        await connectToDB();
  
        const sessionUser = await Promise.race([
          User.findOne({ email: session.user.email }),
          timeoutPromise(10000) // Increase timeout to 10 seconds
        ]);
  
        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }
  
        return session;
      } catch (error) {
        console.error("Error fetching session user:", error);
        return session; // Return the session even if the user isn't found
      }
    },
  
    async signIn({ account, profile, user, credentials }) {
      try {
        console.log("Connecting to DB for sign-in...");
        await connectToDB();
  
        const userExists = await Promise.race([
          User.findOne({ email: profile.email }),
          timeoutPromise(10000) // Increase timeout to 10 seconds
        ]);
  
        if (!userExists) {
          console.log("Creating new user...");
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
  
        return true;
      } catch (error) {
        if (error.message === "Request timed out") {
          console.error("Sign-in operation timed out");
        } else if (error.code === 11000) { // Duplicate key error code
          console.error("Email already exists");
        } else {
          console.error("Error signing in user:", error.message);
        }
        return false; // Fail the sign-in attempt on errors
      }
    },
  }

  
});

export { handler as GET, handler as POST };
