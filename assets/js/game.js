// Robot name prompt
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log multiple values at once
console.log(playerName, playerAttack, playerHealth, playerMoney);

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (enemyHealth > 0) {
        //place fight function code block here . . .
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose");
     
    console.log(promptFight);

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    }

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. " 
    );
    

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
     else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );

    

    //check palyer's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died! ");

      // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }

    //if yes (true), leave fight
     if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye! ");
      window.alert(playerName + " has chosen to skip the fight! ");

      // subtract money from playerMoney for skipping 
      playerMoney = playerMoney - 2;
     // if no (false), ask question again by running fight() again
     }else  {
        fight();

      console.log(playerMoney);
       
    }
  }
   
  
};

    for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    
}