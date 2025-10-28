import * as readline from 'readline';
import storyData from './story.json' with { type: 'json' };
import type { StoryData } from './types.ts';

const story: StoryData = storyData;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
      console.log(answer);
    });
  });
}

async function startGame() {
  let currentSceneKey = 'start';
  while (true) {
    const scene = story[currentSceneKey];

    // prints scene text
    // console.clear();
    console.log(scene?.text);
    console.log('\n' + '-'.repeat(20) + '\n');

    //checks if its the end

    if (scene?.end) {
      console.log('Thank you for playing!');
      break;
    }

    //if not the end, give choices

    if (scene?.choices) {
      scene.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice.option}`);
      });
      console.log('\n');
    }

    let validChoice = false;
    while (!validChoice) {
      const answer = await askQuestion(
        'What do you want to do? (Enter a number): '
      );
      const choiceIndex = parseInt(answer) - 1;

      if (scene?.choices && scene?.choices[choiceIndex]) {
        validChoice = true;
        currentSceneKey = scene.choices[choiceIndex].next;
      } else {
        console.log('Please choose a valid option. Try again');
      }
    }
  }

  rl.close();
}

startGame();
