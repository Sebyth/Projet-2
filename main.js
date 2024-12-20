import {dailyQuote, dailyAuthor} from "./Modules/quotes.js";

document.body.querySelector("quote").innerHTML = '"' + dailyQuote + '"' + " -" + dailyAuthor;