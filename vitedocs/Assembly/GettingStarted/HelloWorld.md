---
title: LC-3 Hello World Example
parent: Getting Started
description: Deep Dive on a basic LC-3 Assembly Program
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

## Introduction

We will start with the classic *first program*, **Hello, World**, to discuss the basics parts and instructions of LC-3 Assembly

While the .asm and .java file output the same characters to the screen, they are quite different

>Click on the *asm* and *java* tabs, below, to compare HelloWorld programs
::: code-group
<<< @/Assembly/_CodeSnippets/HelloWorld.asm {asm}
<<< @/Assembly/_CodeSnippets/HelloWorld.java {java}
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

## Registers   
Before an assembly instruction can act on any data from memory it must be copied into a Register

In order to *ADD* two data elements, both must be in separate registers before the *ADD* can successfully execute

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {3,5,9,11,13,17,18,20}

>```LEA R0, HW``` loads data in the R0 Register
>
>```Main  LDR R1, R0, #0``` added a value in R0 and 0. The result is a memory address that is used to load data inti R1
>
>```WAIT1 	LDI R5, DSR``` loads a value from a named memory location into R5
>
>```STI R1, DDR``` save the value in R1 into a named memory location
>
>```ADD R0, R0, 1``` added value in R0 and 1, storing back in R0
>
>```LD R0, NewLine``` loads a value from a named memory location into R0
>
>```WAIT2 	LDI R1, DSR``` loads a value from a named memory location into R1
>
>```STI R0, DDR``` save the value in R0 into a named memory location

LC-3 provides 8 General Purpose Registers, numbered R0 - R7. An assembly programmer can use any of these Registers for any purpose needed. It does, however, mean the program must keep track of what each register that use contains. When data is loaded into a Register, the previous data is lost

When data in a Register is stored into memory, the register still contains the data. It is up to the programmer to clear Registers if they desire. Or they can let the data remain

::: warning Reminder About Assembly Values
Except for typos, this text refers to values in Memory and Registers as **Data**. This is intentional as way of illustrating that this data is a string of *1's* and *0's*. It has no type or meaningful state until it is used

When the *ADD* instruction uses data, it treats the data as an integer value. If the monitor received a data element, it uses it as a character. A Load or Store instruction will use the data as an memory address to access

In other words, *bits are bits until they put to work*
:::

## Memory
Random-Access Memory (RAM)/Memory is a large, general-purpose storage area. It contains programs and data. Each **word** (Smallest single unit or accessible storage) of memory has a *size* (how many bits it can contain) and and *address* (location in the collection) of the word

The LC-3 cannot work on data in memory. Data must first be copied to a Register. Results from operations on data, likewise, will reside in Registers, so need to be copied back out to memory if desired

### Named Memory Locations
In the .asm file, we can use custom names, like variable names, to reference memory addresses. When the source is assembled into the executable, the assembler will calculate the memory address and replace all names with addresses

Once declared in the source, named memory locations can be refer to my their names, rather than the address

::: tip This Also Happens in Java
At the lowers levels of program execution, much of what a programer typed into a source file in converted to something the process requires. This includes removing all variable names, replacing them with locations of the data
:::

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {25,26,29,30}

>>```HW .STRINGZ "Hello, World!"``` Allocate 18 contiguous memory locations and fill with characters in the string. **HW** refers to memory location x300D
>>
>>```NewLine .FILL #13``` Allocate a single memory location and fill with value 13. **NewLine** refers to memory location x301B
>>
>>```DSR	.FILL xFE04``` Allocate a single memory location and fill with hex value FE04. **DSR** refers to memory location x301C
>>
>>```DDR	.FILL xFE06``` Allocate a single memory location and fill with hex value FE06. **DDR** refers to memory location x301D

### Storing Data in Memory
Data can be copied from a specified register into a memory location. This is typically done after an arithmetic or logic operation on data

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {11,20}

>```STI R1, DDR``` save the value in R1 into a named memory location
>
>```STI R0, DDR``` save the value in R0 into a named memory location

::: tip What's Missing?
*Types*! 

In assembly, all data is binary. Just 1's and 0's. Strings or binary values can be converted to characters, number, pixels, audio samples, and more

In the assembly source (```.asm```) code, we include a set of characters ("Hello, World!"), an integer (#13), or a hexadecimal address (xFE04)

When the .asm file is **assembled** (similar to compiling a .java file) into an **executable** .obj file, these values are converted to binary for the LC-3 Simulate tool

Compiling Java code into executable *bytecode* does something similar, although Java characters, numbers, etc are not completely converted until the *bytecode* is executed
:::

### Loading Data from Memory
Before the program can use data from memory, it must be loaded into a register. This is typically don in preparation for performing arithmetic or logic operations on the data

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {3,5,9,17,18}

>```LEA R0, HW``` loads data in the R0 Register
>
>```Main  LDR R1, R0, #0``` added a value in R0 and 0. The result is a memory address that is used to load data inti R1
>
>```WAIT1 	LDI R5, DSR``` loads a value from a named memory location into R5
>
>```LD R0, NewLine``` loads a value from a named memory location into R0
>
>```WAIT2 	LDI R1, DSR``` loads a value from a named memory location into R1

## Arithmetic/Logic Operations

Before the program can use data from memory, it must be loaded into a register. This is typically don in preparation for performing arithmetic or logic operations on the data

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {13}

>```ADD R0, R0, 1``` add the value in register 0 and 1. Store the result in register 0

## Branching

<<< @/Assembly/_CodeSnippets/HelloWorld.asm {5,6,9,10,15,17,18,19}

>```Main  LDR R1, R0, #0``` sets the label **Main**. It is used on line 15
>
>```BRz Done``` jumps to line 17 if the result was 0
>
>```WAIT1 	LDI R5, DSR``` sets the label **WAIT1**. It is used on line 10
>
>```BRzp WAIT1``` jumps back to line 9 if the result was zero or positive
>
>```BR Main``` jumps back to line 5
>
>```Done 	LD R0, NewLine``` sets the label **Done**. It is used on line 6
>
>```WAIT2 	LDI R1, DSR	``` sets the label **WAIT2**. It is used on line 19
>
>```BRzp WAIT2``` jumps back to line 18 if the result was zero or positive

## Conclusion