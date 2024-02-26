// DESCRIPTION:
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// SOLUTION:

function sorter(textbooks) {
  const sort = textbooks.sort((a, b) => {
    if(a.toLowerCase() < b.toLowerCase()) {
      return -1
    }
    if(a.toLowerCase() > b.toLowerCase()) {
      return 1
    }
    return 0;
  });
  return sort
}
console.log(sorter(['Algebra', 'History', 'Geometry', 'English']));