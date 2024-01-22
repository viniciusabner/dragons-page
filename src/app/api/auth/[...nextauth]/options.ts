import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "e-mail", type: "email", placeholder: "seu melhor e-mail" },
        password: { label: "senha", type: "password" }
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'Vinicius Abner', email: 'test@example.com', password: '1234' }

        if (user &&
            user?.email === credentials?.email &&
            user?.password === credentials?.password) {
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
}
