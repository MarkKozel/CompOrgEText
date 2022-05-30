---
title: Subroutines Instructions
parent: Instructions
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
  {
    Concept: 'Subroutines are like Java functions',
    Details:'They are small, self-contained code segments that perform a simple operation. They can take in data and send results back'
  }, 
  {
    Concept: 'Main program and subroutines share the same registers',
    Details:'LC-3 subroutines do not pass in parameters. The are written to expect the main program to pre-load one or more registers with data before calling. If there is an result to return, it is also placed ina register that the main program uses after returning'
  }
]" />

## Introduction
The ability to write small, single-purpose blocks of code that can be used repeatably is a minimal requirement for modern programming languages. It is unlikely that new programming language would succeed today without methods/subroutines

Advantages of using subroutines include:

- Reuse - can be used many times in a program without needing to copy/paste code in multiple places in main program
- Testing - once a subroutine is tested, it can be

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

In LC-3, assembly can perform the same behavior, but, like most things in assembly, it is a litter more *hands-on*.

The main mechanism in *calling a subroutine* is manipulating the PC. Recall the PC controls the next instruction to execute. Without manipulation, the next line wil always be execute. But, by change it, another instruction can be executed next.

::: details The Program Counter register
!!!include(TextSnippets/LC3/PC.md)!!!
:::

### Anatomy of a Subroutine

For the most part, an LC-3 subroutine is regular LC-3 code, with a couple main requirements:

1. Subroutines include a label on the first line
    - This label is the *name* of the sub
    - The assembler will determine the address of the first line of the sub, and replaces offest values in lines that *call* the sub
1. They start by saving all registers they will modify while executing
    - Subs will need to allocate memory to store the contents of these registers
1. They also restore those registers after completing execution
    - Subs will restore the contents of these registers saves at the beginning
1. Finally, subs end with ```RET``` to return back to the calling code
    - Actually, since the PC was incremented just before jumping, the code will return to the line after the jump

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

So, you can replace all ```RET``` source instruction with ```JMP R7``` and the assembled object code would be identical. ```RET``` is an instruction in LC-3 solely to make the source code easier to understand by humans.

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

## Save and Restore Registers

We have already stored a register into a memory location as part of assignments where the result of some calculation was to be saved in memory

There is another reason to store registers in memory...to save the state of your code when jumping to a TRAP Routine or a sub function. In both cases, R0-R7 are the only registers for the entire LC-3 Simulate environment. It another function uses a register your code was using, your data will be overwritten. Saving and restoring registers is essential to prevent data loss

<QuestionMC question="The LC-3 instruction for storing a register R5 to a memory location labeled 'Result' is..." answer='C' AChoice="STI R5, #12" BChoice="ST Result, R5" CChoice="ST R5, Result" DChoice="R5 .BLKW 1" rightAnswerFeedback="The simplest PC-relative Data Movement instruction" wrongAnswerFeedback="ST R5, Result, the PC-relative Data Movement instruction is the correct answer"/>

**Does the Main Program or Subroutine save registers**
The *caller* code (your code) or the *callee* code (TRAP or Sub) can both be responsible for preventing register data loss

It would be a waste of clock-cycles and memory for both *caller* and *callee* to perform this work
The *caller* code could, but it would have to save all 8 registers because it does not know which registers the *callee* code will be using

It is more practice for the *callee* code to save only the registers it knows it will be using, then restore only those registers before returning to the caller code

::: considerit Can the Caller accurately save all 8 registers?
The Caller would need to save all 8 register (since it does not know what the TRAP or Sub is going to modify)

However, during the FDE Cycle of the ```JSR``` line, R7 will be changed (to current PC). So, the R7 saved before the JSR is executed will be different than R7 during the FDE cycle for the JSR line

If the TRAP/Sub make its own call to another TRAP or Sub, the state of R7 would further change, likely leading to a loss of information needed to correctly return to the main program
:::

