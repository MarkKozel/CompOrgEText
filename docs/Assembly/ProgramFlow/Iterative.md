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
<!-- For Loop file 
!!!include(Assembly/ProgramFlow/Iterative_ForLoop.md)!!!-->

### For Loop Example

@[code lang=java{3}](.vuepress/public/examples/Assembly/ProgramFlow/ForLoop.java)

@[code lang=arm-asm{7-10}](.vuepress/public/examples/Assembly/ProgramFlow/ForLoop.asm)

## While Loop

Rather than looping a set number of times, a While Loop will loop as long as a condition is true. 

Iterating until a condition is met (true) causes a While Loop to execute zero (0) or more times. The number of iterations depends on the condition and when it is finally met.

A while loop much update the condition variable inside the loop, so that when tested at the start of the next iteration it may make the condition true, and exit the loop.

<!-- While Loop file 
!!!include(Assembly/ProgramFlow/Iterative_WhileLoop.md)!!!-->

### While Loop Example
@[code lang=java{5-7}](.vuepress/public/examples/Assembly/ProgramFlow/While.java)

@[code lang=arm-asm{6-10}](.vuepress/public/examples/Assembly/ProgramFlow/While.asm)

::: details Breakdown of code
  **i** is both the data to be acted on and the condition variable used to control the loop

  > It is possible to use a different variable for controlling the while loop, however, this makes it function for like a *For Loop*

  The While Loop starts by checking the control variable against a logical operations. The result will be *true* or *false*. If *true*, the loop in entered. If *false* the loop is bypassed.

  > While loops will execute zero (0) or more times. If the condition is *true* at the start, it will not be entered

  In the loop, the condition variable is modified. Other things can also occur within the loop, however updating the condition variable must occur each time

  The loop iterated back to the start, where the condition is re-evaluated and the decision to loop again or bypass the loop is made

  The cycle continues until the condition is *false*
:::

<QuestionMC question="After the While Loop completes i will contain what number?" answer='D' AChoice="2" BChoice="8" CChoice="10" DChoice="12" rightAnswerFeedback="Right! It will loop 6 times total" wrongAnswerFeedback="Incorrect. Because the condition is 'greater than or equal to', when i = 10 the loop is entered 1 last time, adding 2 more"/>

## Conclusion
One or more instructions are executed more that one time. Each time the instructions are executed, data can be updated to new values.

Iterative constructs use a Control value to mange the looping and is used to decide when to exit the loop