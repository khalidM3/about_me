'use strict';
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var q1 = prompt('does khalid have a cat').toLowerCase();

if ((q1 === 'yes' )|| (q1 === 'y')) {
  alert('Sorry, Khalid doesn\'t have a cat' );
} else if (q1 === 'no' || q1 === 'n'){
  alert('you are right, Khalid does not have a cat')
} else {
  alert('Sorry, it is a yes/no answer');
}
