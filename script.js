"use strict";
/*
Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends )😅!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK 🙂
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;

console.log(players1, players2);
//2.

const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

//3.

const allPlayers = [...players1, ...players2];

console.log(allPlayers);
//4.
const playersFinal = ["Thiago", "Coutinho", "Perisic", ...players1];

console.log(playersFinal);

//5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6.
const printgoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
//6.1
printgoals("Davies", "Muller", "Lewandowski", "Kimmich");
//6.2
printgoals(...game.scored);

//7.

team1 > team2 && console.log("team2 is most likey to win the game");
team2 > team1 && console.log("team1 is most likey to win the game");


//coding challenge 2
'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
// Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// const arr = game.scored;

// for (const [i, el] of arr.entries()) {
//   console.log(`Goal ${i + 1}:${el}`);
// }

for (const [i, el] of game.scored.entries()) console.log(`Goal ${i + 1}:${el}`);

//2
// Use a loop to calculate the average odd and log it to the console (We already
//   studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average = (average / odds.length).toFixed(2);
console.log(average);

//3
// //Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

// const odd = game.odds;

// for (const [a, b, c] of odd)
//   console.log(`odds of winnig Bayren Munich is ${a},
// odds of draw ${b}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${teamstr} : ${odd}`);
}
//4
// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
//Bonus problem
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getcode = str => {
  return str.slice(0, 3).toUpperCase();
};
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(from);

  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll(
    '_',
    ' '
  )} from ${getcode(from)} to ${getcode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}


--------------------New challenge on function --------------------

const poll = {
  question: ['What is your favourite programming language?'],
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewUser() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.toString('\n')}(write option number)`
      )
    );
    console.log(answer);
    //Register answer
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Pollresults are ${this.answers.join(', ')}`);
    }
  },
};
poll.registerNewUser();

document
  .querySelector('.btn')
  .addEventListener('click', poll.registerNewUser.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
