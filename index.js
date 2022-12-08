const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

function appMenu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Managers Name?",
          name: "managerName",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the managers ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers Email?",
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is the mangers office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOffice
        );
        teamMembers.push(manager);
        createTeam();
      });
    function createTeam() {
      inquirer
        .prompt([
          {
            type: "list",
            choices: [
              "Engineer",
              "Intern",
              "I don't want to add anymore members",
            ],
            message: "What team member would you like to create?",
            name: "choice",
          },
        ])
        .then((data) => {
          let userChoice = data.choice;
          switch (userChoice) {
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
            case "I don't want to add anymore members":
              buildTeam();
              break;
          }
        });
    }
    function addEngineer() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the Engineers Name?",
            name: "engineerName",
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is the enigneers ID?",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer Email?",
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineers GitHub?",
          },
        ])
        .then((answers) => {
          const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGjithub
          );
          teamMembers.push(engineer);
          createTeam();
        });
    }
    function addIntern() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the interns Name?",
            name: "internName",
          },
          {
            type: "input",
            name: "internId",
            message: "What is the interns ID?",
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern Email?",
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is the interns school?",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
          );
          teamMembers.push(intern);
          createTeam();
        });
    }
  }
  function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), "utf-8");
  }

  createManager();
}

appMenu();
