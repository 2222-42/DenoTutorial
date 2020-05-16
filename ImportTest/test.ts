import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("t1", function () {
  assertEquals("hello", "hello");
});

Deno.test("t2", function () {
  assertEquals("world", "world");
});