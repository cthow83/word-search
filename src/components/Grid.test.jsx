import Grid from "./Grid";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// The static letters array in the real component is 144 letters long
const GRID_SIZE = 144;

describe("Grid UI", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders a grid with 144 cells", () => {
    render(<Grid />);
    const cells = screen.getAllByRole("gridcell", { hidden: true });
    // fallback: if role is not set, fallback to div count
    if (cells.length === 0) {
      const fallbackCells = document.querySelectorAll("[class*='GridCell']");
      expect(fallbackCells.length).toBe(GRID_SIZE);
    } else {
      expect(cells.length).toBe(GRID_SIZE);
    }
  });

  it("renders each cell with a single uppercase letter", () => {
    render(<Grid />);
    const cellDivs = document.querySelectorAll(
      "div[style], div[role='gridcell']",
    );
    cellDivs.forEach((cell) => {
      expect(cell.textContent).toMatch(/^[A-Z]$/);
    });
  });
});
