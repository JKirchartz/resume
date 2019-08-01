/*
 * helpers.js
 * Copyleft (ↄ) 2019 jkirchartz <me@jkirchartz.com>
 *
 * Distributed under terms of the NPL (Necessary Public License) license.
 */
var Handlebars = require('handlebars');

// output 5 stars in increments of half-stars.
Handlebars.registerHelper("stars", function(rating) {
  var output = "";
  rating = parseInt(rating, 10) / 2; // expects a number between 1-10
  var half = Math.floor(rating) === rating;
  rating = Math.floor(rating);
  while (rating > 0) {
    output += "<i class='fas fa-star'></i>";
  }
  if (half) {
    output += "<i class='fas fa-star-half'></i>";
  }
  return output;
});


// Manage skills data
Handlebars.registerHelper("skills", function(skills) {
  var skillsArr = Object.keys(skills).map(function (skill) {
    return skills[skill];
  });
});
