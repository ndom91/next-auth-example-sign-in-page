# 🔐 Example Sign-in Page

This is a custom [Auth.js v5](https://authjs.dev) sign-in page I'd once used in an internal application. I decided to open-source it in this template repository so feel free to use as you see fit! This was created with `create-next-app@14.2.1` and uses `next-auth@5.0.0-beta.16`.

> [!NOTE]
> The default password is `password`

## 📺 Screenshot

![Screenshot 1](./public/screenshot_1.png)

## 🚀 Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Start dev server

```bash
pnpm dev
```

3. Create a new `.env` file and fill in the variables.

- `AUTH_SECRET` (required) - `openssl rand -base64 33` or use a [a generator](https://generate-secret.vercel.app/32).
- `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` (optional) - navigate to [GitHub > Settings > Apps](https://github.com/settings/apps) and create a new app. Don't forget to add the correct callback URL `http://<YOUR WEBSITE>/api/auth/callback/github` ([Docs](https://authjs.dev/getting-started/providers/github))

4. Open [http://localhost:3000](http://localhost:3000) and click "Signin" in the top-left to navigate to the signin page (`/auth/login`).

## 🛡 Auth.js

You will find the example sign-in page under `/app/auth/login/page.tsx`.

This page has both the [`Credential` provider](https://authjs.dev/getting-started/providers/credentials) and an example OAuth provider (`Github`) setup.

## 📝 License

MIT
