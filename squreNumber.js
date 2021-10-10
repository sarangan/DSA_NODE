


function howManySquares(n){
  
  if(n === 1){
    return 1;
  }
  
  if(n === 0){
    return 0;
  }
  
  if(n < 0){
    return Number.MAX_VALUE;
  }

  let i = 1;
  let ans = Number.MAX_VALUE;;
  while((i ** 2) < n){
    // console.log(i);
    i += 1;
    ans = Math.min(ans, 1 + howManySquares(n - (i ** 2)))
  }
  
  return ans;
  
  
}

const s  = howManySquares(28);

console.log(s)
