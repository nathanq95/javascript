var companies = [
  {
    "name" : "AdventNet",
    "category_code" : "enterprise",
    "number_of_employees" : 600,
    "founded_year" : 1996,
    "total_money_raised" : "$0"
  },
  {
    "name" : "TechnologyGuide",
    "category_code" : "web",
    "number_of_employees" : 10,
    "founded_year" : 2001,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Wetpaint",
    "category_code" : "web",
    "number_of_employees" : 47,
    "founded_year" : 2005,
    "total_money_raised" : "$39.8M"
  },
  {
    "name" : "Zoho",
    "category_code" : "software",
    "number_of_employees" : 1600,
    "founded_year" : 2005,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Omnidrive",
    "category_code" : "network_hosting",
    "number_of_employees" : null,
    "founded_year" : 2005,
    "total_money_raised" : "$800k"
  },
  {
    "name" : "Digg",
    "category_code" : "news",
    "number_of_employees" : 60,
    "founded_year" : 2004,
    "total_money_raised" : "$45M"
  },
  {
    "name" : "Geni",
    "category_code" : "web",
    "number_of_employees" : 18,
    "founded_year" : 2006,
    "total_money_raised" : "$16.5M"
  },
  {
    "name" : "StumbleUpon",
    "category_code" : "web",
    "number_of_employees" : null,
    "founded_year" : 2002,
    "total_money_raised" : "$18.5M"
  }
];

// Given an array of companies, return an array of all the company names founded last century
var collectCompaniesFoundedLastCentury = function (companies) {
 
  //run through an array with a for loop
  //access a property "founded_year"
  //determine if the value in the property <2000 and larger than 1899
  //if it meets the above criteria, push it into the array lastCenturyCompanies
   var lastCenturyCompanies = []; 
   for (var i = 0; i < companies.length; i++) {
     if (companies[i]["founded_year"] < 2000 && companies[i]["founded_year"] > 1899){
       lastCenturyCompanies.push(companies[i]["name"]);
     }
   }
  return lastCenturyCompanies;
};
