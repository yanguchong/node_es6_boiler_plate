Summary
---
Node Express ES6 Boilerplate

Simple boilerplate with ES6 integration using Babel

Features
---
* Babel ES6 Integration
* Nodemon - restart express on file changes
* onchange - transpile on change
* source maps for easy debugging

Quick Start
----
Clone Repo `https://github.com/yanguchong/node_es6_boiler_plate.git`

`npm install`

`npm run build`

`npm run watch-change`
  
  
In a separate terminal window

`npm run nodemon-web`

In the browser

`http://localhost:3000`


Overview
---
- Compiled files are copied to `/dist`
- `/bin/www` points to `/dist/[project]/app.js`
- 2 scripts need to be kicked off, sorry I could not get onchange to work with nodemon with one command
    - one script is to watch for changes and transpile
    - the other script is to watch for changes and restart express
- I included onchange to make this solution all inclusive, but I've found that webstorm filewatcher plugin is smoother.
Filewatcher may be a better alternative, but I am leaving for now since this seems to work. I may revisit later.
- If you make route changes you have to restart express