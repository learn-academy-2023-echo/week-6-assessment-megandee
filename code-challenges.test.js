// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("nameCap", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(nameCap(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// nameCap
//   ✕ returns an array with a sentence about each person with their name capitalized (1 ms)
// ● nameCap › returns an array with a sentence about each person with their name capitalized
//   ReferenceError: nameCap is not defined
//  PASS  ./code-challenges.test.js
// nameCap
//  ✓ returns an array with a sentence about each person with their name capitalized

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Pseudo code: 
//       input: array of obj, 
  // [
  //       { name: "ford prefect", occupation: "a hitchhiker" },
  //       { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  //       { name: "arthur dent", occupation: "a radio employee" }
  // ]
//      output: an array with a sentence and each persons name capitalized
//      ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is
//      a radio employee."]
//     process: create function
//              set parameter as array
//              make an empty container to push through
//              iteration, for loop to access the object
//              need to Cap first lett of first/last names, index?
//              accessing the string w/in the obj w/in the arr
//              need to change str to arr to access both names, .split(" ")
//              will use .slice() to keep rest of letters lowercased
//              concatenation using '+', learned this style from Bao :)


const nameCap = (array) => {
  let newArr = []
  for(let i = 0; i < array.length; i++){
    let fullNameStr = array[i].name //stringifys
    let fullNameArr = fullNameStr.split(" ") // ['ford', 'prefect']
    let firstName = fullNameArr[0]
    let lastName = fullNameArr[1]
    
    let capFirstName = firstName[0].toUpperCase() + firstName.slice(1)
    let capLastName = lastName[0].toUpperCase() + lastName.slice(1)
    
    newArr.push(capFirstName + " " + capLastName + " is " + array[i].occupation + ".")
  }
  return newArr
}




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remNum3", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remNum3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remNum3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// remNum3
//   ✕ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// ● remNum3 › returns an array of only the REMAINDERS of the numbers when divided by 3
//   ReferenceError: remNum3 is not defined
//  PASS  ./code-challenges.test.js
  // remNum3
  // ✓ returns an array of only the REMAINDERS of the numbers when divided by 3

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Pseudo code:
//       input: mixed data array, 
//              [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//              [5, "Hola", 43, -34, "greetings", true]  
//      output: arr of only nums and their remainders / 3
//              [ 2, 0, -1, 0 ] 
//              [ 2, 1, -1 ]
//     process: create function
//              set param as array
//              for loop or filter? (will use both)
//              filter first for subset 
//              iteration - looking for numbers only , typeof("") to detemine datatype ?
//              need to set condition on value being number ===
//              for loop next
//              set let, need empty container to 
//              div numbers by 3, use % to get remainder
//               

const remNum3 = (array) => {
  let numbersOnlyArr = array.filter((value) => typeof value === "number") // [23, 45, -10, 0]
// 
  let remArr = []
  for(let i = 0; i < numbersOnlyArr.length; i++){
    let remainder = numbersOnlyArr[i] % 3
    remArr.push(remainder)
  }
  return remArr
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("numSumCubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(numSumCubed(cubeAndSum1)).toEqual(99)
    expect(numSumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// numSumCubed
//   ✕ returns the sum of all the numbers cubed (1 ms)
// ● numSumCubed › returns the sum of all the numbers cubed
//   ReferenceError: numSumCubed is not defined
//  PASS  ./code-challenges.test.js
//   numSumCubed
// ✓ returns the sum of all the numbers cubed

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
// Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Pseudo code:
//       input: array of numbers [2, 3, 4], [0, 5, 10]
//      output: sum of all numbers ** 3 as number:    99 , 1125
//     process: create function, sumCubed
//              set param for array
//              creat empty container, in this case number 0, to push through
//              iteration
//              for loop
//              add numbers together [9] , [15]
//              to then cubed [9 ** 3] , [15 ** 3]

const numSumCubed = (array) => {
  let number = 0
  for (let i = 0; i < array.length; i++){
    number += array[i] ** 3
  }
  return number
}
