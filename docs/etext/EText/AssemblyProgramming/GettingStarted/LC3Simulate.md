---
title: LC-3 Runtime Environment
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

### Starting the Tools
Double click on Simulate.exe to start the programs.
Click File | Exit or the X in the upper-right of the program will close it.

#### Simulate
Once LC-3 assembly source code is assembled into object code, it is loaded into the Simulate environment. The simulator is an emulated LC-3 microarchitecture that will execute object code. The environment shows the state of general registers, program and instruction registers, condition code, and contents of all RAM

![LC3 Simulate Breakdown](/images/AssemblyProgramming/GettingStarted/Simulate_Breakdown.jpg)

It also provides a debugger to step through object code 1 line at a time

In addition with the simulate windows, the LC3 Console window will open. It will be discussed later

## Conclusion