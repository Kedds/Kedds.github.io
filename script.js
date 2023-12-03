// @ts-check
/*
 Code to be used with all files in web page
*/


/**
 * Put the nav bar html text into the HTML
 */
let navHtmlText = '<ul>' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="index.html#projects">Projects</a></li>' +
    '<li><a href="index.html#models">Models</a>' +
    '<li><a href="index.html#research">Research</a>' +
    '<li><a href="index.html#other">Other</a></li>' +
    '<li><a href="CV_Richards.pdf">CV</a></li>' +
    '</ul>'

document.getElementById("nav").innerHTML = navHtmlText;