Finally, the *caller* code is kept smaller by not having save/restore all 8 registers

<QuestionTF question="It is the Callee's responsibility to save registers that it changes" answer='true' rightAnswerFeedback="The callee is the only code that knows what it changes" wrongAnswerFeedback="The caller does not know what registers the callee will use"/>

### R7 - The Way Back Home

During the instruction cycle for `TRAP`, `JSR`, and `JSRR`, R7 is set to the current PC (The next instruction in our caller code) during the FDE cycle

When `RET` is called by the callee code, the PC will be loaded with the address in R7, which will return the PC back to the caller's next instruction

The callee code is expected to save/restore R7 always. Should the TRAP/User Function call another TRAP/User Function, the way back to the original caller code will be lost

<QuestionTF question="R7 is not important, thus does not need to be saved" answer='false' rightAnswerFeedback="It's the 'way back home' to our code that called the subroutine" wrongAnswerFeedback="It is used by the RET instruction in the subroutine to return back to our calling code"/>

### Callee storing registers (Example)

The following Subroutine, _mySub_ will use R1 and R2 internally. As the Callee, it is responsible for saving R1 and R2 before using those registers. Once complete, it will restore both registers, then return to tha Caller

@[code lang=asm{4-5, 10, 14-21}](.vuepress/public/examples/Assembly/Commands/CalleeStorage.asm)

## Java vs LC-3 Subroutines

Java example of a call to a user-defined method (subroutine)
In this example, main() defines a variable x, then passes **a copy** of it to the method _addOne()_. _addOne()_ does something to a copied variable, then passed the result back to the main program

```java
public static void main(String[] args){
    int x = 2;
    int y = addOne(x);
}

public int addOne(int value){
    return value + 1;
}
```

In LC-3, the code sets R0. It then jumps to _addOne_ label (subroutine name). \*addOne code adds 1 to the value in R0, and stores it in R1. Control is returned to the main code for further execution

```
.ORIG x3000

main    ADD R0, R0, #2  ; Set 2 in R0
        JSR addOne      ; Call subroutine 'addOne'

;Adds 1 to value in R0 and stores in R1
;   Caller sets R0 with a value before calling
;   Sub will add 1 to R0 and store in R1
addOne  AND R1, R1, #0 ; Clear R1 in case there was junk in it
        ADD R1, R0, #1 ; R1 = R0 + 1
        RET

.END
HALT
```

:::tip Main difference between Java and LC-3 Subroutines
**Variable Name**

Java manages data/values for the code. Variable are created with user-defined names, then the remaining code references values using those names

LC-3's primary variable stores are Registers (R0-R7). It is left to the programmer to remember what each register contains and why

**Pass by Value**

Java makes a copy of primitive data types (like _int_) when passing to a method

LC-3 only has 1 set of registers. Any change to a register in a subroutine remains when it returns

**Return Value**

Java methods return allows the calling code to capture the result in a separate variable name

LC-3, only having 1 set of registers, forces the main and subroutine to pre-agree on which register contains the parameter and which register will contain the _return_ value
:::

<QuestionTF question="A Sub can be designed to get data from caller using memory locations, rather than Registers" answer='true' rightAnswerFeedback="However, they may need a register to pass in the address (an example is PUTS using the address in R0). Or, the could both agree on a hard-coded address, which makes modification difficult" wrongAnswerFeedback="They could, but it is a little complicated"/>

## Conclusion
Subroutines make reusable modules that can be called from a main program as needed

R7 is used in subroutines to hold the address to return to once the sub is complete. R7 is set during the FDE cycle of TRAP and Jump instructions

A subroutine must save all registers it uses. Then, restore them before returning

A subroutine ends with the ```RET``` instruction, returning execution to the memory location sorted in R7. Hopefully, this is the location of the next line of code in the main (caller) code

Because LC-3 lacks variable names, caller and callee code must agree on which register(s) are used to pass data in and receive data back out of the sub