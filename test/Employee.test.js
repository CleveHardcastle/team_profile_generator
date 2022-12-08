const Employee = require("../lib/Employee");

describe("Employee class", () => {
  const employee = new Employee("John", 1, "test@email.com");
  it("Employee class takes a name", () => {
    expect(employee.name).not.toBe(undefined);
    expect(employee.name).not.toBe("");
    expect(employee.name).toEqual(expect.any(String));
  });
  it("Employee class takes an id", () => {
    expect(employee.id).not.toBe(undefined);
    expect(employee.id).not.toBe("");
    expect(employee.id).toEqual(expect.any(Number));
  });
  it("Employee class takes an email", () => {
    expect(employee.email).not.toBe(undefined);
    expect(employee.email).not.toBe("");
    expect(employee.email).toEqual(expect.any(String));
  });
});
