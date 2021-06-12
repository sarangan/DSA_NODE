function anagrams(stringA, stringB) {
    const sA = stringA.replace(/[^\w]/g, '').toLowerCase();
    const sB = stringB.replace(/[^\w]/g, '').toLowerCase();
    
    return sA.split('').every(ch => sB.includes(ch)) && sA.length === sB.length;
}

anagrams('rail safety', 'fairy tales');
