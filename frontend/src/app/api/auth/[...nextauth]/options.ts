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
        console.log("The user's data is : ", user);
        console.log("The account data is : ", account);

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
        user.provider = data?.user?.provider;

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({
      session,
      user,
      token,
    }: {
      session: CustomSession;
      user: CustomUser;
      token: JWT;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
    async jwt({ token, user }) {
      // console.log("Token :", token);
      // console.log("User :", user);
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
};
