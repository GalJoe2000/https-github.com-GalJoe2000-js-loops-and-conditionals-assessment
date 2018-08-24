function question1 (array) {
  //let weekdays = [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
  // Write your code here! Make sure not to modify the function
  // declaration above or the `module.exports` code below
  for (let i = 0; i < array.length; i++)

    switch(array[i]){
      case 'Sat':
      case 'Sun':
        console.log('Yay, its the weekend!');
      break;

      case 'Fri':
        console.log('Almost there...');
      break;

      case 'Mon':
        console.log('I hate Mondays more than Garfield');
      break;

      case 'Tues':
      case 'Wed':
      case 'Thurs':
        console.log('Everybodys working for the weekend');
      break;

      }
    }


// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."
