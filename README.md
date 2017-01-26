# sassy-reloader

```javascript
// SETUP
$ git clone https://github.com/pixelsandcandy/sassy-reloader.git
$ cd sassy-reloader
$ npm install
$ cd public
$ git clone YOUR_REPO.git



// PRE
// 1. put JS script into any HTML pages you want to live reload
<script src="//localhost:35729/livereload.js"></script>
// 2. create new .scss file in "scss" folder
// 3. add compiled .scss>.css stylesheet to HTML page eg:
<link href="/citi/assets/css/institutional-business.css" rel="stylesheet">
// 3. modify config.js if needed



// RUN
$ cd path_to/sassy-reloader
$ gulp

// go to localhost:8888
```
