---
title: Loading Data into Registers
parent: Getting Started
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

<iframe width="560" height="315" src="https://www.youtube.com/embed/aY8B3KnanMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

An LC-3 assembly programs can only perform operations on data in the *General Purpose* registers

![LC3Tools Simulator Registers](/images/LC3/LC3Tools_Simulator_Registers.png)
These 8 registers, names **R0** through **R7**, are the program's working area. If a program needs to perform any arithmetic or logical function on data, the program must first load the data into a register

## Immediate Values
An Immediate Value is essentially a hard-coded, constant value. The value is copied into the designated register

<<< ../_CodeSnippets/QuickStart/ImmValue.asm {2-3 asm}

> The first line sets R0 to 0. The program does not assume a register is zero, so makes it zero
> 
>The second line can safely add the existing value (0) with the immediate value (5) and store it back in R0
>>This overwrites R0. It's previous value is lost

:::tip Immediate Values have a Limited Range
Immediate values are limited to 5 bits. In the LC-3's 2's complement system, this means the the programmer is limited to -16 to +15

For smaller or larger values, we will need to allocate memory
:::

## Load from/ Store to Memory
Memory locations in LC-3 contain 16 bits of data. In the 2's complement system, this means a single memory location can contain a value between -32,768 to 32,767

### Allocate and Define Memory
Memory should be allocated below the ```;Data Declarations-------------``` section of the Assembly Template. This will help make the code easier to read and debug

<<< ../_CodeSnippets/QuickStart/LD.asm {10-13 asm}

> **MyData1** allocates 1 memory location and fills it with a 10<sub>10</sub>
>
> **MyData2** allocates 1 memory location and fills it with a FF<sub>16</sub>
>
> **MyData3** allocates 1 memory location and fills it with a 1011010000101111<sub>2</sub>
>
> **Result** allocates 1 memory location, but does not fill it. It is set to zero by the assembler

Memory can be filled using any of these 3 number bases. Memory stores all values as binary, however the decimal (#) and hex (x) options are provided to make code easier to understand my humans

### Loading Allocated Memory into Registers

The **LD instruction copies data from a named memory location into a register

<<< ../_CodeSnippets/QuickStart/LD.asm {2-4 asm}

>R0 is loaded with the value in MyData1 (#10)
>
>R1 is loaded with the value in MyData2 (xFF)
>
>R2 is loaded with the value in MyData3 (b1011010000101111)

With data in these registers, the LC-3 can perform operations on this data

### Storing Registers into Allocated Memory

The *ST* instruction copied the value from a register into a named memory location

<<< ../_CodeSnippets/QuickStart/ST.asm {7,15 asm}

>After loading R0 and R1 with data from 2 memory location, the values are added and the result is stored in R3
>
>The value in R3 is then copied to the named memory location **Result**

## Condition Code Register

All Load instructions set the Condition Code (CC) register at the end of executing the instruction

<!-- @include: @/TextSnippets/LC3/CCRegister.md -->