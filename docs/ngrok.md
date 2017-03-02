# Setup Ngrok to Allow Webhooks

Ngrok allows Assemble to receive webhooks from GitHub. If you'd like to develop or
test a feature involving GitHub sending a pull request notification to your
local Assemble server you'll need to have ngrok or something similar set up.

To get started with ngrok, sign up for an [ngrok] account and configure ngrok
locally by installing ngrok and running:

    `ngrok authtoken <your-token>`

1. Launch ngrok on port 3000 (we recommend running ngrok with a custom subdomain
   for easy and persistent configuration, but this requires a paid ngrok account.
   You can still run Assemble with a free ngrok account, but it will require keeping
   the GitHub developer application configuration and your  `.env.local` files up
   to date if your ngrok subdomain changes).

 * If you're using a custom subdomain:

    `ngrok http -subdomain=<your-initials>-assemble 3000`

 * If you're using a free ngrok plan:

    `ngrok http 3000`

1. Set the `HOST` variable in your `.env.local` to your ngrok host, e.g.
   `<your-subdomain>.ngrok.io`.

1. Change `ENABLE_HTTPS` to 'yes' in the `.env.local` file.

1. Log into your GitHub account and go to your [developer application settings].

1. Under the Developer applications panel - Click on "Register new
   application" and fill in the details:

    * Application Name: Assemble Development
    * Homepage URL: `https://<your-subdomain>.ngrok.io`
    * Authorization Callback URL: `https://<your-subdomain>.ngrok.io`

1. On the confirmation screen, copy the `Client ID` and `Client Secret` to
   `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in the `.env.local` file.

1. Run `foreman start`. Foreman will start the web server and the resque
   background job queue. **NOTE**: `rails server` will not load the appropriate
   environment variables and you'll get a "Missing `secret_key_base` for
   'development' environment" error. Similarly, `heroku local` and `forego start`
   will fail to properly load `.env.local`.

1. Open `https://<your-subdomain>.ngrok.io` in a browser.

[ngrok]: https://ngrok.com
[personal access token]: https://github.com/settings/tokens
[developer application settings]: https://github.com/settings/developers
