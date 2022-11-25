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
const contactListArray = [];
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

onEvent('click', addBtn, processForm);

function processForm() {
  let input = contactInfo.value;
  let inputArray = input.split(',');

  if (isFormatCorrect(inputArray)) {
    let inputName = inputArray[0].trim();
    let inputCity = inputArray[1].trim();
    let inputEmail = inputArray[2].trim();

    if (areInputsValid(inputName, inputCity, inputEmail)) {
      createContact(inputName, inputCity, inputEmail);
    } else {
      //incorrect entries feedback
      console.log('incorrect Entry');
    }

  } else {
    // Incorrect format feedback
    console.log('incorrect format');

  }
  
}

function isFormatCorrect(inputArray) {
  return inputArray.length === 3;
}

function areInputsValid(inputName, inputCity, inputEmail) {
    return ((inputName !== '') && (inputCity !== '') && !(emailRegex.test(inputEmail)))
}

function createContact(inputName, inputCity, inputEmail) {
  let contact = new Contact(inputName, inputCity, inputEmail);
  contactListArray.push(contact);

  updateContactCount()
  listContacts()

}

function updateContactCount() {
  let n = contactListArray.length;
  contactCount.innerText = `Number of contacts: ${n}`;
}

function deleteContact(obj) {
  // delete a contact from the array
  let i = contactListArray.indexOf(obj);
  contactListArray.splice(i, 1);
  listContacts();
  updateContactCount();

}

function listContacts() {
  emptyContacts();

  



}

function emptyContacts() {
  addressBook.innerHTML = '';
}