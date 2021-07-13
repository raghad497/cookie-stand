
//Important Note for TA : My work is based on Samer Allaham class repo , I followed all the steps we were told to follow to build this code and repeated the structure of some functions in the demo 

'use strict'
let times = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



let stores = [];

function store(city, minimumCustm, maximumCustm, averageOfCookies) {
  this.city = city;
  this.minimumCustm = minimumCustm;
  this.averageOfCookies = averageOfCookies;
  this.allCookiesAday = 0;
  this.CostmPerTime = [];
  this.cookiesPerTime = [];
  stores.push(this);
}

store.prototype.numberOfCustm = function () {
  for (let x = 0; x < times.length; x++) {
    this.CostmPerTime.push(random(this.minimumCustm, this.minimumCustm));

  }
}
store.prototype.numberOfCookies = function () {
  for (let x = 0; x < times.length; x++) {
    this.cookiesPerTime.push(Math.floor(this.CostmPerTime[x] * this.averageOfCookies));
    this.allCookiesAday += this.cookiesPerTime[x];


  }
}

let seattle = new store('seattle', 23, 65, 6.3);
let tokyo = new store('Tokyo', 3, 24, 1.2);
let dubai = new store('dubai', 11, 38, 3.7);
let paris = new store('paris', 20, 38, 2.3);
let lima = new store('lima', 2, 16, 4.6);


let father = document.getElementById('father');

let table = document.createElement('table');

father.appendChild(table);

// header function

function createTableHeader() {

  let upperRow = document.createElement('tr');

  table.appendChild(upperRow);

  let num1Th = document.createElement('th');

  upperRow.appendChild(num1Th);

  num1Th.textContent = 'Name';
  for (let x = 0; x < times.length; x++) {
    let timesTh = document.createElement('th');
    upperRow.appendChild(timesTh);
    timesTh.textContent = times[x];


  }

  let finalTh = document.createElement('th');

  upperRow.appendChild(finalTh);

  finalTh.textContent = 'Daily Location Total';


}

store.prototype.render = function () {
  let inputRow = document.createElement('tr');
  table.appendChild(inputRow);

  let firstColumnTd = document.createElement('td');
  inputRow.appendChild(firstColumnTd);
  firstColumnTd.textContent = this.city;

  for (let x = 0; x < times.length; x++) {
    let entriesTd = document.createElement('td');
    inputRow.appendChild(entriesTd);
    entriesTd.textContent = this.cookiesPerTime[x];


  }


  let allTd = document.createElement('td');
  inputRow.appendChild(allTd);
  allTd.textContent = this.allCookiesAday;


}

function createFooter() {

  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);
  let num1Th = document.createElement('th');
  footerRow.appendChild(num1Th);
  num1Th.textContent = 'Totals';

  let EveryThing = 0;

  for (let x = 0; x < times.length; x++) {
    console.log(times[x]);
    let totalsTimes = 0;
    for (let y = 0; y < stores.length; y++) {
      console.log(stores[y].cookiesPerTime[x]);
      totalsTimes += stores[y].
        cookiesPerTime[x];
      EveryThing += stores[y].cookiesPerTime[x];



    }
    console.log(totalsTimes);
    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = totalsTimes;

  }
  let finalTh = document.createElement('th');
footerRow.appendChild(finalTh);
finalTh.textContent = EveryThing;
}


createTableHeader();
for (let x = 0; x < stores.length; x++) {
  stores[x].numberOfCustm();
  stores[x].numberOfCookies();
  stores[x].render();


}

createFooter();




