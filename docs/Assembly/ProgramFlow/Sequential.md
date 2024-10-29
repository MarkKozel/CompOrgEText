---
title: Sequential Program Flow
parent: Assembly
description: Executing instructions in-order
pageClass: Topic
tags: []
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Sequential Flow',
  Details:'Program execution in order, without any variation'
},
{
  Concept:'Predictable Execution',
  Details:'Without any variation is execution, sequential program flow is predictable'
}
]" />

::: details Terms
<!--@include: @/TextSnippets/Assembly/ProgramFlow_Terms.md-->
:::

## Introduction
A sequential group of instructions (code block) is executing each instruction in order from first to last. Each time the program runs, the code block executes in the same order and with the same results.

## Sequential Flow

Without any influence from user or data, a program will execute each instruction in order.

While the program is performing operations on data from user input and/or data stored in memory, it is not jumping around in the code based on the data

*Simple sequential program in Java and LC-3 Assembly*
::: code-group
```java
int result = 0;
int x = 15;
x += 15;
result = x * 2;
```

``` LC-3
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

These two code examples run top to bottom with no change in flow

![Sequential Flow Diagram](/images/AssemblyProgramming/ProgramFlow/Diagram_Sequential.png)

## Conclusion

Sequential flow is the default. This occurs with there are no decisions being made in the code.