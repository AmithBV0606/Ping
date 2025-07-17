import { CustomSession, CustomUser } from "@/types";
import { Account, AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { LOGIN_URL } from "@/lib/apiEndPoints";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: CustomUser;
      account: Account | null;
    }) {
      // Note : The user and account is coming from the OAuth provider, in our case Google.
      try {
        const payload = {
          name: user.name,
          email: user.email,
          image: user.image,
          oauth_id: account?.providerAccountId,
          provider: account?.provider,
        };

        const { data } = await axios.post(LOGIN_URL, payload);

        // Since the user object coming from google doesn't have id and token, we need to append them to user from the data object :
        user.id = data?.user?.id.toString();
        user.token = data?.user?.token;

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: { session: CustomSession; token: JWT }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
};

// ✅ Q1: Is the "user" already present in the "token" inside the jwt callback?

/*
Answer: 

- No, the "user" is not automatically present in the "token" object by default.

- The "user" argument is only populated the first time the jwt callback runs — i.e., right after the user signs in (from the signIn callback).

- On subsequent requests, "user" is undefined, and only "token" is available.

- So you must manually store "user" data inside "token.user" so it can persist across sessions.
*/

// ✅ Q2: Is the user from the signIn callback the same as the one passed to the jwt callback?

/*
Answer: 

- Yes, but only during the initial sign-in request.

- During the initial sign-in, the flow is:

    1. signIn() callback runs (Google returns a user + account)

    2. Then, jwt() callback runs with that user

    3. Then, session() callback runs with token.user

- So yes — during sign-in, the user from signIn is passed down to the jwt callback, and you're correctly using that opportunity to enrich the token.

But again, on subsequent requests:

    1. signIn doesn’t run.

    2. jwt({ user }) receives user as undefined.

    3. Only token persists between requests.
*/
