/*

Task:

Given an array:
  ['1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '1', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1']

1. Find the longest sequence of "1"s.
2. Arrange the sequence of "1"s and "0"s in ascending order in a new array while alternating the "1"s and "0"s.

*/


const taskArr =  ['1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '1', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1'];

const longestSequence = (taskArr) => {
  let intArr = [];

  taskArr.forEach((data) => {
    intArr.push(parseInt(data));
  });

  let countOne = [];
  let count1 = [];

  intArr.forEach((number) => {
    if (number === 1) {
      countOne.push(number);
    } else if (number === 0) {
      count1.push(countOne.length);
      countOne = [];
    }
  });

  const newArr = count1.filter( (data) => data !== 0 );
  

  let highest = 0;
  newArr.forEach( (data) => {

   if(highest < data){
     highest = data;
   }
 
    
  });
  console.log( `longest sequence of "1"s = ${highest} \n`)


  console.log(` Sequence counts list = ${newArr} \n` );
  return highest;
};

longestSequence(taskArr);


const arrangeAscending = (taskArr) => {

  let intArr = [];

  taskArr.forEach((data) => {
    intArr.push(parseInt(data));
  });

  let one = [];
  let zero = [];

  intArr.forEach( (num) => {
    if(num === 0 ){
      zero.push(num);
    }
    else {
      one.push(num);
    }

  })

  const resultArr = zero.concat(one);

  console.log(`Arrange the sequence of "1"s and "0"s in ascending order = \n\n ${resultArr} \n`);
  return resultArr;

}


arrangeAscending(taskArr);