interface employeeConfig {
    firstname?: string;
    lastname?: string;
    code?: number;
    age?: number;
    salary?: number;
    bonus?: boolean;
}

function createEmployee(config:employeeConfig): {firstname: string, lastname: string, code:number, age:number, salary:number, bonus:boolean,totalBonus: number} {
    let newEmployee = {firstname: 'Default firstname' ,lastname: 'Default lastname', code:12345, age: 0, salary: 15000, bonus:true, totalBonus:1000}

    if(config.firstname) {
        newEmployee.firstname = config.firstname
    }
    if(config.lastname) {
        newEmployee.lastname = config.lastname
    }
    if(config.code) {
        newEmployee.code = config.code
    }
    if(config.age) {
        newEmployee.age = config.age
    }
    if(config.salary) {
        newEmployee.salary = config.salary
    }
    if (config.salary) {
        newEmployee.totalBonus = config.salary * 2.5;
    }
    return newEmployee
}
let myEmployee = createEmployee({firstname: "Thamonwan",lastname:"Asawawongmethee", code:12345, age:19, salary:15000, bonus: true})
console.log(`myEmployee`,myEmployee)