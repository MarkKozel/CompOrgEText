---
title: Memory Access Commands
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

## LD

### LC-3 ISA Format

<LC3Instruction opName="LD" :bitPattern="{OpCode:'0010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LD R3, MyVal1 ; Loads the value from the memory location labeled MyVal1 into Register 3', 'LD R0, MyVal2 ; Loads the value from the memory location labeled MyVal2 into Register 0']"/>

### Explanation

LD loads from Memory into a Register. A destination register is provided to receive the value from memory. The address to load from is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

::: details Labels Revisited
!!!include(TextSnippets/LC3/Labels.md)!!!
:::

::: details PCOffset Revisited
The least-significant 9 bits of the LD command is a 9-bit PCOffset values. As described in the above Label section, the assembler converts the label into this PCOffset.

!!!include(TextSnippets/LC3/PCOffset.md)!!!
:::

### Examples

#### Loads value from memory location MyVal1 into Register 3
@[code lang=asm{2}](@/Assembly/Commands/ld1.asm)

#### Loads value from memory location MyVal2 into Register 0

@[code lang=asm{2}](@/Assembly/Commands/ld2.asm)

#### Loads value from memory location MyVal2 into Register 0

@[code lang=asm{2}](@/Assembly/Commands/ld3.asm)

### Gotchas

## ST

### LC-3 ISA Format

<LC3Instruction opName="NAME" :bitPattern="{OpCode:'0000', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['NAME R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'NAME R3, R2, R2 ; Add R2 to itself, store result in R3']"/>

### Explanation

### Examples

### Gotchas

## Conclusion