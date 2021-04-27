/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const NUMBER = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const SUIT = ["♥", "♦", "♠", "♣"];
const INPUTDRAW = document.querySelector("#cardNumbers");
const DRAWBTN = document.querySelector("#drawButton");

window.onload = function() {
  draw();
};

const draw = () => {
  DRAWBTN.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector("#cardBox").innerHTML = "";

    for (let i = 0; i < INPUTDRAW.value; i++) {
      generatedCard(getRandomCard()); //= 8,cor
    }
  });
};

const getRandomCard = () => {
  let card = {
    suit: SUIT[getRandomAll(SUIT.length)],
    number: NUMBER[getRandomAll(NUMBER.length)]
  };
  return card;
};

const getRandomAll = max => {
  return Math.floor(Math.random() * max);
};

let generatedCard = card => {
  let cardBody = document.createElement("div");
  cardBody.classList.add("cardbody");

  let topBox = document.createElement("div");
  let topSuit = document.createTextNode(card.suit);
  topBox.appendChild(topSuit);
  topBox.classList.add("topbox");

  let midBox = document.createElement("div");
  let midNumber = document.createTextNode(card.number);
  midBox.appendChild(midNumber);
  midBox.classList.add("midbox");

  let botBox = document.createElement("div");
  let botSuit = document.createTextNode(card.suit);
  botBox.appendChild(botSuit);
  botBox.classList.add("botbox");

  cardBody.appendChild(topBox);
  cardBody.appendChild(midBox);
  cardBody.appendChild(botBox);
  let cardBox = document.querySelector("#cardBox");
  cardBox.appendChild(cardBody);
};
