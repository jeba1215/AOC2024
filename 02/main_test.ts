import { assertEquals } from "@std/assert";
import { countSafeLines, isLineSafe } from "./main.ts";

const lines: number[][] = [
  [7,6,4,2,1], // 0
  [1,2,7,8,9], // 1
  [9,7,6,2,1], // 2
  [1,3,2,4,5], // 3
  [8,6,4,4,1], // 4
  [1,3,6,7,9], // 5
  [1,2,3,4,5,6,7,8,52], // 6
  [1,2,3,4,5,6,7,8,52,52], // 7
  [52,2,3,4,5,6,7,8,9] // 8
]

Deno.test("test valid line", () => {
  const line = lines[0]
  assertEquals(isLineSafe(line), true)
})

Deno.test("test valid line", () => {
  const line = lines[1]
  assertEquals(isLineSafe(line), false)
})

Deno.test("test valid line", () => {
  const line = lines[2]
  assertEquals(isLineSafe(line), false)
})

Deno.test("test valid line", () => {
  const line = lines[3]
  assertEquals(isLineSafe(line), true)
})

Deno.test("test valid line", () => {
  const line = lines[4]
  assertEquals(isLineSafe(line), true)
})

Deno.test("test valid line", () => {
  const line = lines[5]
  assertEquals(isLineSafe(line), true)
})

Deno.test("test valid line", () => {
  const line = lines[6]
  assertEquals(isLineSafe(line), true)
})

Deno.test("test valid line", () => {
  const line = lines[7]
  assertEquals(isLineSafe(line), false)
})

Deno.test("test valid line", () => {
  const line = lines[8]
  assertEquals(isLineSafe(line), true)
})

Deno.test("test valid line count", () => {
  assertEquals(countSafeLines(lines), 6)
})