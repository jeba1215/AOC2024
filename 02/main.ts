export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const textrows = Deno.readTextFileSync(Deno.args[0]).split("\n").filter(Boolean)
  const lines = textrows.map(row => row.split(" ").map(Number))
  
  console.log(lines);
  
  console.log(lines.length);
  
  console.log(countSafeLines(lines))
}

export function isLineSafe2(line: number[]): boolean {  
  line = [...line]
  let isDecreasing = line[0] > line[line.length - 1]

  let failed = false
  let i = 0

  for(i = 0; i < line.length - 1; i++) {
    const [current, next] = [line[i], line[i + 1]]
    if(!validateLine(current, next, isDecreasing)){
      failed = true
      break
    }
  }

  if(failed) {
    line.splice(i, 1)
    isDecreasing = line[0] > line[1]
  
    for(i = 0; i < line.length - 1; i++) {
      const [current, prev] = [line[i], line[i + 1]]
      if(!validateLine(current, prev, isDecreasing)) return false
    }
  }

  return true
}

export function isLineSafe(line: number[]): boolean {
  line = [...line]
  let isDecreasing = line[0] > line[line.length - 1]

  let failed = false
  let i = 0

  for(i = 0; i < line.length - 1; i++) {
    const [current, next] = [line[i], line[i + 1]]
    if(!validateLine(current, next, isDecreasing)){
      failed = true
      break
    }
  }

  if(failed) {    
    for(let i = 0; i <= line.length - 1; i++) {
      const testLine = [...line]
      testLine.splice(i, 1)

      let isDecreasing = testLine[0] > testLine[1]

      let success = true
      
      for(let j = 0; j < testLine.length - 1; j++) {
        const [current, prev] = [testLine[j], testLine[j + 1]]
        if(!validateLine(current, prev, isDecreasing)) success = false
      }

      if(success) return true
    }

    return false
  }

  return true
}

export function countSafeLines(lines: number[][]): number {
  const boolLines = lines.map(isLineSafe)
  const trueLines = boolLines.filter(Boolean).length
  return trueLines
} 

function validateLine(current: number, next: number, isDecreasing: boolean): boolean {
  if(current === next) return false

  if(isDecreasing && current < next) return false
  if(!isDecreasing && current > next) return false

  const diff = Math.abs(current - next)
  if(diff < 1 || diff > 3) return false

  return true
}