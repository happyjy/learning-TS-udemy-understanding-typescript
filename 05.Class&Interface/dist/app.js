"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee("JYoon");
accounting.addEmployee("Bono");
accounting.describe();
accounting.name = "NEW NAME";
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map