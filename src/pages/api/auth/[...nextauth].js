import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // EmailProvider({})
  ],
  pages: {
    signIn: "/auth/signin",
  }
})
