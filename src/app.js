import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import { generateDomains } from "./domainGenerator.js";

const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];
const extensions = ['.com', '.io', '.net', '.ve'];

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

generateDomains(pronouns, adjectives, nouns, extensions)
  .forEach(domain => console.log(domain));

