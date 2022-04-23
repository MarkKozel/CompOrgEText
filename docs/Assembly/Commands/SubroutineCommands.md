---
title: Subroutines Commands
parent: Commands
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Software in much more useful if it can interacts with users and other systems',
  Details:'Accepting input and providing outputs to/from a user or other system allows software to solve more complicated problems.'
}
]" />

## Introduction

Subroutine instructions in LC-3 provide a capability similar to Java's function calls

``` java
public class example {

	public static int addOne(int number) {
	  return number++;
	}

  public static void main(String[] args) {
    int num = addOne(5); //num will be 6
  }
}
```

Inside the main function, a call to the ```addOne``` subroutine, passing **5** in as a parameter.

In ```addOne``` the parameter is incremented and returns back to the main program.

Java handles moving the parameter date to the subroutine, switching to the subroutine code, and returning the results back to the main program

In LC-3, we can perform the same behavior, but, like most things in assembly programming, it is a litter more *hands-on*.

The main mechanism in *calling a subroutine* is manipulating the PC. Recall the PC controls the next instruction to execute. Without manipulation, the next line wil always be execute. But, by change it, another instruction can be executed next.

::: details The Program Counter register
!!!include(TextSnippets/LC3/PC.md)!!!
:::

## JMP
Unconditional Jump

### LC-3 ISA Format

<LC3Instruction1 opName="JMP" :info={ {name:'OpCode', bits:1100, desc:'The OpCode'},  {name:'unused', bits:000, desc:'not used'},  {name:'BaseR', bits:000, desc:'Register containing the jump address'}} :examples= [ 'JSRR R4 ; Starts executing code at the memory in R4']/>


<LC3Instruction opName="JMP" :bitPattern="{OpCode:'1100', unused:'000',BaseR:'000', unused: '00000'}" :descriptions="[{OPCode:''},{unused: 'not used'},{BaseR: 'Register containing the jump address'}]"  :examples="['JMP R3 ; Jump to the address in R3']"/>

### Explanation

The BaseR register is pre-loaded with a 16-bit address of the location to jump to. When the ```JMP``` instruction is executed, the PC is loaded with the value in the BaseR. The next instruction cycle will load the instruction at the address contained in the PC.

**Unconditional** for ```JMP``` indicates the instruction does not expect to return back to section of code that performed the ```JMP```. We will see with ```JSR``` and ```JSRR``` that they provide a means to *return* to the location where the jump occurred.

### Examples

``` {3}
.ORIG x3000
  LD R0, MyJumpPoint
  JMP R0
  HALT

  .FILL MyJumpPoint x0400
.END
```
R0 will be loaded with the value x0400. This address was loaded because there is some code the user wants to execute at that memory location

``` {3}
.ORIG x3000
  LD R6, MyJumpPoint1
  JMP R0
  HALT
  
  .FILL MyJumpPoint1 xFFE0
.END
```
R6 will be loaded with the value xFFE0. This address was loaded because there is some code the user wants to execute at that memory location

### Gotchas

R7 register is not to be used in **any** subroutine calls. It is used by Simulate to store the address *jumped from* so execution switch back to the user code. This is effectively like use as the java ```return``` instruction. In fact, the next LC-3 instruction is RET.

## RET

### LC-3 ISA Format
<LC3Instruction opName="RET" :bitPattern="{OpCode:'1100', unused:'000',BaseR:'111', unused: '00000'}" :descriptions="[{OPCode:''},{unused: 'not used'},{BaseR: 'Register containing the return address'}]"  :examples="['RET ; Return back from a subroutine call']"/>

### Explanation

The BaseR register is pre-loaded with a 16-bit address of the location to return to. When the ```RET``` instruction is executed, the PC is loaded with the value in the BaseR. The next instruction cycle will load the instruction at the address contained in the PC.

BaseR is hard-coded to **111**. This is used as a register address, so it always uses R7 as the BaseR.

R7 is used by Simulate for subroutine instructions. A such, it should not be modified when using the instructions.

::: details Did You Notice...
```JMP``` and ```RET``` have the same *OpCode*?

In fact, they are the same instruction, with one (1) change...BaseR is hard-coded to R7 for ```RET```

When source code with a ```JMP R2``` instruction, the assembler will generate the 16-bit instruction, setting the BaseR to *010* (for R2)

