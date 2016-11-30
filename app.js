'use strict';
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var response1 = prompt('60% of computers are volnerable to exploitation').toLowerCase();
if (response1 === 'yes' || response1 === 'y') {
  alert('Wrong, 99% of computers are vulnerable to exploitation');
} else if (response1 === 'no' || response1 === 'n'){
  alert('You are correct, it is actually 90%!' );
  console.log('The user got question 1 wrong');
} else {
  alert('Sorry, it is a yes/no answer');
}

var response2= prompt('600,000 facebook accounts are compromised every day').toLowerCase();
if (response2 === 'yes' || response2 === 'y') {
  alert('Correct, around 600,000 accounts are compromized every day!' );
} else if (response2 === 'no' || response2 === 'n'){
  alert('Wrong, around 600,000 accounts are compromised every day!');
  console.log('The user got question 1 wrong');
} else {
  alert('Sorry, it is a yes/no answer');
}

var response3 = prompt('68% of funds lost as a result of a cyber attack were declared unrecoverable').toLowerCase();
if (response3 === 'yes' || response3 === 'y') {
  alert('Correct, 68% of those funds are never found!' );
} else if (response3 === 'no' || response3 === 'n'){
  alert('Wrong, 68% of those funds are never found!');
  console.log('The user got question 1 wrong');
} else {
  alert('Sorry, it is a yes/no answer');
}

var response4 = prompt('There are an average of 138 succesful attacks per week').toLowerCase();
if (response4 === 'yes' || response4 === 'y') {
  alert('Correct, there are on average 138 successful cyber attacks per week!' );
} else if (response4 === 'no' || response4 === 'n'){
  alert('Wrong, there are 138 successful cyber attacks on average!');
  console.log('The user got question 1 wrong');
} else {
  alert('Sorry, it is a yes/no answer');
}

var response5 = prompt('A hacker has to be in contact with your computer in order to hack it').toLowerCase();
if (response5 === 'yes' || response5 === 'y') {
  alert('Wrong! Hackers can hack your computer from across the globe!' );
} else if (response5 === 'no' || response5 === 'n'){
  alert('Correct, Hackers can hack your computer from across the globe!');
  console.log('The user got question 1 wrong');
} else {
  alert('Sorry, it is a yes/no answer');
}
