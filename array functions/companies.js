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
      "founded_year" : 1999,
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
      "founded_year" : 1998,
      "total_money_raised" : "$18.5M"
    }
  ];
  
  // Given an array of companies, return an array of all the company names founded last century
  //var collectCompaniesFoundedLastCentury = function (companies) {


function collectCompaniesFoundedLastCentury(companyList){
    var result = [];
    var listCursor = 0;

    for(let current = 0; current < companyList.length; current++){
        if(companyList[current].founded_year > 1899 && companyList[current].founded_year < 2000){
            result[listCursor] = companyList[current].name;
            listCursor++;
        }
    }

    return result;
}

console.log(collectCompaniesFoundedLastCentury(companies));
