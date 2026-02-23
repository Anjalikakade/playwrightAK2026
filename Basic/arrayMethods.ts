let ele:string[]=["apple","banana","mango","kevi"]
//push,pop
ele.unshift("cherry")  //["cherry",apple","banana","mango","kevi"]
let removed =ele.shift() //will return string or undefinded
console.log(removed) // cherry

//concat
let added = ele.concat("new")
console.log(added) // 
//slice extract element
let extract = ele.slice(1,3) // it will extract index one and 3-1 so index 2 element
console.log(extract) /// banana, mango
//spice will add only,remove only,both add and remove
//1.remove only
let deleted =ele.splice(1,2)  //it will remove two element from index 1
console.log("deleted : "+deleted) //banana,mango
console.log(ele)  // [ 'apple', 'kevi']
//2.added only
ele.splice(1,0,"pear","cherry")
console.log(ele) // [ 'apple', "pear","cherry",'kevi' ]
//3.removed and add
ele.splice(2,1,"pepsi","no")
console.log(ele) // [ 'apple', 'pear', 'pepsi', 'no', 'kevi' ]

//indexof - will return index if not match return -1
console.log(ele.indexOf("pepsi")) //2
console.log(ele.indexOf("yes")) // -1

//includes - will return true or flase is match
console.log(ele.includes("banana")) // false
console.log(ele.includes("no")) //true

//tostring

