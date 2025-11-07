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

export const generateStaticLetters = () => {
  const letters = [
    "N",
    "L",
    "A",
    "M",
    "B",
    "S",
    "X",
    "F",
    "K",
    "K",
    "L",
    "R",
    "I",
    "T",
    "J",
    "E",
    "L",
    "L",
    "Y",
    "B",
    "E",
    "A",
    "N",
    "S",
    "T",
    "D",
    "U",
    "C",
    "K",
    "L",
    "I",
    "N",
    "G",
    "S",
    "U",
    "C",
    "H",
    "O",
    "T",
    "C",
    "R",
    "O",
    "S",
    "S",
    "B",
    "U",
    "N",
    "S",
    "B",
    "G",
    "D",
    "A",
    "F",
    "F",
    "O",
    "D",
    "I",
    "L",
    "S",
    "O",
    "P",
    "U",
    "M",
    "P",
    "H",
    "Y",
    "A",
    "C",
    "I",
    "N",
    "T",
    "H",
    "G",
    "W",
    "N",
    "G",
    "V",
    "C",
    "X",
    "D",
    "Z",
    "K",
    "C",
    "Z",
    "B",
    "O",
    "N",
    "N",
    "E",
    "T",
    "I",
    "H",
    "Y",
    "R",
    "Z",
    "X",
    "X",
    "A",
    "Z",
    "F",
    "Y",
    "K",
    "K",
    "L",
    "E",
    "G",
    "J",
    "Z",
    "V",
    "N",
    "Y",
    "P",
    "D",
    "N",
    "R",
    "Y",
    "X",
    "M",
    "W",
    "X",
    "L",
    "A",
    "Y",
    "W",
    "O",
    "I",
    "R",
    "I",
    "S",
    "G",
    "G",
    "D",
    "C",
    "T",
    "E",
    "A",
    "S",
    "T",
    "E",
    "R",
    "E",
    "G",
    "G",
    "M",
  ];
  return letters;
};

export const wordList = () => {
  const words = [
    "Information",
    "Sensation",
    "Preparation",
    "Vibration",
    "Decoration",
    "Donation",
    "Duration",
    "Registration",
    "Population",
    "Determination",
  ];
  return words;
};
