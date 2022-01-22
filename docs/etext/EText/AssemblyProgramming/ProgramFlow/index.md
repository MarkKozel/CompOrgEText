---
title: Program Flow
parent: AssemblyProgramming
description: Controlling the flow of a program from within the program is a big part of Turing initial General Purpose computer. It allows a program to execute in various orders, based on internal changes and external data
pageType: Topic
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
```asm
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

## Conditional Flow

In conditional flow, the program can execute or skip 1 or more lines of code based on a condition. The condition is evaluated while the program is running. In this way, the same program can execute differently, based on data or user inputs, each time it runs

**Conditions** are the result of comparing data with another data items, or to a range of values. The condition typically results in a true/false state

::: details Example Comparisons
- data is the same as a single value  ```x = 17```
- data is larger that a value         ```x > 16```
- data within a range of values       ```x > 16 && x < 87```

In each case, the comparison is either true or false
:::

With the Condition evaluated, the program will execute or skip certain code if the condition is ```true```. Otherwise, the program will continue executing in a sequential flow

![Conditional Flow Diagram](/images/AssemblyProgramming/ProgramFlow/Diagram_Conditional.png)

### IF Branch
A program can evaluate a condition, such as an arithmetic or logical comparison between values. Based on that condition, the code may skip a section of code that does not pertain to the condition

*Simple conditional 'if'  program in Java and LC-3 Assembly*
:::: code-group
::: code-group-item Java
```java
  Scanner myObj = new Scanner(System.in);
  System.out.println("Enter age");
  String userAge = myObj.nextInt();
  if(userAge > 0)
  {
    System.out.println("You entered a valid age");
  }
```
:::
::: code-group-item Assembly
```
.ORIG x3000
  LEA R0, enterAge
  PUTS
  IN
  JSR convertToInt ; subroutine to convert input into a number and save in R1
  BRp Valid ; Based on CC register set by convertToInt
  BRnz Done

  Valid LEA R0, goodAge
  PUTS

  Done HALT
.END

enterAge .STRINGZ "Enter age"
goodAge .STRINGZ "You entered a valid age"
```
:::
::::

### If/Else Branch
The program may choose between 2 separate code sections based on a condition

*Simple conditional 'if/else'  program in Java and LC-3 Assembly*
:::: code-group
::: code-group-item Java
```java
  Scanner myObj = new Scanner(System.in);
  System.out.println("Enter age");
  String userAge = myObj.nextInt();
  if(userAge > 0)
  {
    System.out.println("You entered a valid age");
  }
  else
  {
    System.out.println("You entered an invalid age");
  }
```
:::
::: code-group-item Assembly
```
.ORIG x3000
  LEA R0, enterAge
  PUTS
  IN
  JSR convertToInt ; subroutine to convert input into a number and save in R1
  BRp Valid ; Based on CC register set by convertToInt
  BRnz Invalid

  Valid LEA R0, goodAge
    PUTS
    BR Done

  Invalid LEA R0, badAge
    PUTS

  Done HALT
.END

enterAge .STRINGZ "Enter age"
goodAge .STRINGZ "You entered a valid age"
badAge .STRINGZ "You entered an invalid age"
```
:::
::::

Other conditionals constructs, such as Switch, While, and Do/While are based on these same Condition check and change in flow

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