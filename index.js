/**
 * 1-masala:
 * function kub(arg) {
  return arg ** 3;
}

console.log(kub(3));
 *

const kub=function(arg) {
  return arg ** 3;
}

console.log(kub(3));


const kub=(arg)=> {
  return arg ** 3;
}

console.log(kub(3));


2-masala:
function maxTwoNumber(arg1, arg2) {
  let max;
  if (arg1 > arg2) {
    max = arg1 ** 2;
  }

  if (arg2 > arg1) {
    max = arg2 ** 2;
  }
  return max;
}
console.log(maxTwoNumber(3, 7));


const maxTwoNumber=function(arg1, arg2) {
  let max;
  if (arg1 > arg2) {
    max = arg1 ** 2;
  }

  if (arg2 > arg1) {
    max = arg2 ** 2;
  }
  return max;
}
console.log(maxTwoNumber(3, 7));


const maxTwoNumber=(arg1, arg2) =>{
  let max;
  if (arg1 > arg2) {
    max = arg1 ** 2;
  }

  if (arg2 > arg1) {
    max = arg2 ** 2;
  }
  return max;
}
console.log(maxTwoNumber(3, 7));
3-masala:







7-masala:
function tub(number) {
  let number = +prompt("enter a number");
  for (let i = 2; i < number; i++) {
    let tub = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        tub = false;
        break;
      }
    }

    if (tub == true) {
      console.log(i);
    }
  }
}

const tub =function(number){
     let number = +prompt("enter a number");
  for (let i = 2; i < number; i++) {
    let tub = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        tub = false;
        break;
      }
    }

    if (tub == true) {
      console.log(i);
    }
  }
}

const tub =(number)=>{
     let number = +prompt("enter a number");
  for (let i = 2; i < number; i++) {
    let tub = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        tub = false;
        break;
      }
    }

    if (tub == true) {
      console.log(i);
    }
  }
}


 */
