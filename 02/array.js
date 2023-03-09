var words = ["a",'b','c'];
var nums = [1,2,3];
console.log(words.pop())
console.log(words.push('d'), words);

console.log(words.join("-"));
console.log(words.join("&&"));
console.log(words);
console.log(words.concat(nums));

console.log(words.unshift('z'));
console.log(words);
console.log(words.splice(0,2));
console.log(words);


words.forEach((elem,idx,words)=>{
    console.log(elem, idx, words);
})

let dd = words.map((elem,idx,words)=>{
    console.log(elem,idx,words)
    return 'hi';
})
console.log('dd', dd);


let cc = words.filter((elem,idx,words)=>{
    console.log(elem,idx,words);

    return true;
}).map((elem,idx,ori)=>{
    console.log('원본', ori)
    return elem+10;
})
console.log(cc)
