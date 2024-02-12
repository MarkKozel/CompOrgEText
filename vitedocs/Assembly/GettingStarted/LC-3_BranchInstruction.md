---
title: Branch Instruction
parent: Getting Started
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

<iframe width="560" height="315" src="https://www.youtube.com/embed/INGTAFuc_hI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The LC-3 provides a single instruction used to change program flow based on the result of a previous instruction

Normal program flow is to execute each instruction in-order until the last instruction is complete. While this good enough to solve simple problems, more complex problems require code to be skipped or repeated

::: tip Common Flow Control Constructs
**If** - Based on a logical test (```if(x > 12)```), execute or skip a block is instructions

**If/Else** - Based on a logical test, execute or skip a block is instructions

**For()** - Based on a logical test, repeat a block is instructions
:::

## Logical Conditional Test
<!--@include: @/TextSnippets\Assembly\Conditional.md-->

## Condition Code (CC) Register
The LC-3 sets the Condition Code (cc) Register as part of the execution of the following instructions:

- ADD
- AND
- NOT
- LD

<!-- @include: @/TextSnippets/LC3/CCRegister.md -->

<<< ../_CodeSnippets/QuickStart/BR_CC.asm {2-4 asm}

## Labels

<!-- @include: @/TextSnippets/LC3/Labels.md -->

<<< ../_CodeSnippets/QuickStart/BR_Labels.asm {2-4 asm}

::: tip Whitespace in Labels
Labels can be on the same line -or- a separate line, before the instruction. This is a matter of style. The extra whitespace of the sends option makes the code a bit more readable for humans. The assembler, however does not care, and removed the separation
> Line 2 has an added label on the same line as the instruction
>
> Line 3 has an added label on a line before the instruction
:::

## BR
Branches use both **Labels** and the **CC** to cause an executing program to change from the normal program flow

The **BR** instruction includes references used to compare to the **CC** as the logical test

> **BRn *label*** - Branch (change program flow to) to *label* if **CC** is *Negative*
>
> **BRp *label*** - Branch (change program flow to) to *label* if **CC** is *Positive*
>
> **BRz *label*** - Branch (change program flow to) to *label* if **CC** is *Zero*

References can be combined to test two (2) or all three (3) references

> **BRnz *label*** - Branch (change program flow to) to *label* if **CC** is *Negative* or *Zero*
>
> **BRzp *label*** - Branch (change program flow to) to *label* if **CC** is *Zero* or *Positive*
>
> **BRnzp *label*** - Branch (change program flow to) to *label* if **CC** is *Negative*, *Positive*, or *Zero*

:::danger Order is Important
When using multiple references with **BR** they must be in the **nzp** order. If the order is different an assembler error will occur
:::

<<< ../_CodeSnippets/QuickStart/BR.asm {3-5,7,9,13,11,15 asm}

- Lines 3 - 5 are reacting to the **CC** set by line 2
- Program flow will branch to line 7, 11, or 15 based on the **CC**
- After ```JumpHereIfZero``` or ```JumpHereIfPositive``` execute their block of instructions, there is am *unconditional* branch (jump regardless of the **CC** value) (Lines 9 & 13) to the *Done* label. This prevents the normal program flow from executing other instruction blocks
- As noted in the comment in lines 17 & 18, an *unconditional* branch is not needed here because normal program flow causes the program to *fall through* to Done.