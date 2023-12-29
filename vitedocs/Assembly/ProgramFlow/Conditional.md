---
title: Conditional Program Flow
parent: Assembly
description: Controlling the flow of a program from within the program is a big part of Turing initial General Purpose computer. It allows a program to execute in various orders, based on internal changes and external data
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Conditional Flow',
  Details:'A single decision point in the program that will execute or skip a section of the code'
},
{
  Concept:'Program makes decisions based in outside information',
  Details:'During execution a program can change program flow based on data or user inputs'
},
{
  Concept:'Either/Or Decisions',
  Details:'Beyond executing or skipping instructions, a program make a mutually-exclusive decision to execute one (1) set of instruction or another'
}
]" />

::: details Terms
<!--@include: @/TextSnippets/Assembly/ProgramFlow_Terms.md-->
:::

## Introduction

Programs can react to data or user inputs during execution, and *decide* to execute a different set of instruction based on the input. The ability to make these decisions allows the program to be dynamic, reacting to various inputs and producing appropriate outputs.

The standard conditional flow has two (2) types: 1) IF, where instructions are executed or skipped and , 2) IF/ELSE, where one (1) set of instructions are executed or an different set are executed.


!!!include(TextSnippets/Assembly/Conditional.md)!!!


## Conditional Flow

In conditional flow, the program can execute or skip 1 or more lines of code based on a condition. The condition is evaluated while the program is running. In this way, the same program can execute differently, based on data or user inputs, each time it runs


![Conditional Flow Diagram](/images/AssemblyProgramming/ProgramFlow/Diagram_Conditional.png)

<!-- If Branch md file 
!!!include(Assembly/ProgramFlow/Conditional_If.md)!!!-->
### If Branch
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

<!-- If Branch md file 
!!!include(Assembly/ProgramFlow/Conditional_IfElse.md)!!!-->
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

## Conclusion

Conditional flow, like If/Else are decision points in the program. The decision point makes the react better in dynamic inputs