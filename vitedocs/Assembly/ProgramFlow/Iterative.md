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
  Concept:'Iterative Flow',
  Details:'Repeating a section of code more than once, often with different data each time'
},
{
  Concept:'Repeating code blocks',
  Details:'During execution a program can execute the same code block repeatedly'
},
{
  Concept:'Knowing when to stop iterating',
  Details:'In order to know when to stop, a control variable is used to track iterations and is checked each cycle. If the variable reaches a preset value, the loop terminates'
}
]" />

::: details Terms
!!!include(TextSnippets/Assembly/ProgramFlow_Terms.md)!!!
:::

## Introduction

Beyond executing sequential and conditional instructions, computers reliably execute the same set.

!!!include(TextSnippets/Assembly/Conditional.md)!!!

## Iterative Flow

A program can execute a section of code multiple times. This is common in arithmetic function and database processing.

The number of iteration (number of times the section runs) can be a built-in value or based on user or external inputs.

![Iterative Flow Diagram](/images/AssemblyProgramming/ProgramFlow/Diagram_Iterative.png)

Iterative loops must have some **control** criteria to determine when to stop looping. This is typically a data element that tracks the loop cycles and reaches a value that indicates the loop should terminate. 

## For Loop
Iteration using a *For Loop* is doing the work a set number of times. The work can use the number of times the loop has been run as a reference. An example is using the count as an array index

!!!include(Assembly/ProgramFlow/Iterative_ForLoop.md)!!!

## While Loop
Rather than looping a set number of times, a While Loop will loop as long as a condition is true. 

Iterating until a condition is met (true) causes a While Loop to execute zero (0) or more times. The number of iterations depends on the condition and when it is finally met.

A while loop much update the condition variable inside the loop, so that when tested at the start of the next iteration it may make the condition true, and exit the loop.

!!!include(Assembly/ProgramFlow/Iterative_WhileLoop.md)!!!


## Do-While Loop
Unlike the *While* loop, a *Do-While* will complete the loop one (1) time before checking the condition. The condition test is at the bottom of the loop.

This is useful when the work performed in the loop must be, such as in processing a user action. Also useful when the work performed in the loop changes the condition test.

!!!include(Assembly/ProgramFlow/Iterative_DoWhileLoop.md)!!!

## Conclusion
One or more instructions are executed more that one time. Each time the instructions are executed, data can be updated to new values.

Iterative constructs use a Control value to mange the looping and is used to decide when to exit the loop