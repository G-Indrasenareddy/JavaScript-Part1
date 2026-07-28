let emp = {
    'id':101,
    'name':'Rahul',
    //data & functionality as one entity
    'get_Details':function(){
        console.log("Displaying details")
    }
}

console.log(emp.name)
console.log(emp.get_Details) // [Function: get_Details]

//To Invoke the function
emp.get_Details() //Displaying details

emp.get_salary() //TypeError: emp.get_salary is not a function