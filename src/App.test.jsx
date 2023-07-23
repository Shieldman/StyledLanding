/**
 * @vitest-environment jsdom
 */

import { describe, test } from "vitest";
import { render, screen,fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("Should be rendered the correct Header elements", () => {
    render(<App />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByAltText("contact")).toBeInTheDocument();
  });

  test("Should be rendered the correct Main elements", () => {
    render(<App />);
    expect(screen.getByAltText("pokeball")).toBeInTheDocument();
    expect(screen.getByText("Instructions")).toBeInTheDocument();
    expect(
      screen.getByText("To capture a new pokemon launch the Pokeball!")
    ).toBeInTheDocument();
    expect(screen.getByText("Launch Pokeball")).toBeInTheDocument();
  });

  test("Should be rendered the correct Footer elements", () => {
    render(<App />);
    expect(
      screen.getByText("All rights reserved to Arnau || 2023")
    ).toBeInTheDocument();
  });

  test("The button calls to the API and brings a new pokemon", () => {
    render(<App />);

    const button = screen.getByText("Launch Pokeball");
    fireEvent.click(button);
    screen.findByRole("heading", { level: 2 });
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    
  });
});
