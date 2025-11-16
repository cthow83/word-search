import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import Buttons from "./Buttons";

describe("Buttons", () => {
  const defaultProps = {
    reloadGrid: vi.fn(),
    setBackgroundColor: vi.fn(),
    setColorIndex: vi.fn(),
    colorIndex: 0,
    swapFont: vi.fn(),
    useDyslexicFont: false,
  };

  afterEach(() => {
    cleanup();
  });

  it("renders all buttons", () => {
    render(<Buttons {...defaultProps} />);
    expect(screen.getByText(/Shuffle/i)).toBeInTheDocument();
    expect(screen.getByText(/Change Background Color/i)).toBeInTheDocument();
    expect(screen.getByText(/Use OpenDyslexic Font/i)).toBeInTheDocument();
  });

  it("calls reloadGrid when Shuffle is clicked", () => {
    render(<Buttons {...defaultProps} />);
    fireEvent.click(screen.getByText("Shuffle"));
    expect(defaultProps.reloadGrid).toHaveBeenCalled();
  });

  it("calls setBackgroundColor and setColorIndex when Change Background Color is clicked", () => {
    render(<Buttons {...defaultProps} />);
    fireEvent.click(screen.getByText(/Change Background Color/i));
    expect(defaultProps.setBackgroundColor).toHaveBeenCalled();
    expect(defaultProps.setColorIndex).toHaveBeenCalled();
  });

  it("calls swapFont when SwapFontButton is clicked", () => {
    render(<Buttons {...defaultProps} />);
    fireEvent.click(screen.getByText(/Use OpenDyslexic Font/i));
    expect(defaultProps.swapFont).toHaveBeenCalled();
  });

  it("shows correct label when useDyslexicFont is true", () => {
    render(<Buttons {...defaultProps} useDyslexicFont={true} />);
    expect(screen.getByText(/Use Default Font/i)).toBeInTheDocument();
  });
});
