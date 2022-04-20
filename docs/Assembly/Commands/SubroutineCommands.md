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

### LC-3 ISA Format
<LC3Instruction opName="TRAP" :bitPattern="{OpCode:'1111', unused:'0000', trapvect8: '00000000'}" :descriptions="[{OPCode:''},{unused: 'not used'},{trapvect8: 'Address or Pseudonym of Trap Routine'}]"  :examples="['TRAP x22 ; run PUTS trap routine', 'PUTS ; run PUTS trap routine using pseudonym']"/>

### Explanation

### Examples

``` {2}
LEA R0, MyString
PUTS
```
After loading into R0 the *Effective Address* of the string to print, PUTS is called to do the printing

PUTS is a pseudonym for TRAP x22. The assembler to product the same OpCode and Operands for PUTS and TRAP x22

``` {2}
LEA R0, MyString
TRAP x22
```
After loading into R0 the *Effective Address* of the string to print, TRAP x22 is called to do the printing. This runs the same routine as PUTS

### Gotchas

## JSRR

### LC-3 ISA Format
<LC3Instruction opName="TRAP" :bitPattern="{OpCode:'1111', unused:'0000', trapvect8: '00000000'}" :descriptions="[{OPCode:''},{unused: 'not used'},{trapvect8: 'Address or Pseudonym of Trap Routine'}]"  :examples="['TRAP x22 ; run PUTS trap routine', 'PUTS ; run PUTS trap routine using pseudonym']"/>

### Explanation

### Examples

``` {2}
LEA R0, MyString
PUTS
```
After loading into R0 the *Effective Address* of the string to print, PUTS is called to do the printing

PUTS is a pseudonym for TRAP x22. The assembler to product the same OpCode and Operands for PUTS and TRAP x22

``` {2}
LEA R0, MyString
TRAP x22
```
After loading into R0 the *Effective Address* of the string to print, TRAP x22 is called to do the printing. This runs the same routine as PUTS

### Gotchas

## Conclusion