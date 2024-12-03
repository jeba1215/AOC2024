export function add(a: number, b: number): number {
  return a + b;
}

const pattern = /mul\((\d+)?,(\d+)?\)/g
const pattern2 = /(mul\((\d+),(\d+)\)|do\(\)|don't\(\)).*?/g


export const processInput = (input: string): number => {
  const matches = input.matchAll(pattern)
  let result = 0

  if(!matches) {
    return 0
  }

  for (const match of matches) {
    const [full, a, b] = match
    result += parseInt(a) * parseInt(b)
  }
  
  return result
}

export const processInput2 = (input: string): number => {
  const matches = input.matchAll(pattern2)
  let result = 0

  if(!matches) {
    return 0
  }

  let enabled = true

  for (const match of matches) {
    const [full, a, b, c] = match
    if(full === "do()") {
      enabled = true
      continue
    }

    if(full === "don't()") {
      enabled = false
      continue
    }

    if(!enabled) {
      continue
    }

    result += parseInt(b) * parseInt(c)
  }
  
  return result
}


// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const input = Deno.readTextFileSync(Deno.args[0] || './input.txt')
  console.log(processInput2(input))
}