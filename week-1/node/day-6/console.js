// Start CPU profiling with a label
console.profile('Heavy Loop Profile');

// Start a simple timer too (for quick reference)
console.time('loopTimer');

for (let i = 0; i < 1e6; i++) {
  Math.sqrt(i); // Simulate heavy CPU task
}

// Stop the timer
console.timeEnd('loopTimer');

// Stop CPU profiling
console.profileEnd('Heavy Loop Profile');
