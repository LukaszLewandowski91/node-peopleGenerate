const os = require("os");
const fs = require("fs");
const genders = ["M", "F"];
const femaleNames = [
  "Magdalena",
  "Karolina",
  "Agnieszka",
  "Katarzyna",
  "Patrycja",
  "Milena",
  "Klaudia",
  "Ewelina",
];

const maleNames = [
  "Łukasz",
  "Damian",
  "Paweł",
  "Mikołaj",
  "Nikodem",
  "Szymon",
  "Kaceper",
  "Piotr",
];

const lastNames = ["Lewandowski", "Płatek", "Muzalewski", "Nowak"];
const people = [];

const randChoice = (arr) => {
  const elementArr = Math.floor(Math.random() * arr.length);
  return arr[elementArr];
};

const generateNumber = () => {
  let finalNum = "";
  const number = Math.floor(Math.random() * 999);
  if (number.toString().length === 1) {
    finalNum = "00" + number.toString();
    return finalNum;
  } else if (number.toString().length === 2) {
    finalNum = "0" + number.toString();
    return finalNum;
  }
  return number;
};

for (let i = 0; i < 20; i++) {
  let firstName = "";
  const minAge = 18;
  const maxAge = 78;
  const gender = randChoice(genders);
  if (gender === "M") {
    firstName = randChoice(maleNames);
  } else {
    firstName = randChoice(femaleNames);
  }
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  const phoneNumber = `${generateNumber()}-${generateNumber()}-${generateNumber()}`;

  const person = {
    firstName,
    lastName,
    age,
    gender,
    email,
    phoneNumber,
  };
  people.push(person);
}
const peopleJson = JSON.stringify(people);
fs.writeFile("people.json", peopleJson, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
