function reverse(str){
  return str.split('').reverse().join('')
}

const s = reverse('Greetings!');
console.log(s);

function reverse(str){
  const rev = [];
  for(let i = 0, l = str.length; i < l; i++){
    rev.unshift(str[i])
  }
  
  return rev.join('')
}

const s = reverse('Greetings!');
console.log(s);
