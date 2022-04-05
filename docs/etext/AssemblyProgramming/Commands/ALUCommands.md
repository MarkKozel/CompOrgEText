---
title: ALU Commands
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

## ADD

ADD is the only arithmetic operation in the LC-3 ISA. This command adds 2 16-bit, 2's complement values. The result is stored in a register

The Condition Code (CC) register is updated based on the resulting addition

ADD has 2 modes:
- Register Mode: Add values from 2 register
- Immediate Mode: Add value in 1 register with a *hard coded* immediate value
    - Immediate value is represented in 15-bits
    - Immediate value is a 2's complement
        - -16 to +15

<LC3Instruction opName="ADD (Register Mode)" :bitPattern="{OpCode:'1010', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['ADD R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'ADD R3, R2, R2 ; Add R2 to itself, store result in R3', 'ADD R3, R3, R3 ; Add value in R3 to itself, store result in R3']"/>

<LC3Instruction opName="ADD (Immediate Mode)" :bitPattern="{OpCode:'1010', DR: '000', SR1:'000',Mode:'0',IMM5:'00000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'0 indicates Register Mode'}, {IMM5: '5-bit immediate value' }]"  :examples="['ADD R3, R1, #1 ; add values in register 1 with 1, store result in R3', 'ADD R3, R2, #-4 ; add values in register 2 with -4, store result in R3', 'ADD R3, R3, xB ; Add value in R3 to hex value B (11 in base 10)), store result in R3']"/>

## Concept 2

## Conclusion