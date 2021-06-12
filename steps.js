function steps(n) {
  let s = '';
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(j <= i ){
        s += '#';
      }
      else {
         s += '';
      }
    }
    s += '\n';
  }
  
  return s;
}

const s = steps(1);
console.log(s);
