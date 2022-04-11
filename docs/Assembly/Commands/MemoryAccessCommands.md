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

Memory Access Commands proved capability to move data between Registers and Memory (RAM). 

Recall that [ALU Commands](ALUCommands) do not operate on date in memory. Before executing any instruction on data in memory it must first be loaded from memory into a register. ALU Commands only store results in registers, so it must be stored out to memory if needed.

**Add Two Values in Memory**

This LC-3 program adds 2 values from memory and stores it in a different memory location.

@[code lang=asm{2,3,7}](@/Assembly/Commands/addMemData.asm)

- The program allocates memory using the labels **MyVal1**, **MyVal2**, and **Result**
- **MyVal1**, **MyVal2** are assigned values
- **R1** and **R2** are loaded with data from **MyVal1**, **MyVal2** (lines 2-3)
- **R1** and **R2** are added together and stored in **R3**
- The value is **R3** is stored in memory location **Result**

Memory Access instructions used labels to name and reference memory locations. During assembly, the label names are converted to offset values. Review Labels and PCOffsets if needed, below.

::: details Labels Revisited
!!!include(TextSnippets/LC3/Labels.md)!!!
:::

::: details PCOffset Revisited
The least-significant 9 bits of the LD command is a 9-bit PCOffset values. As described in the above Label section, the assembler converts the label into this PCOffset.

!!!include(TextSnippets/LC3/PCOffset.md)!!!
:::

## LD

### LC-3 ISA Format

<LC3Instruction opName="LD" :bitPattern="{OpCode:'0010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LD R3, MyVal1 ; Loads the value from memory location labeled MyVal1 into Register 3', 'LD R0, MyVal2 ; Loads the value from memory location labeled MyVal2 into Register 0']"/>

### Explanation

LD loads from Memory into a Register. A destination register is provided to receive the value from memory. The address to load from is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

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

<LC3Instruction opName="ST" :bitPattern="{OpCode:'0011', SR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{DR:'Source Register'},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['ST R3, MyVal1 ; Store value from Register 3 into memory location labeled MyVal1', 'ST R0, MyVal2 ; Loads the value from Register 0 into memory location labeled MyVal2']"/>

### Explanation

### Examples

### Gotchas

## LDI

### LC-3 ISA Format

<LC3Instruction opName="LD" :bitPattern="{OpCode:'0010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LD R3, MyVal1 ; Loads the value from the memory location labeled MyVal1 into Register 3', 'LD R0, MyVal2 ; Loads the value from the memory location labeled MyVal2 into Register 0']"/>

### Explanation

LD loads from Memory into a Register. A destination register is provided to receive the value from memory. The address to load from is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

### Examples

#### Loads value from memory location MyVal1 into Register 3
@[code lang=asm{2}](@/Assembly/Commands/ld1.asm)


### Gotchas

## STI

### LC-3 ISA Format

<LC3Instruction opName="NAME" :bitPattern="{OpCode:'0000', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['NAME R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'NAME R3, R2, R2 ; Add R2 to itself, store result in R3']"/>

### Explanation

### Examples

### Gotchas

## LDR

### LC-3 ISA Format

<LC3Instruction opName="LD" :bitPattern="{OpCode:'0010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LD R3, MyVal1 ; Loads the value from the memory location labeled MyVal1 into Register 3', 'LD R0, MyVal2 ; Loads the value from the memory location labeled MyVal2 into Register 0']"/>

### Explanation

LD loads from Memory into a Register. A destination register is provided to receive the value from memory. The address to load from is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

### Examples

#### Loads value from memory location MyVal1 into Register 3
@[code lang=asm{2}](@/Assembly/Commands/ld1.asm)


### Gotchas

## STR

### LC-3 ISA Format

<LC3Instruction opName="NAME" :bitPattern="{OpCode:'0000', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['NAME R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'NAME R3, R2, R2 ; Add R2 to itself, store result in R3']"/>

### Explanation

### Examples

### Gotchas

## LEA

### LC-3 ISA Format

<LC3Instruction opName="LD" :bitPattern="{OpCode:'0010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LD R3, MyVal1 ; Loads the value from the memory location labeled MyVal1 into Register 3', 'LD R0, MyVal2 ; Loads the value from the memory location labeled MyVal2 into Register 0']"/>

### Explanation

LD loads from Memory into a Register. A destination register is provided to receive the value from memory. The address to load from is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

### Examples

#### Loads value from memory location MyVal1 into Register 3
@[code lang=asm{2}](@/Assembly/Commands/ld1.asm)

### Gotchas

## Conclusion