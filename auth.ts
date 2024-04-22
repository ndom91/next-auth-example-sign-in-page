import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [
  GitHub,
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    async authorize(c) {
      if (c.password !== "password") {
        return null;
      }

      return {
        id: "1",
        name: "Fill Murray",
        email: "fill@murray.com",
        image: "https://source.boringavatars.com/marble/120",
      };
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers,
  pages: {
    signIn: "/auth/login",
  },
});
