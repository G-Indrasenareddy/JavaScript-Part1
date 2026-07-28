let emp = {
    'id' : 101,
    'name' : 'Rahul',
    'sal' : 45000,
    'loc' : 'Bangalore'
}

//printing object values
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal)

for(prop in emp){
    // console.log(emp.prop)// undefined printed 3 times
    // console.log("GE") //3 times printed
    console.log(emp[prop]) // correct way iteration
}