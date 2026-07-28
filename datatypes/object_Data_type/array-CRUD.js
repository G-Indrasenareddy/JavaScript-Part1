//create a array
let a = [10,20,30,40]

//read array
console.log(a)
//read array elements - using indexing
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4]) //output is undefined

//update array
a[0] = 101
a[1] = 102
console.log(a)

//Delete array
//2 methods = i) using array methods  ii)delete - keyword
delete a // ouput gets same non deleted array as it is mainly focuses on brower language so don't use delete     

console.log(a)
a.length = 0
console.log(a)