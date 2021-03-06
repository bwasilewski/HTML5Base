#HTML5Base v2.0

HTML5Base is a long-forgotten and re-imagined attempt to simplify the creation of new projects utilizing the latest web technologies out of the box such as Node.js, Grunt, SASS and Compass.

This project does lots of things for you, including:

* SASS with Compass
* File cleanup (removal of logging statements for production files, etc)
* File Concatenation
* File minification
* Javascript hinting
* HTML Includes



##Requirements

You will need some command line kung fu in order to use this project. Check out a primer [here](http://net.tutsplus.com/tutorials/tools-and-tips/the-command-line-is-your-best-friend/).


##Installation

This project has a couple of dependencies, mainly Node.js, NPM, and Grunt. Make sure you have all of these components installed and running properly before trying to use this project.

Once you've installed all dependencies, simply clone this repo into your project folder and in the command line, type

`npm install`

which will install the rest of the project's dependencies. From there, you can type `grunt`, `grunt dev`, `grunt prod`, or any individual grunt task that's listed in the Gruntfile.js file.


### _src and _dist Directories

Files inside of the _dist directory are for testing purposes only and should never, under any circumstances be edited by anyone, ever, ever, ever ever. All work is to be limited to the _src directory. Grunt's job is to take the work that you do in your _src directory, compile it, and move it over to _dist for testing. If you like to set up virtual hosts for your testing environment, these should always point to the _dist directory.


### Automatic Compilation

I know. You're like "so now I have to type `grunt` every time I want to see changes to my project? That's wiggity wack!" You're right. That would be silly. That's why I've included a "watch" task that will watch your _src directory and automatically recompile any time you've made a change. Just open up your command line, navigate to your project (the same directory that your Gruntfile resides in) and type `grunt watch`. Now whenever you make a change to your project, it will be recompiled, assuming you haven't made any glaring syntax errors/mistakes. If so, Grunt will warn you about a problem in the command line.
