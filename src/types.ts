interface Choice {
  option: string;
  next: string;
}

interface Scene {
  text: string;
  choices?: Choice[];
  end?: boolean;
}

export type StoryData = {
  [key: string]: Scene;
};
