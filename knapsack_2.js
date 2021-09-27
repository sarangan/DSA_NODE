const value = [60, 100, 120];
const weights = [10, 20, 30];
const total = 50;


function knapsack(n, wt){
  
  if(n === 0 || wt === 0 ){
    return 0;
  }
  else if( weights[n] > wt){
    return knapsack(n-1, wt);
  } else {
    const wIn = value[n-1] + knapsack(n - 1, wt - weights[n - 1]);
    const wOut = knapsack(n-1, wt);
    return Math.max(wIn, wOut);
  }
  
}


knapsack(3, total);
