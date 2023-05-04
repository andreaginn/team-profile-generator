const Intern = require("../lib/intern.js")

test("test getName works", () => {
    let testEmployee = new Intern("Bob")
    expect(testEmployee.name).toBe("Bob")
})