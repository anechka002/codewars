// DESCRIPTION:
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// SOLUTION:

function getDrinkByProfession(param){
  
  let res = param.toUpperCase();
  console.log(res)

  if (res == 'Jabroni'.toUpperCase()) {
    return 'Patron Tequila'
  } else if (res === 'School Counselor'.toUpperCase()) {
    return 'Anything with Alcohol'
  } else if (res  === 'Programmer'.toUpperCase()) {
    return 'Hipster Craft Beer'
  } else if (res  === 'Bike Gang Member'.toUpperCase()) {
    return 'Moonshine'
  } else if (res  === 'Politician'.toUpperCase()) {
    return 'Your tax dollars'
  } else if (res === 'Rapper'.toUpperCase()) {
    return 'Cristal'
  } else {
    return 'Beer'
  }
}