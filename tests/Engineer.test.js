const Engineer = require("../lib/engineer.js")

test("test getName works", () => {
    let testEmployee = new Engineer("Bob")
    expect(testEmployee.name).toBe("Bob")
})