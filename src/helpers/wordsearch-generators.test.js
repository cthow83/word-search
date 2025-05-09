import { describe, it, expect } from "vitest";
import {
  generateRandomLetters,
  generateStaticLetters,
  wordList,
} from "./wordsearch-generators";

describe("wordsearch-generators", () => {
  it("generateRandomLetters returns 144 uppercase letters", () => {
    const letters = generateRandomLetters();
    expect(Array.isArray(letters)).toBe(true);
    expect(letters).toHaveLength(144);
    letters.forEach((l) => {
      expect(l).toMatch(/^[A-Z]$/);
    });
  });

  it("generateStaticLetters returns the expected static array of 144 letters", () => {
    const letters = generateStaticLetters();
    expect(Array.isArray(letters)).toBe(true);
    expect(letters).toHaveLength(144);
    letters.forEach((l) => {
      expect(l).toMatch(/^[A-Z]$/);
    });
  });

  it("wordList returns the expected list of words", () => {
    const words = wordList();
    expect(Array.isArray(words)).toBe(true);
    expect(words).toEqual([
      "BUNNY",
      "DUCKLINGS",
      "BONNET",
      "HOTCROSSBUNS",
      "DAFFODILS",
      "EASTEREGG",
      "HYACINTH",
      "LAMBS",
      "IRIS",
      "JELLYBEANS",
    ]);
  });
});
