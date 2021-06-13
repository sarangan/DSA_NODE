function vowels(str) {
    const s = str.toLowerCase();
    const vo = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let c of s){
      if(vo.includes(c)){
        count += 1;
      }
    }
  return count;
}

vowels('Hi There!');
