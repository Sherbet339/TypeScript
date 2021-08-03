"use strict";
function createEmployee(config) {
    var newEmployee = { firstname: 'Default firstname', lastname: 'Default lastname', code: 12345, age: 0, salary: 15000, bonus: true};
    if (config.firstname) {
        newEmployee.firstname = config.firstname;
    }
    if (config.lastname) {
        newEmployee.lastname = config.lastname;
    }
    if (config.code) {
        newEmployee.code = config.code;
    }
    if (config.age) {
        newEmployee.age = config.age;
    }
    if (config.salary) {
        newEmployee.salary = config.salary;
    }
    if (config.salary) {
        newEmployee.bonus = config.salary * 2.5;
    }
    return newEmployee;
}
var myEmployee = createEmployee({ firstname: "Thamonwan", lastname: "Asawawongmethee", code: 12345, age: 19, salary: 15000, bonus: true });
console.log("myEmployee", myEmployee);
