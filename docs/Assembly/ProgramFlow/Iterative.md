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
<!-- For Loop file 
!!!include(Assembly/ProgramFlow/Iterative_ForLoop.md)!!!-->

### For Loop Example

```java
int x = 0;
for(int i = 0; i < 10; i++) {
x += i; //Add current value if i to x
}
```

``` 
.ORIG x3000
  ADD R1, R1, #0; int x = 0
  ADD R2, R2, #0; int i = 0;
loop   

  Done HALT
.END


```

## While Loop

Rather than looping a set number of times, a While Loop will loop as long as a condition is true. 

Iterating until a condition is met (true) causes a While Loop to execute zero (0) or more times. The number of iterations depends on the condition and when it is finally met.

A while loop much update the condition variable inside the loop, so that when tested at the start of the next iteration it may make the condition true, and exit the loop.

<!-- While Loop file 
!!!include(Assembly/ProgramFlow/Iterative_WhileLoop.md)!!!-->

### While Loop Example
```java
//Condition: Keep looping until i is 10 or more
//Action: Starting at 0, add 2 to i each loop

int i = 0; //data to update in the loop
while(i <= 10){
  i += 2; //Add 2 to the data
}
```

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

``` 
.ORIG x3000
  ADD R1, R1, #0; int i = 0

;Condition: Keep looping until R1 is 10 or more
;Action: Starting at 0, add 2 to R1 each loop
myLoop   
  ADD R2, R1, #-10 ; Test R1 <= 10. Store in R2 so we don't affect the data
  BRnz Done        ; R1 + (-10) is zero or negative, jump out of loop
  ADD R1, R1, #2   ; Add 2 to the data
  BRnzp myLoop     ; Go back and possible loop again

  Done HALT
.END
```

## Conclusion