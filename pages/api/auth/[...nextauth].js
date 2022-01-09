import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
// import EmailProvider from "next-auth/providers/email"
// import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID ,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID ,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        // EmailProvider({
        //     server: process.env.EMAIL ,
        //     from: ""
        // }),
    ]
})

// export default (req, res) => NextAuth(req, res, options)