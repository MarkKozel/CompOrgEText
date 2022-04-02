---
title: LC-3 Simulate
description: Running and Examining Object Code
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
}]" />

## Introduction

## Starting the Tools
Double click on Simulate.exe to start the programs.
Click File | Exit or the X in the upper-right of the program will close it.

## Simulate Environment
Once LC-3 assembly source code is assembled into object code, it is loaded into the Simulate environment. The simulator is an emulated LC-3 microarchitecture that will execute object code. The environment shows the state of general registers, program and instruction registers, condition code, and contents of all RAM

![LC3 Simulate Breakdown](/images/AssemblyProgramming/GettingStarted/Simulate_Breakdown.jpg)

It also provides a debugger to step through object code 1 line at a time

In addition with the simulate windows, the LC3 Console window will open. It will be discussed later

### Menu

Provides commands to initialize, load, and run programs in the environment. All commands are located in the Menu area. Commonly-used commands are also provided in the Toolbar for quick access.

### Toolbar

Commonly-used commands can be executed on the Toolbar. These commands can also be found in the Menu area

![Simulate Toolbar Breakdown](/images/AssemblyProgramming/GettingStarted/Simulate_Toolbar_Breakdown.png)

**Load Program** - Loads .obj (assembles source code) into simulate

**Debugging Tools** - Sett of debugging commands to examine and troubleshoot program problems

**Jump to Memory Location** - Moved to different area of LC-3 memory

### Registers

Registers are quick-access data storage used by programs and the LC-3 Simulate environment while executing a program. Registers, except for the Condition Code Register, are contain 16-bit values. These storage spaces are considered *quick-access* because they are wired to other elements on the processor so that all 16-bits can be updated in 1 clock cycle. Access RAM is slower because data is updated in parts of the 16-bit value, so take multiple clock cycles to complete an update.

![Simulate Registers Breakdown](/images/AssemblyProgramming/GettingStarted/Simulate_Registers_Breakdown.png)

**General-Purpose Data Registers** - eight (8) 16-bit registers use to store data for any purpose. Both programs and Simulate can read and write register data. LC-3 ALU instruction can not access RAM, they only use data in these registers. If the program modifies data stored in RAM, it will first load the data from RAM into a register as a separate instruction. Then is can perform the modification.

**Condition Code Register** - Contains the numeric state (Negative, Zero, Positive) of the result of the last instruction that was executed. If the last instruction added two (2) registers the state of that result is stored in the CC register. Not all instructions update CC. In that case, the CC will retain the last state that was updated. Programs can read CC, but not write to it.

**Program Registers** - LC-3 Simulate updates these while executing each instruction in a user program. The program does not have access to these registers
- PC (Program Counter) contains the address in RAM to the next instruction. It is used at the start of executing the *next* instruction to load that instruction from RAM. At the start of executing an instruction, the Simulate uses the PC to request the next instruction. Upon receipt (where the next instruction is loading into the IR), the PC in incremented by 1.
- IR (Instruction Register) As instructions take multiple clock cycles to complete, the IR contains the *current* instruction being executed. In the course of executing it, the Simulate may need to reference parts of the instruction at different points in its execution. Holding the instruction in the IR prevents the need to load the same instruction multiple times.

### Memory

## Conclusion