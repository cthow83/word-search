/**
 * Generates an array of 144 random uppercase letters (A-Z).
 *
 * @returns {string[]} An array containing 144 randomly generated uppercase letters.
 */
export const generateRandomLetters = () => {
  const letters = [];
  for (let i = 0; i < 144; i++) {
    const randomLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26),
    );
    letters.push(randomLetter);
  }
  return letters;
};

export function generateWordSearch(words, gridSize = 10) {
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1],
  ];

  function canPlace(word, x, y, dx, dy) {
    for (let i = 0; i < word.length; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;
      if (nx < 0 || nx >= gridSize || ny < 0 || ny >= gridSize) return false;
      if (grid[ny][nx] !== "" && grid[ny][nx] !== word[i]) return false;
    }
    return true;
  }

  function placeWord(word) {
    for (let attempt = 0; attempt < 100; attempt++) {
      const [dx, dy] =
        directions[Math.floor(Math.random() * directions.length)];
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      if (canPlace(word, x, y, dx, dy)) {
        for (let i = 0; i < word.length; i++) {
          const nx = x + dx * i;
          const ny = y + dy * i;
          grid[ny][nx] = word[i];
        }
        return true;
      }
    }
    return false;
  }

  words.forEach((word) => placeWord(word.toUpperCase()));

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === "") {
        grid[y][x] = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
  }
  return grid.flat();
}

export const wordList = () => {
  const words = [
    "adoration",
    "admiration",
    "coronation",
    "detonation",
    "observation",
    "location",
    "generation",
    "exploration",
    "combination",
    "illustration",
  ];
  return words;
};
