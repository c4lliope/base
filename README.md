# React on Rails on Docker

A simple & solid programming stack.

## Dependencies

The only thing you need to have installed is Docker.
If you type `docker run hello-world` and see a welcome message,
you're good to go.

## Development

After you have cloned this repo,
run this setup script to set up your machine
with the necessary dependencies to run and test this app:

    % ./bin/setup

After setting up, you can run the application using docker-compose:

    % ./bin/docker-compose up

### Useful Shortcuts

To make working with this application a bit easier,
we recommend adding a few lines to your shell configuration.

```bash
# Save your fingers a lot of trouble while working with Docker
alias dc='docker-compose'
alias dcrun='dc run --rm'
alias drun='docker run --rm -it'
alias dvrun='drun -v $(pwd):/app --workdir /app $argv
```

## Guidelines

Use the following guides for getting things done, programming well, and
programming in style.

* [Protocol](http://github.com/thoughtbot/guides/blob/master/protocol)
* [Best Practices](http://github.com/thoughtbot/guides/blob/master/best-practices)
* [Style](http://github.com/thoughtbot/guides/blob/master/style)

## Deploying

If you have previously run the `./bin/setup` script,
you can deploy to staging and production with:

    $ ./bin/deploy staging
    $ ./bin/deploy production
