# README.md

Html editor is a compiler for html which transforms to web view tags and text.

## Instalation

To install the code you have to download the folder and open it in the browser.

## Usage

You can use it to compile small pieces of html code to see the final result.
The part of the code that allows you to compile the code is:

```javascript=
let data = document.getElementById('input');
let result = document.getElementById('result');

function run(){
    result.innerHTML=data.value;
}

```
## Authors
Aarón Curro Solla