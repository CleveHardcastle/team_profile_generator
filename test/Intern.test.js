const Intern = require("../lib/Intern");

describe("intern class", () => {
  const intern = new Intern("John", 1, "test", "test");
  it("intern class takes a githublink", () => {
    expect(intern.school).not.toBe(undefined);
    expect(intern.school).not.toBe("");
    expect(intern.school).toEqual(expect.any(String));
  });
});
