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


Array.prototype.byCount= function(){     var itm, a= [], L= this.length, o= {};     for(var i= 0; i<L; i++){         itm= this[i];         if(!itm) continue;         if(o[itm]== undefined) o[itm]= 1;         else ++o[itm];     }     for(var p in o) a[a.length]= p;     return a.sort(function(a, b){         return o[b]-o[a];     }); }

Handlebars.registerHelper("technologies", function(roles) {
  var tech = [];
  roles.forEach(function (item) {
    if ( item.technologies ) {
      tech.concat(item.technologies);
    }});
  return tech.byCount();
});
