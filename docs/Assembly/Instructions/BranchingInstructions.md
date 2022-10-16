---
title: Branching Instructions
parent: Instructions
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Branching allows the program to make decisions',
  Details:'A branch instruction is a decision point in the program. Based on some criteria, the code may continue executing normally, or branch elsewhere to change the flow'
},
{
  Concept:'Create control behaviors with branching',
  Details:'Behavior like looping and if/else can be created by branching'
}
]" />

::: details Terms
!!!include(TextSnippets/Assembly/Instructions_Terms.md)!!!
:::

## Introduction

The LC-3 has 1 command for branching (jumping to different lines of code). It can be used to create loops, if/else, and while loop behavior. This command is a decision point in the code. It will branch based on a register that remembers the sign of the previous instruction's result. 

If the previous instruction resulted in a negative value, a BRn instruction will branch. If the register was zero or positive, the branch would not occur and normal sequential execution continues.

In this section we will review the BR instruction and look at some simple example code.

## BR

### LC-3 ISA Format

<LC3Instruction opName="BR" :bitPattern="{OpCode:'0000', N: 'n', Z:'z',P:'p',PCOffset9:'000000000'}" :descriptions="[{OPCode:''},{N:'Negative Condition'},{Z:'Zero Condition'}, {P:'Positive Condition'}, {PCOffset9: 'Offset from current PC to branch'}]"  :examples="['BRn MyLabel1 ; If CC is in Negative Condition, branch to MyLabel1', 'BRz MyLabel2 ; If CC is in Zero Condition, branch to MyLabel2','BRp MyLabel3 ; If CC is in Positive Condition, branch to MyLabel3', 'BRnz MyLabel4 ; If CC is in Negative or Zero Condition, branch to MyLabel4']"/>

### State Machine

![BR Example](/images/AssemblyProgramming/Commands/StateMachine_BR.png)

During the Decode phase, the Control Unit will determine it needs to reference the CC register. It logically compares the CC with the Instructions bits [11:9]. If any instruction bits match the CC, the BEN internal register will be set to true. This will be used during Execute.

In the Execute phase, the BEN is checked. If true, the PC register will be modifies. The instruction's PCOffset9, bits [8:0] are added to the PC and the result written back into the PC

> Recall that the LC-3 Assembler will have calculated the PCOffset9, knowing that during the PC is incremented during Fetch. The value it calculates will be expecting the PC to already be referencing the next instruction in memory
>
> If you are trying to guess what Simulate will do when it executes a BR instruction, you must also factor in the PC was incremented during fetch

### Explanation

BR change the flow of an LC-3 program during execution. It is used to create behaviors like If/Else and While loops. Assembly languages typically do not have these instructions, but the code can flow like an If/Else or loop using BR.

#### Labels

!!!include(TextSnippets/LC3/Labels.md)!!!

#### PCOffset

The least-significant 9 bits of the BR command is a 9-bit PCOffset values. As described in the above Label section, the assembler converts the label into this PCOffset.

!!!include(TextSnippets/LC3/PCOffset.md)!!!

#### Condition Code Register

BR reacts to the Condition Code (CC) register, which is set by the previous ALU or Memory Load instruction. After one of these instructions completes, BR will change the program flow 

### Examples

Conditions can be grouped on a single BR instruction

| Instruction | Conditions to Branch                                   |
| ----------- | ------------------------------------------------------ |
| BRnz        | Branch is **CC** is *Negative* or *Zero*               |
| BRzp        | Branch is **CC** is *Zero* or *Positive*               |
| BRnzp       | Branch is **CC** is *Negative* or *Zero* or *Positive* |

> BRnzp is an *unconditional* branch, because it will always branch, regardless of the CC
>
>A shorthand for this is BR. The assembler will add the nzp for you

>***Condition Code Gotcha*** 
>
>When using multiple **CC** references with a **BR** instruction, they must appear in the *n-z-p* order
>
> e.g. **BRpz** will cause an assembler error. This must be coded as **BRzp** to assemble and run

**Simple Example**
![BR Example](/images/AssemblyProgramming/Commands/PCOffset9_Branch.png)

- **LOOP** label is declared at Memory Address/PC x3001
- **LOOP** label is references at x3002
- The **BR** instruction at PC x3002 will branch back up to x3001 if the **CC** is *zero*
- The **PCOffset9** is calculated for the BR instruction as follows:
    - **PC** will be x3003 when BR instruction is executing (*recall that the PC is incremented during the *Fetch* phase, so the PC will be referencing the next instruction at x3003*)
    - x3003 - x3001 = -2 (negative indicates the branch is back to a previous line)
    - -2<sub>10</sub> converted to 2's complement binary is 111111110<sub>2</sub>

### Gotchas

- When using multiple conditions, they must be in the order *nzp*. Swapping the order will cause an error when assembling. This is quirk of the assembler

## Conclusion

Branch instruction may or may not be *taken*, depending on the current value in the **Condition Code* register. The CC register is set each time ALU or Memory Load instruction execute. The CC from the previous instruction will be used by Branch instructions.

If/Else and looping behavior can be created using labels, a control value, and the BR instruction.