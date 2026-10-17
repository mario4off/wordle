import { getRandomInt } from "../utils";

export function getRandomWords(words: string[]) {
  const randomWords: string[] = [];

  while (randomWords.length < 6) {
    const randomInt = getRandomInt();
    const randomWord = words[randomInt];

    if (!randomWords.includes(randomWord)) {
      randomWords.push(randomWord);
    }
  }

  return randomWords;
}
