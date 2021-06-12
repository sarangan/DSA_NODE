function anagrams(stringA, stringB) {
    const sA = stringA.replace(/[^\w]/g, '').toLowerCase();
    const sB = stringB.replace(/[^\w]/g, '').toLowerCase();
    
    return sA.split('').every(ch => sB.charAt(ch) !== -1) && sA.length === sB.length;
}

anagrams('rail safety', 'fairy tales');
