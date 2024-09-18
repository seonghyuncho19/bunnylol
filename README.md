# Rithik's BunnyLOL that was forked over

This is hosted on [https://seonghyuncho19.github.io/bunnylol](https://seonghyuncho19.github.io/bunnylol). However, you can host it on any website that you would like (even on GitHub Pages). Since this is going to be your primary search engine for every new tab you open, I would suggest that you don't host it somewhere that may take a while to spin up the static page (like Heroku where your VM could go to sleep).

A note: a lot of these commands are customized for me. It is probably most beneficial for you to fork this repo and add/remove commands so that it is optimized for commands you actually need.

## Example Commands

Command | Name | URL
--- | --- | ---
fb | Facebook | [https://facebook.com/](https://facebook.com/)
mw | Messenger Web | [https://www.messenger.com/](https://www.messenger.com/)
gm | Gmail | [https://mail.google.com/mail/u/0](https://mail.google.com/mail/u/0)
gd | Google Drive | [https://drive.google.com/drive/u/0](https://drive.google.com/drive/u/0)
yt | YouTube | [https://youtube.com/](https://youtube.com/)
gh | GitHub | [https://github.com/](https://github.com/)
r | Reddit | [https://reddit.com/](https://reddit.com/)
l | Linkedin | [https://linkedin.com/](https://linkedin.com/)
g | Google | [https://google.com/](https://google.com/)
vs | VS Code | [vscode://](vscode://)
wut | Wikipedia | [https://wikipedia.org](https://wikipedia.org)
DEFAULT | Default - Google Search | [https://google.com/](https://google.com/)

## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `http://seonghyuncho19.github.io/bunnylol?search=%s`. Of course, you should change the `seonghyuncho19.github.io` part to your own domain.

4. Make this the default search engine.

## Adding a command

1. Run `npm install` so that `flow` (JavaScript type checker) can run.

2. Open up the `src/commands.js` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube).

3. Run `npm run build; npm run bundle; npm run minify`.

4. Publish to your website.

## Running locally

Since we use `import` module syntax, we need to run a server to bypass CORS issues. You can setup the server by running `npm install`, followed by `node server.js`. The server should be up and visible at `localhost:3000`.
