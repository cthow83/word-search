import WordList from "./WordList";
import * as wordsearchGenerators from "../helpers/wordsearch-generators";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("WordList UI", () => {
  const mockWords = ["apple", "banana", "cherry"];

  beforeEach(() => {
    vi.spyOn(wordsearchGenerators, "wordList").mockReturnValue(mockWords);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it("renders the heading", () => {
    render(<WordList />);
    expect(screen.getByText(/word list/i)).toBeInTheDocument();
  });

  it("renders all words in the list", () => {
    render(<WordList />);
    mockWords.forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument();
    });
  });

  it("renders the correct number of list items", () => {
    render(<WordList />);
    expect(screen.getAllByRole("listitem")).toHaveLength(mockWords.length);
  });
});
