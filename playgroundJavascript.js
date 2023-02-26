//First javascript program playground code
const announceThatIAmDoingImportantWork = () => {
    console.log('I am doing very important work.');
}


const busy = announceThatIAmDoingImportantWork;
console.log('This is the output on announceThatIamDoingImportantWork:')
console.log(busy());






//Second javascript program playground code
const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () =>{
    console.log('This runs?')
    return 'I\'m being invoked ny the higher order function';
}

console.log('This is the output for the higherOrder function:')
console.log(higherOrderFunc(anotherFunc));





//Third javascript program playground code 
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results'; 
  }
  
  console.log('This is the output of checkConsistentOuput:')
  console.log(checkConsistentOutput(addTwo, 1));




  //fourth javascript playground code
  const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
  console.log('This is the output for fruits.forEach method and a version where we use a arrow function:')

  // Iterate over fruits below
  fruits.forEach(function(fruit){
    console.log(`I want to eat a ${fruit}`)
  });

  //This code creates a space
  console.log(' ')
  
  
  //Here's we use a arrow function
  fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`))
  
  
  //This is a arrow function we created to mess around with arrow functions
  const sayMyName = name => {
     console.log(name)
  }
  
  sayMyName('U')