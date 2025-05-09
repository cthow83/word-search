import Heading from "./Heading";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Heading UI", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the children as a heading", () => {
    render(<Heading>Test Title</Heading>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Test Title");
  });

  it("applies the styled component class", () => {
    render(<Heading>Styled Heading</Heading>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.className).toMatch(/sc-/); // styled-components class
  });
});
