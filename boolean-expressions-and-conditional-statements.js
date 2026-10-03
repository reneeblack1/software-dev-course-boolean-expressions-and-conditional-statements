/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasCompass = false;

console.log("You wake up in a dark forest. Two paths lie ahead: one leads to the mountains and the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?").trim().toLowerCase();

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("In the mountains, you find a cave. There are two paths: one leads 'up' and one goes 'down'.");
  const caveChoice = readline.question("Do you go 'up' or 'down'?")
  if (caveChoice === "up") {
    console.log("You climb higher and discover a lookout point. From here, you can see the entire village.");
  } else if (caveChoice === "down") {
    console.log("You descend into the cave and find a compass.");
    const takeCompass = readline.question("Do you take it? (yes/no)")

    if (takeCompass === "yes") {
      hasCompass = true;
      console.log("You take the compass and continue your journey.");
    } else {
      hasCompass = false;
      console.log("You leave the compass behind.");
    }

    console.log("You leave the cave, but it is now nighttime.");

    if (hasTorch && hasCompass) {
      console.log("With your torch and compass, you continue on your way and make it home safely.");
    } else {
      console.log("Without both a torch and a compass, you go back into the cave and stay there until morning.");
    }
  } else {
    console.log("You hesitate too long and the cave starts to crumble. You turn back.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("Your adventure ends here. Thanks for playing!");