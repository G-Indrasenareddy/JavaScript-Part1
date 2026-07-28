//CREATE JS Object

let emp = {
    "eid" : 101,
    "ename" : 'Rahul',
    "esal" : 1000
}

// read or Aceess using the Object.property

console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.eloca) //Undefined

//Update
emp.ename = 'Rahul gandhi'
console.log(emp)

emp.eloc = 'Bangalore'
console.log(emp)  //{ eid: 101, ename: 'Rahul gandhi', esal: 1000, eloc: 'Bangalore' }

//Delete
delete emp.eid
console.log(emp)