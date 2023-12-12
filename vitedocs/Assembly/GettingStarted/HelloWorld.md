---
title: Variables
parent: Getting Started
description: Loading and Storing Data
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

## Introduction

We will start with the classic *first program*, **Hello, World**, to discuss the basics parts and instructions of LC-3 Assembly

While the .asm and .java file output the same characters to the screen, they are quite different

::: code-group
<<< @/Assembly/_CodeSnippets/HelloWorld.asm {3,9-11,5,15,29}
<<< @/Assembly/_CodeSnippets/HelloWorld.java {3}
:::

::: tip Why are these two programs so different?
Java provides libraries of functions that do the *dirty work* you done see. ```System.out.println``` (line 3) is a function in the **System** library that handles processing characters, interfaces with the monitor device, and adds a new line to the end of the output

The assembly environment provides only basic function, such as 
  - a command to read the beginning of a string (line 3)
  - a status location to check that the monitor is ready to print a character (lines 9-11)
  - a looping instruction to process in each character and send it to the monitor (line 5 and 15)
  - a special code to cause a blank line to display on the monitor(line 26)
:::

We will discuss the details of the .asm source file in detail in the following sections

## Memory

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {3,5,9,17,18,20,25,26,29,30}

### Storing Data in Memory
Lines 25-30 are similar to variable declarations in Java. Each line has
- A name (*HW*, *NewLine*, *DSR*, *DDR*)
- A memory allocation (*.STRINGZ*, *.FILL*)
- A value (*Hello, World!*, *#13*, *xFE04*, *xFE06*)

::: tip What's missing?
*Types*! 

In assembly, all data is binary. Just c. We can show it a a set of characters ("Hello, World!"), an integer (#13), or a hexadecimal address (xFE04)

However, when the .asm source code file is **assembled** (similar to compiling a .java file) into an **executable** .obj file, these values are converted to binary for the LC-3 Simulate tool
:::

### Loading Data from Memory
Before the program can use data from memory, it must be loaded into a **Register** (more to come on these)

Lines 5, 9, 17, and 18 load data from memory. The *LD* instruction is the basic instruction used in LC-3. It copies the *#13* data from *Newline* into the R0 Register.  the *LDR* and *LDI* instructions also load data into a Register, but these are used in special cases, such as when checking a special memory location used by the monitor

## Registers
Before an assembly instruction can act on any data from memory it must be copied into a Register

In order to *ADD* two data elements, both must be in separate registers before the *ADD* can successfully execute

LC-3 provides 8 General Purpose Registers, numbered R0 - R7. An assembly programmer can use any of these Registers for any purpose needed. It does, however, mean the program must keep track of what each register that use contains. When data is loaded into a Register, the previous data is lost

When data in a Register is stored into memory, the register still contains the data. It is up to the programmer to clear Registers if they desire. Or they can let the data remain

::: warning Reminder About Assembly Values
Except for typos, this text refers to values in Memory and Registers as **Data**. This is intentional as way of illustrating that this data is a string of *1's* and *0's*. It has no type or meaningful state until it is used

When the *ADD* instruction uses data, it treats the data as an integer value. If the monitor received a data element, it uses it as a character. A Load or Store instruction will use the data as an memory address to access

In other words, *bits are bits until they put to work*
:::


## Conclusion