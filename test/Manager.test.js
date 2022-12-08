const Manager = require("../lib/Manager");

describe("manager class", () => {
  const manager = new Manager("John", 1, "test", 1);
  it("manager class takes a githublink", () => {
    expect(manager.officeNumber).not.toBe(undefined);
    expect(manager.officeNumber).not.toBe("");
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
});
