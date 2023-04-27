# 🔐 Example Sign-in Page

This is a custom [NextAuth.js](https://next-auth.js.org) sign-in page I'd once used in an internal application. 

I decided to open-source it in this example repository. Feel free to use as you see fit!

## 📺 Screenshot

![Screenshot 1](https://i.imgur.com/YLw7d5W.png)

## 🚀 Getting Started


1. Install dependencies
```bash
$ npm Install
```

2. Start dev server

```bash
$ npm run dev
# or
$ yarn dev
```

3. Create a new `.env` file and fill in the variables:
- To get `GITHUB_ID` and `GITHUB_SECRET`, navigate to [GitHub > Settings > Apps](https://github.com/settings/apps) and create a new app. Don't forget to add the callback URL `http://<YOUR WEBSITE>/api/auth/callback/github`.
- To get `NEXTAUTH_SECRET`, use a [a generator](https://generate-secret.vercel.app/32).

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛡 NextAuth.js

You will find the example sign-in page under `/src/pages/auth/signin.js`. 

This has an example OAuth provider (`Github`) and an example magic link Email login field, although the Email provider is not setup in this repo. For email setup, please check out the [docs](https://next-auth.js.org/configuration/providers/email) for more information.

## 📝 License

MIT
