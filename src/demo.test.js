import { expect, test } from "bun:test";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

test("dummy test assertion", () => {
  expect(true).toBe(true);
});
