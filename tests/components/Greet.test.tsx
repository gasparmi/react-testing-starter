// import { it, expect, describe } from "vitest"; // MOVED TO vitest.config.ts
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
// import "@testing-library/jest-dom/vitest"; // MOVED TO setup.ts, and this file is imported to vitest.config.ts

describe("Greet", () => {
  it(" should render Hello with the name when name is provided", () => {
    // This renders into a virtual DOM, with the help of "jsdom"
    render(<Greet name="Miguel" />);

    // This enables the STATE of the DOM in test:UI in Console tab, the actual tree-like HTML structure
    // screen.debug();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/miguel/i);
  });

  it(" should render login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
