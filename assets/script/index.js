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


function validateForm() {
  let inputName = '' ;
  let inputCity = '';
  let inputEmail = '';
// validte the input field if correct 

// createContact(userName, userCity, userEmail)
}

function createContact(inputName, inputCity, inputEmail) {
  // create a contact Object using input field
  // push it to array
  // updateContactCount()
  // updateDisplayContacts()

}

function updateContactCount() {
  // count contacts array length
  // update contact-count div with number
}

function deleteContact(obj) {
  // delete a contact from the array
  // updateDisplayContacts()
  // updateContactCount()

}

function updateDisplayContacts() {
// loop thru array of contacts and create an HTML element for each
// start with most recent
}

function emptyContacts() {
// remove all contact elements from display contacts

}