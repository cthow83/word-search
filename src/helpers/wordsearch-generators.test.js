import { describe, it, expect } from "vitest";
import { wordList } from "./wordsearch-generators";

describe("wordsearch-generators", () => {
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
