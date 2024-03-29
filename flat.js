const arr = [1, 2, [3, 4, [5, 6, [7,8]]]];

function flatDeep(arr, deep = 0){
  if(deep === 0){
    return arr.reduce((acc, val) => acc.concat(val), []);
  }
  return arr.reduce((acc, val) => {
      if(Array.isArray(val)){
        return acc.concat(flatDeep(val, deep - 1));
      }
    return acc.concat(val);
  }, []);
}
const s = flatDeep(arr, 4);
console.log(s)


// function flatDeep(arr, deep = 0){
// const stack = [...arr];
//   const res = [];
  
//   while(stack.length) {
//     const s = stack.shift();
//     if(Array.isArray(s)){
//       stack.unshift(...s);
//     }else {
//       res.push(s)
//     }
//   }
  
//   return res;
  
// }
