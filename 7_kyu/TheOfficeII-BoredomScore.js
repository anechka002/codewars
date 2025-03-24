// Description:
// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// Solution:

function boredom(staff){
  const scores = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  }
  let sum = 0;

  for (const value in staff) {
    const department = staff[value];
    // console.log(`Получаем отдел сотрудника ${value} - ${department}`);
    // console.log('department: ', department)
    // console.log('scores: ', scores[department])
    if(scores[department] !== undefined){
      sum += scores[department];
    }
  }
  if (sum <= 80) {
    return 'kill me now'
  } else if (sum < 100) {
    return  'i can handle this'
  } else {
    return 'party time!!'
  }
}
console.log(boredom({
  tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about'
}))