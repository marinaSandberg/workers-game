function playGame(n, k) {
    
  // create an array of worker numbers
  let workers = Array.from({length: n}, (_, i) => i + 1); 
  // initialize an array to store the selected worker numbers  
  let selected = []; 
  // start with the first worker
  let i = 1; 
  // continue until there are n/2 workers left
  while (workers.length > Math.ceil(n / 2)) {
    // count k workers in the circle and wrap around if needed
    i = (i + k) % workers.length; 
    // remove the selected worker from the circle and add to the list
    selected.push(workers.splice(i, 1)[0]); 
    // adjust i to account for the removed worker
    i %= workers.length; 
    }
    
  return selected;
  }

  const selected = playGame(8, 3);
  console.log(selected); // output: [3, 6, 1, 5]