---
title: Sequential Program Flow
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

## Sequential Flow

A program executing in sequence is not changing flow. It is executing each instruction in order from first to last

While the program is performing operations on data from user input and/or data stored in memory, it is not jumping around in the code based on the data

*Simple sequential program in Java and LC-3 Assembly*
:::: code-group
::: code-group-item Java
```java
int result = 0;
int x = 15;
x += 15;
result = x * 2;
```
:::
::: code-group-item LC-3
```
.ORIG x3000

   LD R2, X
   ADD R2, R2, #15
   ADD R3, R2, R2
   ST R3, Result

   HALT
.END

Result .FILL #0
X .FILL #15
```
:::
::::

These two code examples run top to bottom with no change in flow

![Sequential Flow Diagram](/images/AssemblyProgramming/ProgramFlow/Diagram_Sequential.png)



## Conclusion