const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');
// Potions are part of player and enemy, hence not needed here


function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function() {
        // Enemies initialization
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'baseball bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));
        // first enemy on the array will battle the player
        this.currentEnemy = this.enemies[0];

        // Prompt the player
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destructure name from the prompt object
        .then(({ name }) => {
            this.player = new Player(name);

            // test the object creation
            //console.log(this.currentEnemy, this.player);
            this.startNewBattle()
        });

    };
  };

module.exports = Game;