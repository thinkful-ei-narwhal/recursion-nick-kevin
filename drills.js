// Drill 1 ------------------------------------------------------
let sheepCounter = (sheep) => {
  if(sheep < 1) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${sheep}: Another sheep jumps over the fence`);
  return sheepCounter(sheep -1 );
};

console.log(sheepCounter(5));

// Drill 2 ------------------------------------------------------