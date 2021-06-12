let str = 'apple'
console.log(str.split('').reverse().join(''));

 let obj = {};
    for(const c of str){
        obj[c] = (obj[c] || 0) + 1
    }

    const max = Math.max(...Object.values(obj));
    const s = Object.entries(obj).find(x => x[1] === max) || [];
    console.log(s[0]);
