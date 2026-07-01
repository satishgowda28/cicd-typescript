import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("AUTH: Get API Key", () => {
  test("authorization empty", () => {
    const key = getAPIKey({});
    expect(key).toBeNull;
  });
  test("authorization incorrect format", () => {
    const key = getAPIKey({ authorization: "test key" });
    expect(key).toBeNull;
  });
  test("authorization correct key", () => {
    const key = getAPIKey({ authorization: "ApiKey key123" });
    expect(key).toBe("key123");
  });
});
