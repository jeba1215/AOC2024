import { assert, assertEquals } from "@std/assert";
import { add, processInput, processInput2 } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function addTest2() {
  const input = 'mul(2,4)'
  assertEquals(processInput(input), 8);
})

// mul\((\d+)?,(\d+)?\)
Deno.test(function addTest2() {
  const input =   'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'
  assertEquals(processInput(input), 161);
})

Deno.test(function addTest3() {
  const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
  assertEquals(processInput2(input), 48);
})
