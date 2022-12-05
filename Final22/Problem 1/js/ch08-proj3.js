/* add code below this */
outputCompanyCards();

function outputCompanyCards() {
   // parse the JSON string
   const companies = JSON.parse(content);
   // now output a card for each company
   for (let singleCompany of companies) {
      const card = new CompanyCard(singleCompany);
      card.outputCard();
   }
}

/*
 Encapsulates the accounting calculations for a stock/company
*/
function CompanyCard(data) {
   this.currency = (num) => new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(num);
   this.billions = (num) => new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD', notation: 'compact'}).format(num);

   this.symbol = data.symbol;
   this.name = data.companyName;
   this.day50 = data.stats.day50MovingAvg;
   this.day200 = data.stats.day200MovingAvg;
   this.revenue = data.stats.operatingRevenue;
   this.marketCap50 = data.stats.day50MovingAvg * data.stats.sharesOutstanding;
   this.marketCap200 = data.stats.day200MovingAvg * data.stats.sharesOutstanding;
   this.equity = data.stats.totalAssets - data.stats.totalLiabilities;
   this.tags = data.tags;

   /*
   Outputs the markup for a single stock/company
   */
   this.outputCard = (data) => {

      const outputTag = function(tag) {
         document.write(`<small>${tag}</small>`);
      };

      document.write(`<article class="card">`);
      document.write(`<h2>${this.symbol} - ${this.name}</h2>`);
      document.write(`<div>`);
      document.write(`<p>Share Price (50-day avg): <span>${this.currency(this.day50)}</span></p>`);
      document.write(`<p>Share Price (200-day avg): <span>${this.currency(this.day200)}</span></p>`);
      document.write(`<p>Market Cap (50-day avg): <span>${this.billions(this.marketCap50)}</span></p>`);
      document.write(`<p>Market Cap (200-day avg): <span>${this.billions(this.marketCap200)}</span></p>`);
      document.write(`<p>Net Revenue: <span>${this.billions(this.revenue)}</span></p>`);
      document.write(`<p>Shareholder Equity: <span>${this.billions(this.equity)}</span></p>`);
      document.write(`</div>`);
      document.write(`<footer>`);
      for (let tag of this.tags) {
         outputTag(tag);
      }
      document.write(`</footer>`);
      document.write(`</article>`);

   }
}





/* SIMPLE FUNCTIONAL APPROACH

function outputCard(company) {
   document.write(`<article class="card">`);
   document.write(`<h2>${company.companyName}</h2>`);
   document.write(`<div>`);
   document.write
   document.write
   document.write(`<p>Market Cap (50day avg): <span>${calcMarketCap50(company)}</span></p>`);
   document.write(`<p>Market Cap (200day avg): <span>${calcMarketCap200(company)}</span></p>`);
   document.write
   document.write
   document.write(`</div>`);
   document.write(`<footer>`);
   for (let tag of company.tags) {
      outputTag(tag);
   }
   document.write(`</footer>`);
   document.write(`</article>`);
}

function calcRevenue(company) {
   return currency(company.stats.operatingRevenue - company.stats.costOfRevenue);
}

function calcMarketCap50(company) {


function calcMarketCap200(company) {


function calcEquity(company) {
   return currency(company.stats.totalAssets - company.stats.totalLiabilities);
}

*/
