const inquirer = require("inquirer");
const chalk = require("chalk");


console.log("Hello!");

console.log(chalk.blue("Hello!"));

inquirer.prompt([
		
		{
			type: "list",
			name: "accept",
			message: chalk.red("welcome to the arena!"),
			choices: [chalk.green("OK"), chalk.yellow("Sure")],			
		},

	]).then(function (answers){

		console.log(answers.accept);

});


function character(name, str, agi, skill, background, weapon) {
	this.name = name;
	this.str = str;
	this.agi = agi;
	this.skill = skill;
	this.health = 5 + str * 2;
	this. fatigue = 5 + agi * 2;
	this.background = background;
	this.weapon = weapon; 
	this.attack = function (target) {
		target.health--;
	};
};

function addAttributeSkill(character) {
	if (character.str === 3) {
		character.bash = function (target) {
			target.health--;
		};
	} else if (character.agi === 3) {

	} else if (character.skill === 3) {

	} else {
		console.log("Error with character stats.");
	};
};


