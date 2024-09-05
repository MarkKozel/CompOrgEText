---
title: Connecting Hardware to Software
parent: Introduction to Computer Organization
description: 
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
  Concept:'High-Level vs Assembly Languages',
  Details:'An instruction in a High_Level language is typically compiled into many separate assembly language instructions'
},
{  
  Concept:'Software and Hardware work together at the Microarchitecture/ISA level',
  Details:'At these low levels transistors, combined into circuits, are used in an orderly fashion to execute each instruction' 
} 
]" />

## Introduction

Computer Science courses focus primarily on software (File Systems, Operating Systems, Network Protocols, Bits and Bytes). Computer Engineering courses focus primarily on hardware (Processors, Storage, Data Buses, Voltage and Current)

Computer Organization connects those to worlds, and explores how they work together to provide today's modern computer systems

To discuss the interface between Hardware and Software, we need to dive down into the lowest levels of the Computer Abstraction Layers. We will learn how a 5-volt current becomes a bit of data, Why the timing of hardware is essential of digital data integrity, and How a set of electronic circuits can reliably manipulate bits into useful data

## Differences Between High-Level Programming Language and Assembly

You have likely worked with programming languages such as Java, Python, or JavaScript. These and many, many others are in a class of high-level programming languages. *High-level* indicates that these languages include utilities and tools that convert the source code you write into low-level machine code (strings of *1*s and *0*s) that the CPU can use to execute your program.

There are several layers of conversions that may take place, depending on the high-level language used, and the CPU that will execute that program.

A simple [Hello World](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program written in Java [example code](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program#Java) is likely to result in a different set of bits for an Intel, AMD, or Apple CPU. The Java tools detect the target processor and use the correct conversion tools to create and execute the program.

::: tip
Java, and other interpreted high-level languages actually have a more complex set of tools than non-interpreted languages. It is beyond the scope of this class, but look around online if you are interested
:::

## Example High- and Low-Level Program
A language like Java provides a function like ```System.out.println``` to print a string of characters with a newline character at the end.

``` Java
System.out.println("Hello, World!");
```

In assembly the program must create the string in memory, check with the display to see it it is ready for a character, send characters, and send the newline to accomplish the same result.

<<< @/public/examples/Introduction/helloworld.asm {3,6,9-11,13,15,19,21-23,28 asm}

It is an understatement to say that assembly is more *Hands On* than high-level languages like Java.

::: info In the above assembly program, the programmer must:
1. Define the Hello World string in memory (HW, line 28)
1. Load the memory address of the first character of HW (line 3)
1. Check for the end-of-string indication (0 value, line 6)
1. Wait for the display to be ready to receive a character (lines 9-10)
1. Send the character to the display to be printed (line 11)
1. Move the character address to the next memory address and loop back up to do it all again
1. Once the end-of-string is detected (line 6) jump out of the loop to Done
1. Load the newline code (line 19)
1. Wait for the display to be ready to receive a character (lines 21-22)
1. Send the character to the display to be printed (line 23)
1. End the program at line 25
:::

## Conclusion

All programs at any level are executed as assembly code by the microarchitecture. High-level languages allow programs to use complex instruction that are compiled into a set of assembly instructions before they can be executed.