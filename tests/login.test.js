// LoginForm.test.js
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../features/Login.js";

test("renders LoginForm component", () => {
  render(<LoginForm onSubmit={jest.fn()} />);

  // Check if the username and password inputs and the login button are rendered
  const usernameInput = screen.getByLabelText(/Username/i);
  const passwordInput = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByText(/Login/i);

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("calls onSubmit with username and password when submitted", () => {
  const mockOnSubmit = jest.fn();
  render(<LoginForm onSubmit={mockOnSubmit} />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "password123" },
  });

  // Simulate form submission
  fireEvent.click(screen.getByText(/Login/i));

  // Check if onSubmit was called with the correct values
  expect(mockOnSubmit).toHaveBeenCalledWith({
    username: "testuser",
    password: "password123",
  });
});
