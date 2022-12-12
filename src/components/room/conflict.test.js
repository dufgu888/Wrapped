import { conflict1, conflict2, conflict3 } from "./conflict";

test("conflict test", () => {
  expect(conflict1(1, 1, 14)).toBe(false);
  expect(conflict2(14.4, 1, 1)).toBe(false);
  expect(conflict3(11.2, 1, -9)).toBe(false);
});
