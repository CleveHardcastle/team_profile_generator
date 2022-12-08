const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const engineer = new Engineer("John", 1, "test", "test");
  it("Engineer class takes a githublink", () => {
    expect(engineer.github).not.toBe(undefined);
    expect(engineer.github).not.toBe("");
    expect(engineer.github).toEqual(expect.any(String));
  });
});
