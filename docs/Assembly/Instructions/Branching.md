---
title: Branching Instructions
parent: Instructions
description: 
pageClass: Topic
tags: []
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
import QuestionTF from '../../.vitepress/components/QuestionTF.vue'
import LC3Instruction from '../../.vitepress/components/LC3Instruction.vue'
</script>

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
<!--@include: @/TextSnippets/Assembly/Instructions_Terms.md-->

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

<!--@include: @/TextSnippets/LC3/Labels.md-->

#### PCOffset

The least-significant 9 bits of the BR command is a 9-bit PCOffset values. As described in the above Label section, the assembler converts the label into this PCOffset.

<!--@include: @/TextSnippets/LC3/PCOffset.md-->

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

**Unconditional Branch Example**
![BR Unconditional Example](/images/AssemblyProgramming/Commands/BR_Example.png)

<QuestionTF question="-5 gets stored into Result when this code runs" answer='false' rightAnswerFeedback="The unconditional branch to Done jumps around the instruction at x3001, skipping the ADD" wrongAnswerFeedback="rightAnswerFeedback"/>

::: details Review what the code is doing after answering the question
- Code unconditionally branches to **Done** (x3002), skipping the instruction at X3001
- Stores the value in **R0** (zero if the program was just loaded) into **Result** (memory location x3004)
:::

**Conditional Branch Example**
![BR Conditional Example](/images/AssemblyProgramming/Commands/BR_Example1.png)

<QuestionTF question="-5 gets stored into Result when this code runs" answer='true' rightAnswerFeedback="The ADD instruction will set the CC register to N. When the BRzp instruction executes, the program will not branch to Done" wrongAnswerFeedback="rightAnswerFeedback"/>

::: details Review what the code is doing after answering the question
- R0 is set to -5
    - The CC register we set to N, indicating the value was negative
- The **BRzp** instruction at x3001 will not cause the PC to me changes
    - In effect, this instruction does nothing
- The **ST** instruction at x3002 executes, updating Result (x3004)
:::

### Gotchas

- When using multiple conditions, they must be in the order *nzp*. Swapping the order will cause an error when assembling. This is quirk of the assembler

## Conclusion

Branch instruction may or may not be *taken*, depending on the current value in the *Condition Code* register. The CC register is set each time ALU or Memory Load instruction execute. The CC from the previous instruction will be used by Branch instructions.

If/Else and looping behavior can be created using labels, a control value, and the BR instruction.