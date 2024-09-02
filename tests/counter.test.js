// Counter.test.js
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../features/Counter.js";

test("Check that button exists within counter component", () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("increments counter on button click", () => {
  render(<Counter />);

  // Initial check to see if count is 0
  const countText = screen.getByText(/You clicked 0 times/i);
  expect(countText).toBeInTheDocument();

  // Simulate button click
  const buttonElement = screen.getByText(/Click me/i);
  fireEvent.click(buttonElement);

  // Check if count increments to 1
  const updatedCountText = screen.getByText(/You clicked 1 time/i);
  expect(updatedCountText).toBeInTheDocument();
});
