// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

function question0 (array) {
  for (var i = 0; i < array.length; i++){

    if (array[i] %2 ===0){
      console.log(array[i])
    }
  }
}
// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

function question1 (array) {
  for (var i = 0; i < array.length; i++){
      let result = array[i] *2
    if (result > 12){
      console.log(result)
    }
  }
}


function question2(array) {


  for (let i = 0; i < array.length; i++){
    switch(array[i]){

      case 'Sat':
      console.log('Yay, it\'s the weekend!');
      break;
      case 'Sun':
        console.log('Yay, it\'s the weekend!');
      break;
      case 'Fri':
        console.log('Almost there...');
      break;
      case 'Mon':
        console.log('I hate Mondays more than Garfield.');
      break;
      default:
        console.log('Everybody\'s working for the weekend.');
      break;
    }
  }
}

module.exports = { question0, question1, question2 }
