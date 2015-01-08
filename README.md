ionicBoilerplate
================

Features
--------
- Stack : scss, ionic, angular
- Build : install, build, watch, grunt, bower

Install requirements
--------------------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install -g cordova`
- `sudo npm install -g ionic`
- `sudo npm install bower -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Install
-------
- `cd _build && npm install`
- platforms : 
	- `ionic platform add ios`
	- `ionic platform add android`

Run
---
- `cd _build && grunt build`
- Simulator : `ionic emulate ios`
- Build : `ionic build ios`
- Browser : open in browser `www/index.html`