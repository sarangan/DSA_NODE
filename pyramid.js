function pyramid(n) {
  for(let i = 1; i <= n; i++){
    const spaces = n - i;
    const char = (2 * i) - 1;
    console.log(' '.repeat(spaces) + '*'.repeat(char) + ' '.repeat(spaces));
  }
  
}

pyramid(3);
