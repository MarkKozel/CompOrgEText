---
title: Iterative Program Flow
parent: Assembly
description: Controlling the flow of a program from within the program is a big part of Turing initial General Purpose computer. It allows a program to execute in various orders, based on internal changes and external data
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Sequential Flow',
  Details:'Program execution in order, without any variation'
},
{
  Concept:'Conditional Flow',
  Details:'A single decision point in the program that will execute or skip a section of the code'
},
{
  Concept:'Iterative Flow',
  Details:'Repeating a section of code more than once, often with different data each time'
}
]" />

## Introduction

## Iterative Flow

A program can execute a section of code multiple times. This is common in arithmetic function and database processing

The number of iteration (number of times the section runs) can be a built-in value or based on user or external inputs

![Iterative Flow Diagram](/images/AssemblyProgramming/ProgramFlow/Diagram_Iterative.png)

## For Loop
<!-- For Loop file -->
!!!include(Assembly/ProgramFlow/Iterative_ForLoop.md)!!!

## While Loop

Rather than looping a set number of times, a While Loop will loop as long as a condition is true. 

Iterating until a condition is met (true) causes a While Loop to execute zero (0) or more times. The number of iterations depends on the condition and when it is finally met.

A while loop much update the condition variable inside the loop, so that when tested at the start of the next iteration it may make the condition true, and exit the loop.

<!-- While Loop file -->
!!!include(Assembly/ProgramFlow/Iterative_WhileLoop.md)!!!

## Conclusion