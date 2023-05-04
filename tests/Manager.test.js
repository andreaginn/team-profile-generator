const Manager = require("../lib/manager.js")

test("test getName works", () => {
    let testEmployee = new Manager("Bob")
    expect(testEmployee.name).toBe("Bob")
})