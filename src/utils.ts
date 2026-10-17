export function getRandomInt() {
  return Math.floor(Math.random() * 7);
}

export function normalizeString(str: string) {
  return str.replace(/[^a-zñ]/gi, "").toUpperCase();
}
