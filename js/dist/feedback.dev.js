"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var feedback = [{
  id: '1',
  name: 'Cortney',
  image: 'https://i.pinimg.com/564x/4a/ca/a5/4acaa5f3f9dcd91c2f64fc970ef38204.jpg',
  text: "I've been using Efood for my food deliveries, and I'm consistently impressed with their efficient and timely service. No matter the weather or time of day, my orders arrive fresh and on time. It's a relief to know I can rely on Efood for a hassle-free delivery experience."
}, {
  id: '2',
  name: 'Robert',
  image: 'https://i.pinimg.com/564x/c3/83/ed/c383edb4a0beabfba61977eddf777059.jpg',
  text: "Efood has revolutionized my dining experience with its vast array of restaurant choices. From local gems to popular chains, I can always find something that suits my cravings. The easy-to-navigate app makes ordering a breeze, and the food arrives exactly as expected."
}, {
  id: '3',
  name: 'Johny',
  image: 'https://i.pinimg.com/564x/f2/67/ff/f267ff7ff5bf919f7a7360dec8ed11b9.jpg',
  text: "What sets Efood apart is their commitment to customer satisfaction. I had an issue with an order, and their customer support team was quick to respond and resolve the problem to my satisfaction. Their dedication to ensuring a positive experience speaks volumes about their service quality."
}];
var counter = 0;

var increaseCounter = function increaseCounter() {
  counter = (_readOnlyError("counter"), counter++);
};

console.log(feedback[counter]);
console.log(counter);
var feedbackBlock = document.createElement('div');
var feedbackName = document.createElement('p');
var feedbackImage = document.createElement('img');
var incrButton = document.createElement('button');
var reduceButton = document.createElement('button');