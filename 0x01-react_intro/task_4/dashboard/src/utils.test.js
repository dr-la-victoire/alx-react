import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns the correct current year", () => {
  expect(getFullYear()).toBe(2024);
});

test("returns the correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("the string for latest notification function", () => {
  expect(getLatestNotification()).toBe(
    "strong>Urgent requirement</strong> - complete by EOD"
  );
});
