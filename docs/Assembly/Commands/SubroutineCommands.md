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


## TRAP

### LC-3 ISA Format
<LC3Instruction opName="TRAP" :bitPattern="{OpCode:'1111', unused:'0000', trapvect8: '00000000'}" :descriptions="[{OPCode:''},{unused: 'not used'},{trapvect8: 'Address or Pseudonym of Trap Routine'}]"  :examples="['TRAP x22 ; run PUTS trap routine', 'PUTS ; run PUTS trap routine using pseudonym']"/>

### Explanation

LC-3 Simulate environment provides common functions that may be called from a user program. The functions perform simple tasks such as *get a character from the keyboard* and *display a string*.

|TRAP Vector|Pseudonym|Task|
|-|-|-|
|x20|GETC|Read a simple character from the keyboard w/o echoing to display|
|x21|OUT|Output a character to the display|
|x22|PUTS|Write a string to the display|
|x23|IN|Print a prompt in the display, read in a single character and echo it to the display|
|x25|HALT|Halt all code execution|

The TRAP Vectors are a reserved memory block that contains addresses to each TRAP routine. The mechanism is called a *Jump Table*, as serves as a *table of contents* of address, each address is a separate TRAP routine

|TRAP Vector|Pseudonym|Jump Table Address|
|-|-|-|
|x20|GETC|x400|
|x21|OUT|x430|
|x22|PUTS|x450|
|x23|IN|x4A0|
|x25|HALT|xFD70|

#### Using the Jump Table

In the above table, PUTS (TRAP x22) has a Jump Table entry at memory address x0022. 

When Simulate processes a TRAP x22 instruction:

1. The current PC is copied into Register R7
1. Memory address x22 is read
1. The value x450 is returned
1. Memory address x450 is placed in the PC
1. A new instruction cycle starts
    1. Simulate jumps to address x450 and begins processing instructions in the PUTS routine
    1. The last instruction in PUTS copies the value in R7 (the PC from step 1) into the PC
    1. A new instruction cycle starts
1. Simulate jumps to the address in the user code right after the call to PUTS
1. Instruction execution continues

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

**NOT** is one of the simplest instruction, so does not have any gotchas of note.

## Concept 2

## Conclusion