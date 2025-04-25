/**
 * Generates an array of 144 random uppercase letters (A-Z).
 *
 * @returns {string[]} An array containing 144 randomly generated uppercase letters.
 */
const generateRandomLetters = () => {
  const letters = [];
  for (let i = 0; i < 144; i++) {
    const randomLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26),
    );
    letters.push(randomLetter);
  }
  return letters;
};

export default generateRandomLetters;