When source code with a ```RET``` instruction, the assembler will generate the 16-bit instruction, setting the BaseR to *111* (referencing R7, even though it is not present in the source instruction)

So, you couple replace all ```RET``` source instruction with ```JMP R7``` and the assembled object code would be identical. ```RET``` is an instruction in LC-3 solely to make the source code easier to understand by humans.

:::

### Examples

``` {3}
.ORIG x0400
  ADD R3, R2, R1 ; Combine values in R1 and R2
  RET            ; return back to the main program
.END
```

### Gotchas

## JSR
Jump Subroutine

### LC-3 ISA Format
<LC3Instruction opName="JSR" :bitPattern="{OpCode:'0100', Mode:'1', PCOffset11: '00000000000'}" :descriptions="[{OPCode:''},{Mode: '0 for PCOffset Mode, 1 for Relative Mode'},{PCOffset: 'Offset from current PC to jump'}]"  :examples="['JSR MySub ; Starts executing code at the memory location of MySub']"/>

### Explanation
JSR will always jump to the location. CC register is not used to decide to jump or not.

Uses an 11-bit PC Offset to calculate a memory address. It can jump -1024 to +1023 memory location before the current PC.

At the end of the JSR's Fetch-Decode-Execute cycle, R7 is set to the current PC. This is the address used by the **RET** instruction to *return* back to the original program.

After the JSR instruction executes, the instructions at the PCOffset address begin executing.

#### Differences between JSR and BR

- CC Register
    - BR checked the CC register to decide to branch or not
    - JSR *always* jumps
- PC Offset
    - BR used a 9-bit PC Offset. It can jump -256 to +255 memory location before the current PC
    - JSR used a 11-bit PC Offset. It can jump -1024 to +1023 memory location before the current PC
- Returning when done
    - BR does not have a built-in way to return back to where the code branched
    - JSR sets R7 to the current PC before jumping. Using the **RET** instruction at the end of a subroutine will return to the instruction *after* the original jump

### Examples

@[code lang=asm{4, 8-11}](.vuepress/public/examples/Assembly/Commands/JSR1.asm)

Lines 9 and 10 apply the 2's complement algorithm to the value in R1, storing the result in R0

Line 11 is an unconditional jump to the address in R7. See [RET Instruction](#ret)

Line 3 loads a value into R1. R1 is a *parameter* that the subroutine expect to have been loaded

Line 4 calls the subroutine. After the subroutine returns back to the main program, R0 will contain the 2's complement of the value in R1

### Gotchas

R7 cannot be used in the main program or the subroutine. It is used by Simulate to *remember* the address to return to when the subroutine finished (by calling the **RET** instruction)

## JSRR
Jump Subroutine Relative

### LC-3 ISA Format
<LC3Instruction opName="JSRR" :bitPattern="{OpCode:'0100', Mode:'0', unused1:'00', BaseR:'000', unused2: '000000'}" :descriptions="[{OPCode:''},{Mode: '0 for PCOffset Mode, 1 for Relative Mode'},{BaseR: 'Register containing 16-bit address to jump to'}]"  :examples="['JSRR R4 ; Starts executing code at the memory in R4']"/>

### Explanation

JSRR works like JSR, but uses a 16-bit register value to jump. JSRR can jump to any memory location in the Simulate memory space.

Note that the OpCode is the same for JSR and JSRR, only the Mode bit is different.

JSRR also sets R7 for the RET instruction and has the same differences to BR as JSR.

### Examples

**Call built-in subroutine**

@[code lang=asm{4, 8-11}](.vuepress/public/examples/Assembly/Commands/JSRR1.asm)

Lines 10-12 are the subroutine to be called

Line 4 loaded the address of the first line of the subroutine into R4

Line 5 uses the value in R4 to jump to the subroutine

**Call subroutine loaded separately**

@[code lang=asm{4-5, 10, 14-21}](.vuepress/public/examples/Assembly/Commands/JSRR2.asm)

Lines 14-21 are a separate assembly file assembled and loaded into memory location x5000

Line 10 contains the address of the subroutine

Line 4 loaded the address of the subroutine into R4

Line 5 uses the value in R4 to jump to the subroutine

### Gotchas

## Conclusion