'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Contact Page
*/

import {Contact} from './Contact.js';
import { select, onEvent } from './util.js';

const addBtn = select('.add-btn');
const contactInfo = select('.contact-input');
const addressBook = select('.grid');
const contactCount = select('.contact-count p'); 
const errorMsg = select('.validation-feedback');
const contactListArray = [];
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

onEvent('click', addBtn, processForm);

onEvent('click', errorMsg, () => {
  errorMsg.style.opacity = 0;
});

function processForm() {
  let input = contactInfo.value;
  let inputArray = input.split(',');

  if (isFormatCorrect(inputArray)) {
    let inputName = inputArray[0].trim();
    let inputCity = inputArray[1].trim();
    let inputEmail = inputArray[2].trim();

    if (areInputsValid(inputName, inputCity, inputEmail)) {
      createContact(inputName, inputCity, inputEmail);
      errorMessage('clear');
    } else {
      //incorrect entries feedback
      errorMessage('entry');
      console.log('incorrect Entry');
    }

  } else {
    // Incorrect format feedback
    errorMessage('format');
    console.log('incorrect format');
  }
  
}

function errorMessage(str) {
  if (str === 'clear') {
    errorMsg.style.opacity = 0;
    errorMsg.innerHTML = '';
  } else {
    errorMsg.style.opacity = 1;
  }

  if (str === 'format') 
    errorMsg.innerHTML = '<p>name, city and email must be separated by a comma</p>';

  if (str === "entry") {
    errorMsg.innerHTML = '<p>One of the necessary fields is incorrect</p>'
  }
}



function isFormatCorrect(inputArray) {
  return inputArray.length === 3;
}

function areInputsValid(inputName, inputCity, inputEmail) {
    return ((inputName !== '') && (inputCity !== '') && (emailRegex.test(inputEmail)))
}

function createContact(inputName, inputCity, inputEmail) {
  let contact = new Contact(inputName, inputCity, inputEmail);
  contactListArray.unshift(contact);
  listContacts()
}

function updateContactCount() {
  let n = contactListArray.length;
  contactCount.innerText = `Number of contacts: ${n}`;
}

function deleteContact(obj) {
  let i = contactListArray.indexOf(obj);
  contactListArray.splice(i, 1);
  listContacts();
}

function listContacts() {
  updateContactCount();
  emptyContacts();

  for (let index = 0; index < contactListArray.length; index++) {
    const obj = contactListArray[index];
    createContactCard(obj);
  }
}

function createContactCard(obj) {

  let card = cardTemplate();
  let details = cardDetails(obj);

  card.append(details);

  onEvent('click', card, () => {
    deleteContact(obj)
  });

  addressBook.append(card);
}

function cardDetails(obj) {
  let info = document.createElement('div');
  let name = document.createElement('p');
  let city = document.createElement('p');
  let email = document.createElement('p');

  let objName = checkOverflow(obj.name)
  let objCity = checkOverflow(obj.city)
  let objEmail = checkOverflow(obj.email)

  name.innerText = objName;
  city.innerText = objCity;
  email.innerText = objEmail;

  info.append(name, city, email);
  return info
}

function checkOverflow(str) {
  if (str.length > 27) { 
    let newStr = str.slice(0, 24)
    newStr += "...";
    return newStr;
  }
  return str
}

function cardTemplate() {
  let card = document.createElement('div');
  card.classList = 'contact-box';

  let highlight = document.createElement('div');
  highlight.classList = 'highlight';
  highlight.innerHTML = "<p><strong>Name:</strong></p><p><strong>City:</strong></p><p><strong>Email:</strong></p>";

  card.append(highlight);
  return card
}

function emptyContacts() {
  addressBook.innerHTML = '';
}