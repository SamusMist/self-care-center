//Query selector for receive message button
var buttonReceiveMessage = document.querySelector('.receive-message');
var meditateBox = document.querySelector('.meditate');
//input selectors
var mantraInput = document.getElementById("mantra-input");
var affirmationInput = document.getElementById("affirmation-input");
//Query selector for delete message button;
var buttonDeleteMessage = document.querySelector('.delete-message');
//Buddha selector
var buddhaSelector = document.querySelector('.buddhaImg');
//Affirmations and mantras arrays
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I choose to be kind to myself and love myself unconditionally.',
  'I have the freedom & power to create the life I desire.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.',
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Every day is a second chance.',
  'Don’t let yesterday take up too much of today.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
];
//Listener for the Receive message button
 buttonReceiveMessage.addEventListener('click', function () {
   returnMessage(mantras, mantraInput);
   returnMessage(affirmations, affirmationInput);
 });
 buttonDeleteMessage.addEventListener('click', function() {
   deleteMessage();
 });

var someShit;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function returnMessage(messageArray, messageInput) {
  someShit = messageArray[getRandomIndex(messageArray)];
  buttonDeleteMessage.classList.remove('hidden');
  if (messageInput.checked) {
  meditateBox.innerHTML = `
    <p>${someShit}</p>`
  };
};

  function deleteMessage() {
    someShit = mantras[getRandomIndex(mantras)];
    returnMessage(mantras, mantraInput);
    if (mantras.includes(someShit)) {
      mantras.splice(someShit, 1);
    };

    someShit = affirmations[getRandomIndex(affirmations)];
    returnMessage(affirmations, affirmationInput);
    if (affirmations.includes(someShit)) {
      affirmations.splice(someShit, 1);
    };

    meditateBox.innerHTML = `
    <img src="./assets/meditate.svg"/>`;
    buttonDeleteMessage.classList.add('hidden');
  };
