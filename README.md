# CLI: Choose Your Own Adventure

> A classic "Choose Your Own Adventure"  game that runs entirely in your command line interface (CLI). It's built with TypeScript and Node.js.

The story follows a character who is unexpectedly transported to a fantasy world and must navigate their new life, starting with choosing a class, exploring a city, and undertaking their first adventure.

## Technology

* **TypeScript**
* **Node.js**
* **ts-node** (for running TypeScript files directly)

## 🚀 How to Run

1.  **Clone the repository** (or ensure you have the project files).

2.  **Install dependencies**:
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```

3.  **Run the game**:
    ```bash
    npx ts-node src/index.ts
    ```

The game will start, and you can make choices by typing the number corresponding to your desired option and pressing `Enter`.

## 📁 Project Structure

* `/src`
    * `index.ts`: The main game engine. It contains all the logic for displaying scenes, processing user input, and advancing the game state.
    * `story.ts`: The complete story data, exported as a TypeScript module. All scenes, text, and choices are defined here.
    * `types.ts`: Contains the shared TypeScript `interface` and `type` definitions (like `Scene`, `Choice`, `StoryData`) used across the project.
* `.gitignore`: Tells Git which files to ignore (like `node_modules` and compiled code).
* `package.json`: Manages project dependencies and scripts.
* `tsconfig.json`: The TypeScript compiler configuration.
