const Employee = require("../lib/employee.js")

test("test getName works", () => {
    let testEmployee = new Employee("Bob")
    expect(testEmployee.name).toBe("Bob")
})