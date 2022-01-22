---
title: LC3 Subroutine Commands
shorttitle: Create modular code blocks, just like in Java (kinda)

tags: []
---
# {{ $frontmatter.title }}
**{{ $frontmatter.shorttitle }}**


<KeyConcepts :ConceptArray = "[
  {
    Concept: 'TRAP Routines are Built-In',
    Details:'Code for all TRAP routines are loaded into the Simulate environment each time it is started or reinitilaized'
  },
  {
    Concept: 'LC-3 uses Vercor/Jump Table for calling TRAP code',
    Details:'The address (i.e. TRAP x22) is the address int the Vector/Jump Table'
  },
  {
    Concept: 'The Vector/Jump table contains code addresses',
    Details:'Each Vector/Jump tablr address contains the address of the start of the associated TRAP routine code'
  }
  ]" />

## Introduction

The ability to write small, single-purpose blocks of code that can be used repeatably is a minimal requirement for modern programming languages. It is unlikely that new programming language would succeed today without methods/subroutines

Advantages of using subroutines include:

- Reuse - can be used many times in a program without needing to copy/paste code in multiple places in main program
- Testing - once a subroutine is tested, it can be

## LC-3's Subroutine Opcodes

<LC3Instruction opName="JSR - Jump Subroutine" :bitPattern="{OpCode:'0101', Mode: '1', PCOffset11 :'-----------'}" :descriptions="[{OPCode:'Bits [15:12]'},{Mode:'Bits [11:11] (1 for JSR, 0 for JSRR)'},{PCOffset11:'Bits 10:0 11-bit offset PC-realtive jump - Range is -1024 to 1023'}]" :examples="['JSR mySub ; Jump to mySub label']" operation='Stores current PC into R7. PC is set to (PC + PCOffset11), then completes the FDE cycle. The effect it is to jump to a location within -1024 - 1034 memory locations from current PC'/>

<LC3Instruction opName="JSRR - Jump Subroutine Register" :bitPattern="{OpCode:'0101', Mode: '0', Unused1:'00',BaseR :'---', Unused2:'0000000'}" :descriptions="[{OPCode:'Bits [15:12]'},{Mode:'Bits [11:11]  (1 for JSR, 0 for JSRR)'},{BaseR:'Bits [8:6] Register containing 16-bit address of subroutine starting point'}]" :examples="['JSRR R2 ; Jump to the address in R2']" operation='Stores current PC into R7. Loads 16-bit value in BaseR (register) into the PC, then completes the FDE cycle. The effect it is to jump to ANY location in the LC-3 memory space'/>

<LC3Instruction opName="JMP - Jump to Address" :bitPattern="{OpCode:'1100', Unused1:'000',Reg :'---', Unused2:'000000'}" :descriptions="[{OPCode:'Bits [15:12]'},{Reg:'Bits [8:6] Register containing address to jump (return) to'},{BaseR:'Bits [8:6] Register containing 16-bit address of subroutine starting point'}]" :examples="['JMP R2; Jump to the address in R2']" operation='Loads 16-bit address from BaseR into PC, then completes the FDE cycle. This is an unconditional jump, in this context means it does not save the current PC (like JSR/JSRR)'/>

<LC3Instruction opName="RET - Return from Subroutine" :bitPattern="{OpCode:'1100', Unused1:'000',Reg :'111', Unused2:'000000'}" :descriptions="[{OPCode:'Bits [15:12]'},{Reg:'Bits [8:6] Register containing address to jump (return) to. Harcoded as R7 '},{BaseR:'Bits [8:6] Register containing 16-bit address of subroutine starting point'}]" :examples="['RET; Jump to the address in R7']" operation='Loads 16-bit address from R7 into PC, then completes the FDE cycle. This is an unconditional jump, in this context means it does not save the current PC (like JSR/JSRR)'/>

:::tip JMP and RET
Note that these 2 instructions are almost completely identical. The only difference is JMP can use any register address (BaseR), while RET is hard-coded to use R7 (BaseR of 111)

So ```JMP R7``` will function idential to ```RET```, as long as R7 was previous loaded to a valid return address
:::

## Anatomy of a Subroutine

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
### Subroutine Name/Label

Start the first line of a sub with a label. It should help make the purpose of the sub obvious

> And, of course, block comments at the top of sub will make the purpose and function clear

```
; Adds 1 to current value in R0
AddOne ADD R0, R0, #1
       RET
```

Now we can use this sub in our main program

```
.ORIG x3000

ADD R0, R0, #7 ; Put 7 into R0
JSR AddOne     ; Call AddOne

; Adds 1 to current value in R0
AddOne ADD R0, R0, #1
       RET

HALT
.END

```
### Save and Restore Registers

