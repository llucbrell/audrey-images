# audrey-errsign

> Scion for [audrey-two](https://www.npmjs.com/package/audrey-two) VCCLI (View-Control-Command-Line-Interface) ^v2.0.0

![](https://raw.githubusercontent.com/llucbrell/audrey-images/master/captura1.png) 

## What this scion does?

Include into your audrey-two-view images.

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags, now replaced by custom audrey-seeds that you can include or not in your projects.

![](https://raw.githubusercontent.com/llucbrell/audrey-images/master/captura3.png) 

## Install

Example
```
$ npm install --save audrey-two
  npm install --save audrey-images
```
## Usage

Example

```js
var myTerminalDisplay={
	body:["x?image"],//tell audrey where you want to display it
	image:"path/to/image.png" ,//tell audrey what image you want to use
	};

var audrey2= require('audrey-two');//inicialize audrey
var audrey= audrey2(myTerminalDisplay);

//run your command and pass error objects to audrey

audrey.seed(["audrey-images-x?"]);//It's an scion don't forget th "x"
//tell audrey that there is a new seed
audrey.encore();//run audrey
```
## Image display

This scion only works with very small png images, because it doesn't matter about the width of the screen and cos it treats every pixel as a character. So a 120x120 pixels it'll print a mess of color characters.

Look at this image and you'll look the pixels respect the magenta text.

![](https://github.com/llucbrell/audrey-images/blob/master/catura2.png) 
