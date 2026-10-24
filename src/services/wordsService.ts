import { getRandomInt } from "../utils";

export function getRandomWord(words: string[]) {
  const randomInt = getRandomInt();
  return words[randomInt].toUpperCase();
}
