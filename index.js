// To start, define a employee variable and assign it to an Object containing name and streetAddress keys; 
// you can use whatever values you like. Use literal syntax to create your Object. Various updates will be 
// applied to this variable (destructively and non-destructively) in this lab.

const employee = {
    name: "Sam", 
    streetAddress: "11 Broadway"
}

// Once you've initialized the employee Object, you'll need to create the following four functions:
// updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key 
// and a value. This function should not mutate the employee; it should return a new Object that has an 
// updated value for the key passed in. Hint: use the spread operator!

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    }
}


// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as 
// updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
        obj[key] = value
        return obj
}

// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It 
// should delete the property with that key from the employee Object. This should not mutate the 
// original employee Object; it should return a new Object that doesn't include the identified key-value pair. 
// Hint: use the spread operator!

function deleteFromEmployeeByKey(obj, key){
    const newobj = {...obj,}
    delete newobj[key]
    return newobj
}

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it 
// should mutate the employee Object.

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
