import { conflict } from "./conflict";

test("conflict test", () => {
  expect(conflict(1, 1, 1)).toBe(false);
  expect(conflict(13, 1, 1)).toBe(false);
  expect(conflict(11.2, 1, 1)).toBe(false);
  expect(conflict(1, 1.1, 1)).toBe(false);
});
