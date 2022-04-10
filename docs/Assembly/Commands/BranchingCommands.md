---
title: Branching Commands
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


## BR

### LC-3 ISA Format

<LC3Instruction opName="BR" :bitPattern="{OpCode:'0000', N: 'n', Z:'z',P:'p',PCOffset9:'000000000'}" :descriptions="[{OPCode:''},{N:'Negative Condition'},{Z:'Zero Condition'}, {P:'Positive Condition'}, {PCOffset9: 'Offset from current PC to branch'}]"  :examples="['BRn MyLabel1 ; If CC is in Negative Condition, branch to MyLabel1', 'BRz MyLabel2 ; If CC is in Zero Condition, branch to MyLabel2','BRp MyLabel3 ; If CC is in Positive Condition, branch to MyLabel3', 'BRnz MyLabel4 ; If CC is in Negative or Zero Condition, branch to MyLabel4']"/>

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

|Instruction|Conditions to Branch|
|-|-|
|BRnz|Branch is **CC** is *Negative* or *Zero*|
|BRzp|Branch is **CC** is *Zero* or *Positive*|
|BRnzp|Branch is **CC** is *Negative* or *Zero* or *Positive*|

> BRnzp is an *unconditional* branch, because it will always branch, regardless of the CC
>
>A shorthand for this is BR. The assembler will add the nzp for you

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