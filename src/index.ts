import * as readline from 'readline';
import storyData from './story.json' with { type: 'json' };
import type { StoryData } from './types.ts';

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
};

const story: StoryData = storyData;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function startGame() {
  let currentSceneKey = 'start';
  while (true) {
    const scene = story[currentSceneKey];

    // prints scene text
    console.clear();
    console.log(`${colors.cyan}${scene?.text}${colors.reset}`);
    console.log(
      `\n${colors.magenta}${'═'.repeat(40)}${colors.reset}\n`
    );

    //checks if its the end

    if (scene?.end) {
      console.log(`${colors.green}** Thank you for playing! **${colors.reset}\n`);
      break;
    }

    //if not the end, give choices

    if (scene?.choices) {
      scene.choices.forEach((choice, index) => {
        console.log(
          `${colors.yellow}${index + 1}. ${choice.option}${colors.reset}`);
      });
      console.log('\n');
    }

    let validChoice = false;
    while (!validChoice) {
      const answer = await askQuestion(
         `${colors.bright}What do you want to do? (Enter a number): ${colors.reset}`
      );
      const numAnwser = Number(answer);
      const choiceIndex = numAnwser - 1;

      if (
        !isNaN(numAnwser) && Number.isInteger(numAnwser) && 
        scene?.choices && scene?.choices[choiceIndex] && numAnwser > 0) {
        validChoice = true;
        currentSceneKey = scene.choices[choiceIndex].next;
      } else {
        console.log(
          `\n${colors.red}That's not a valid option. Please try again.${colors.reset}\n`
        );
      }
    }
  }

  rl.close();
}

startGame();
