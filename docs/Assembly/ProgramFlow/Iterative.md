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

### For Loop
:::: code-group
::: code-group-item Java
```java
int x = 0;
for(int i = 0; i < 10; i++) {
x += i; //Add current value if i to x
}
```
:::
::: code-group-item Assembly
```
.ORIG x3000
  ADD R1, R1, #0; int x = 0
  ADD R2, R2, #0; int i = 0;
loop   

  Done HALT
.END


```
:::
::::

## Conclusion