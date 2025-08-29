import { describe, it, expect, vi } from "vitest";
import { generatePassword } from "./passwordGenerator";

describe("generatePassword", () => {
  it("should generate a password with correct format", () => {
    const password = generatePassword();

    expect(password).toMatch(/^[a-z][a-zA-Z]+[A-Z][a-z]+\d{4}[!?]$/);
  });

  it("should generate passwords with 4-digit numbers", () => {
    const password = generatePassword();
    const numberMatch = password.match(/\d{4}/);

    expect(numberMatch).toBeTruthy();
    expect(numberMatch![0]).toHaveLength(4);

    const number = parseInt(numberMatch![0]);
    expect(number).toBeGreaterThanOrEqual(1000);
    expect(number).toBeLessThanOrEqual(9999);
  });

  it("should end with a special character (! or ?)", () => {
    const password = generatePassword();

    expect(password).toMatch(/[!?]$/);
  });

  it("should generate different passwords on multiple calls", () => {
    const passwords = new Set();
    for (let i = 0; i < 100; i++) {
      passwords.add(generatePassword());
    }

    expect(passwords.size).toBeGreaterThan(90);
  });

  it("should generate passwords with consistent length ranges", () => {
    const passwords = Array.from({ length: 50 }, () => generatePassword());

    passwords.forEach((password) => {
      expect(password.length).toBeGreaterThan(10);
      expect(password.length).toBeLessThan(30);
    });
  });

  it("should use Math.random correctly", () => {
    const mathRandomSpy = vi.spyOn(Math, "random");
    mathRandomSpy.mockReturnValue(0.5);

    const password = generatePassword();

    expect(mathRandomSpy).toHaveBeenCalled();
    expect(password).toContain("5500");

    mathRandomSpy.mockRestore();
  });

  it("should handle edge cases of Math.random", () => {
    const mathRandomSpy = vi.spyOn(Math, "random");

    mathRandomSpy.mockReturnValue(0);
    const passwordMin = generatePassword();
    expect(passwordMin).toContain("1000");

    mathRandomSpy.mockReturnValue(0.9999);
    const passwordMax = generatePassword();
    expect(passwordMax).toContain("9999");

    mathRandomSpy.mockRestore();
  });
});
