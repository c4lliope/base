# Configure Assemble on Your Local Development Environment

1. After cloning the repository, run the setup script

    `./bin/setup`

1. Make sure that postgres, and redis, are both installed and running locally.

1. Log into your GitHub account and go to your [developer application settings].

1. Under the Developer applications panel - Click on "Register new application"
   and fill in the details:

    * Application Name: Assemble Development
    * Homepage URL: `http://localhost:3000`
    * Authorization Callback URL: `http://localhost:3000`

1. On the confirmation screen, copy the `Client ID` and `Client Secret` to
   `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in the `.env.local` file.

1. Run `foreman start`. Foreman will start the web server and the resque
   background job queue. **NOTE**: `rails server` will not load the appropriate
   environment variables and you'll get a "Missing `secret_key_base` for
   'development' environment" error. Similarly, `heroku local` and `forego start`
   will fail to properly load `.env.local`.

1. Open `localhost:3000` in a browser.

## Testing on your local machine

In order to use your development machine as the server,
you'll need to use a tool like [ngrok](https://ngrok.com/)
to create a public tunnel to your local application.
When you have a public-facing URL,
update the `APPLICATION_HOST` environment variable in `.env`
to point to the public URL.
