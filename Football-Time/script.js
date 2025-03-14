// Predefined array of football club objects
const footballClubs = [{
  name: 'Real Madrid',
  country: 'Spain',
  trophies: 98,
  league: 'La Liga'
},
{
  name: 'Manchester United',
  country: 'England',
  trophies: 66,
  league: 'Premier League'
},
{
  name: 'Bayern Munich',
  country: 'Germany',
  trophies: 71,
  league: 'Bundesliga'
},
{
  name: 'Liverpool',
  country: 'England',
  trophies: 65,
  league: 'Premier League'
},
{
  name: 'ATK Mohun Bagan',
  country: 'India',
  trophies: 6,
  league: 'Indian Super League'
},
{
  name: 'Juventus',
  country: 'Italy',
  trophies: 68,
  league: 'Serie A'
},
{
  name: 'Paris Saint-Germain',
  country: 'France',
  trophies: 42,
  league: 'Ligue 1'
},
{
  name: 'Barcelona',
  country: 'Spain',
  trophies: 95,
  league: 'La Liga'
},
{
  name: 'Chelsea',
  country: 'England',
  trophies: 32,
  league: 'Premier League'
},
{
  name: 'Mumbai City FC',
  country: 'India',
  trophies: 3,
  league: 'Indian Super League'
},
{
  name: 'AC Milan',
  country: 'Italy',
  trophies: 48,
  league: 'Serie A'
},
{
  name: 'Inter Milan',
  country: 'Italy',
  trophies: 41,
  league: 'Serie A'
},
{
  name: 'Manchester City',
  country: 'England',
  trophies: 29,
  league: 'Premier League'
},
{
  name: 'Arsenal',
  country: 'England',
  trophies: 46,
  league: 'Premier League'
},
{
  name: "Ajax",
  country: "Netherlands",
  trophies: 48,
  league: "Eredivisie"
},
];

// Write your code below
const container = document.querySelector('.container');
const introDiv = document.createElement('div');
introDiv.classList.add('introduction');
const h1 = document.createElement('h1');
h1.innerText = "Football Time";
introDiv.appendChild(h1);
container.appendChild(introDiv);

//Details Section:-
const detailsSection = document.createElement('div');
detailsSection.classList.add('details-section');
container.appendChild(detailsSection);

//All Clubs Section:-
const allClubDiv = document.createElement('div');
allClubDiv.id = "all-clubs-section";
const sec1h2 = document.createElement('h2');
sec1h2.innerText = "All Clubs";
allClubDiv.appendChild(sec1h2);
detailsSection.appendChild(allClubDiv);
//creating table
const table1 = document.createElement('table');
const thead1 = document.createElement('thead');
const headRowTable1 = document.createElement('tr');
const headerData = ["Name","Country","League","Trophies"];
headerData.forEach(data =>{
  const th = document.createElement('th');
  th.innerText = data;
  headRowTable1.appendChild(th);
});
thead1.appendChild(headRowTable1);
table1.appendChild(thead1);
allClubDiv.appendChild(table1);

const tBody1 = document.createElement('tbody');
footballClubs.forEach(club=>{
  const row = document.createElement('tr');
  let td = document.createElement('td');
  td.innerText = club.name;
  row.appendChild(td);
  td = document.createElement('td');
  td.innerText = club.country;
  row.appendChild(td);  
  td = document.createElement('td');
  td.innerText = club.league;
  row.appendChild(td);
  td = document.createElement('td');
  td.innerText = club.trophies;
  row.appendChild(td);
  tBody1.appendChild(row);
});
table1.appendChild(tBody1);

//Clubs with More Than 70 Championships Section
const sec2Div = document.createElement('div');
sec2Div.id = "trophy-70-or-more-section";
const sec2h1 = document.createElement('h2');
sec2h1.innerText = "Clubs with More Than 70 Championships";
sec2Div.appendChild(sec2h1);
container.appendChild(sec2Div);

//table2 section 2
const table2 = document.createElement('table');
const thead2 = document.createElement('thead');
const headerRow2 = document.createElement('tr');
const data2 = ["Name of the Club", "Trophies"];
data2.forEach(data=>{
  const th = document.createElement('th');
  th.innerText = data;
  headerRow2.appendChild(th);
});
thead2.appendChild(headerRow2);
table2.appendChild(thead2);
sec2Div.appendChild(table2);
const tBody2 = document.createElement('tbody');
const filterData = footballClubs.filter(data => data.trophies > 70);
filterData.forEach(data=>{
  const row = document.createElement('tr');
  let td = document.createElement('td');
  td.innerText = data.name;
  row.appendChild(td);
  td = document.createElement('td');
  td.innerText = data.trophies;
  row.appendChild(td);
  tBody2.appendChild(row);
});
table2.appendChild(tBody2);


//Premier League Section -> 3
const sec3Div = document.createElement('div');
sec3Div.id = "premier-league-section";
const sec3h2 = document.createElement('h2');
sec3h2.innerText = "Premier League";
sec3Div.appendChild(sec3h2);
const ulList = document.createElement('ul');
ulList.id = "premier-league";
sec3Div.appendChild(ulList);
const filterData1 = footballClubs.filter(data => data.country==="England");
filterData1.forEach(data=>{
  const li = document.createElement('li');
  li.innerText = data.name;
  ulList.appendChild(li);
});
container.appendChild(sec3Div);

const sec4Div = document.createElement('div');
sec4Div.id = "trivia-section";
const sec4h2 = document.createElement('h2');
sec4h2.innerText = "Trivia Section";
sec4Div.appendChild(sec4h2);

const ulList1 = document.createElement('ul');
footballClubs.forEach(data =>{
  const li = document.createElement('li');
  li.innerText = `${data.name} from ${data.country} plays in ${data.league} and has won ${data.trophies} championships`;
  ulList1.appendChild(li);
});
sec4Div.appendChild(ulList1);
container.appendChild(sec4Div);

//Trophies Section
const sec5Div = document.createElement('div');
sec5Div.id = "total-trophies-section";
const sec5h2 = document.createElement('h2');
sec5h2.innerText = "Total Trophies";
sec5Div.appendChild(sec5h2);
const para = document.createElement('p');
let totalTrophy = 0;
footballClubs.forEach(data=>{
  totalTrophy += data.trophies;
});
para.innerText = `In total, all these listed clubs have won ${totalTrophy} number of trophies.`;
sec5Div.appendChild(para);
container.appendChild(sec5Div);
