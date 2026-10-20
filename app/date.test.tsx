import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import DateComponent from "./date";

test("formats the date in a readable way", () => {
  render(<DateComponent dateString="2026-10-19T12:00:00Z" />);
  expect(screen.getByText("October 19, 2026")).toBeDefined();
});
