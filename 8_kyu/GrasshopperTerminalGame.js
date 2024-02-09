// DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// SOLUTION:

function combat(health, damage) {
  let res = health - damage;
  if (res <= 0) {
    return 0
  }
  return res
}