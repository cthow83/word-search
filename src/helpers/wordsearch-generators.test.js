import { describe, it, expect } from "vitest";
import { wordList, generateRandomLetters } from "./wordsearch-generators";

describe("wordsearch-generators", () => {
  it("generateRandomLetters returns an array of 144 uppercase letters", () => {
    const result = generateRandomLetters();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(144);
    result.forEach((letter) => {
      expect(typeof letter).toBe("string");
      expect(letter).toMatch(/^[A-Z]$/);
    });
  });

  it("generateRandomLetters returns different results on multiple calls (randomness)", () => {
    const first = generateRandomLetters().join("");
    const second = generateRandomLetters().join("");
    // Not guaranteed, but highly likely
    expect(first).not.toBe(second);
  });
  it("wordList returns the expected list of words", () => {
    const words = wordList();
    expect(Array.isArray(words)).toBe(true);
    expect(words).toEqual([
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
    ]);
  });
});
