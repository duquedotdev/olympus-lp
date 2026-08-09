import { describe, it, expect } from "vitest";
import { normalizeEmail, cleanCode, newCode } from "../server/validate.ts";

describe("normalizeEmail", () => {
  it("lowercases and trims valid emails", () => {
    expect(normalizeEmail("  Zeus@Olympus.IO ")).toBe("zeus@olympus.io");
  });
  it("rejects malformed input", () => {
    for (const bad of ["", "no-at", "a@b", "a b@c.io", 42, null, undefined]) {
      expect(normalizeEmail(bad)).toBeNull();
    }
  });
});

describe("cleanCode", () => {
  it("accepts alphanumeric codes of 6-16 chars", () => {
    expect(cleanCode("abc123")).toBe("abc123");
  });
  it("rejects wrong shapes", () => {
    for (const bad of ["short", "way-too-long-code-xxxx", "has space", 1, null]) {
      expect(cleanCode(bad)).toBeNull();
    }
  });
});

describe("newCode", () => {
  it("generates 8-char lowercase alphanumeric codes", () => {
    expect(newCode()).toMatch(/^[a-z0-9]{8}$/);
  });
});
