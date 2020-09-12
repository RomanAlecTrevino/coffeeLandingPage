A coffeeshop website rendered entirely in JS using Webpack

* [x] Install CleanWebpackPlugin
    * [x] Get it configured
* [x] Install File-loader and HTML-loader
    * [x] Get it configured
* [x] Install HTMLWebpackPlugin
    * [x] Get it configured
* [x] Install Webpack-Merge
    * [x] Config
        * [x] "const { merge }" -- It must be an object
    * [x] Setup Dev, Prod, and Common webpack environments
        * [x] Change "start" in package.json to run webpack.dev instead of .config on start
        * [x] Create "build" under start to build webpack.prod
        * [x] Setup Webpack dev server
            * [x] Install webpack-dev-server
            * [x] In package.json, make "start" start webpack-dev-server instead of webpack
                * [x] --open automatically opens the server when running nps
* [x] Add Dev and Prod config
* [x] Create coffee.js
    * [x] Link photos with Webpack
    * [x] Add page to index.js
* [] Create contact.js