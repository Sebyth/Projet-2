import {dailyQuote, dailyAuthor} from "./Modules/quotes.js";

document.body.querySelector("blockquote").innerHTML = '"' + dailyQuote + '"';
document.body.querySelector("cite").innerHTML = " - " + dailyAuthor;