We have already stored a register into a memory location as part of assignments where the result of some calculation was to be saved in memory

There is another reason to store registers in memory...to save the state of your code when jumping to a TRAP Routine or a sub function. In both cases, R0-R7 are the only registers for the entire LC-3 Simulate environment. It another function uses a register your code was using, your data will be overwritten. Saving and restoring registers is essential to prevent data loss

<QuestionMC question="The LC-3 instruction for storing a register R5 to a memory location labeled 'Result' is..." answer='C' AChoice="STI R5, #12" BChoice="ST Result, R5" CChoice="ST R5, Result" DChoice="R5 .BLKW 1" rightAnswerFeedback="The simplest PC-relative Data Movement instruction" wrongAnswerFeedback="ST R5, Result, the PC-relative Data Movement instruction is the correct answer"/>

**Does the Main Program or Subroutine save registers**
The *caller* code (your code) or the *callee* code (TRAP or Sub) can both be responsible for preventing register data loss

It would be a waste of clock-cycles and memory for both *caller* and *callee* to perform this work
The *caller* code could, but it would have to save all 8 registers becuase it does not know which registers the *callee* code will be using

It is more practice for the *callee* code to save only the registers it knows it will be using, then restore only those registers before returning to the caller code

::: thinkaboutit Can the Caller accuratly save all 8 registers?
The Caller would need to save all 8 register (since it does not know what the TRAP or Sub is going to modify)

However, during the FDE Cycle of the ```JSR``` line, R7 will be changed (to current PC). So, the R7 saved before the JSR is executed will be different than R7 during the FDE cycle for the JSR line

If the TRAP/Sub make its own call to another TRAP or Sub, the state of R7 would further change, likely leading to a loss of information needed to correclty return to the main program
:::

Finally, the *caller* code is kept smaller by not having save/restore all 8 registers

<QuestionTF question="It is the Callee's responsiblity to save registers that it changes" answer='true' rightAnswerFeedback="The callee is the only code that knows what it changes" wrongAnswerFeedback="The caller does not know what registers the callee will use"/>

### R7 - The Way Back Home

During the instruction cycle for `TRAP`, `JSR`, and `JSRR`, R7 is set to the current PC (The next instruction in our caller code) during the FDE cycle

When `RET` is called by the callee code, the PC will be loaded with the address in R7, which will return the PC back to the caller's next instruction

The callee code is expected to save/restore R7 always. Should the TRAP/User Function call another TRAP/User Function, the way back to the original caller code will be lost

<QuestionTF question="R7 is not important, thus does not need to be saved" answer='false' rightAnswerFeedback="It's the 'way back home' to our code that called the subroutine" wrongAnswerFeedback="It is used by the RET instuction in the subroutine to return back to our calling code"/>

### Callee storing registers (Example)

The following Subroutine, _mySub_ will use R1 and R2 internally. As the Callee, it is resonsible for saving R1 and R2 before using those registers. Once complete, it will restore both registers, then return to tha Caller

```
mySub   ST R1, SaveR1 ;save R1
        ST R2, SaveR2 ;save R2
        ST R7, SaveR7 ;save R7

        ;code that changes R1 & R2
        AND R1, R1, #17
        ADD R2, R1, #-12

        LD R1, SaveR1 ;restore R1
        LD R2, SaveR2 ;restore R2
        LD R7, SaveR7 ;restore R7
        RET           ;Return back to caller with R1 & R2 restored

;Allocate 1 memory slots for storing registers
SaveR1  .BLKW 1
SaveR2  .BLKW 1
SaveR5  .BLKW 1
```

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
addOne  AND R1, R1, #0 ; Clear R1 in case there wa sjunk in it
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

<QuestionTF question="A Sub can be designed to get data from caller using memory locations, rather than Registers" answer='true' rightAnswerFeedback="However, they may need a register to pass in the address (an example is PUTS using the address in R0). Or, the could both agree on a hard-coded adderss, which makes modification difficult" wrongAnswerFeedback="They could, but it is a little complicated"/>

## Conclusion

Subroutines make reusuable modules that can be called from a main program as needed

R7 is used in subroutines to hold the address to return to once the sub is complete. R7 is set during the FDE cycle of TRAP and Jump instructions

A subroutine must save all registers it uses. Then, restore them before returning

A subroutine ends with the ```RET``` instruction, returning execution to the memory location sored in R7. Hopefully, this is the location of the next line of code in the main (caller) code

Because LC-3 lacks variable names, caller and callee code must agree on which register(s) are used to pass data in and receive data back out of the sub