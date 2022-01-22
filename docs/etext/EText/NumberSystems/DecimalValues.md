---
title: Decimal Values
parent: Number Systems
description: Review base 10 number system and recall how you learned to perform arithmetic operations
pageType: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Base 10 Number System',
  Details:'The number system you learned in early elementary school'
},
{  
  Concept:'Why do humans use base 10 as a default?',
  Details:'Likely because we started counting with our fingers. As numbers got more complicated, we stayed with base 10'  
},
{
  Concept:'Why not use base 10 in computers?',
  Details:'Base 10 processes are too complicated to re-create in hardware and low-level software'
}
]" />

## Introduction to {{ $frontmatter.title }}

## What is **Base 10**?

::: bythenumbers Base 10 Number System
|Property|Value|
|-|-:|
|# of symbols|10|
|Symbol Range|0 - 9|
|Symbols|0 1 2 3 4 5 6 7 8 9|
|Place Value Factor|10|
:::

Also referred to as Decimal and Denary system, *Base 10* is a system commonly used by humans to refer to integer values or quantities

*Base 10* is the name for the system commonly used by modern humans to counting things. The **10** is the number of symbols used to represent quantities. Each symbol (digit) represents a single quantity in the range of symbols 0 -9.

Unlike Roman Numerals, no digit has an additive ot subtractive action on an adjacent digit

The *10* in **Base 10** identifies the largest value that can be represented in a single digit (symbol)

### Positional Notation

AKA *Place Value*

In order to  represent values larger than 9 in **Base 10** without adding new symbols, there needs to be a rule it calculate the value of an adjacent digit in a group of digits (number string)

The position of a are essentially a weighting (factor) of each single digit according to it's position in the number string

The rule is:
- digits to the left are a lessor value
- digits to the right are higher value
- The value increase/decrease is a multiple of 10

![Base10 PlaceValues1](/images/NumberSystems/Base10_PlaceValues1.png)

The **4** in 4321 is increased by *10* raised to the power of its position, *3*, in the number string. Position numbers start at 0 are increase from left to right

To calculate a single digit place value:
> Digit * 10 <sup>Position</sup>

After calculating the weighed value of each digit, sum all results for the final value

> You may have noticed this is essential converting a base 10 value to a base 10 value...so nothing really seems to change. That is true and, in a strange sort of way, proves itself
>
>We will, however, use this process/algorithm to convert other base number string to base 10

This may seem trivial, after all, you have likely known how to do this since elementary school.  However, it is important to understand the process

### Positional Notation for any Base

The positional notation works for other base number systems. The calculation for any base includes that base

![Base10 PlaceValues2](/images/NumberSystems/Base10_PlaceValues2.png)

A more general formula for converting a single digit value for a given base is:
> Digit * Base<sup>Place Value Position</sup>

Now apply the same algorithm for calculating the value of multi-digit number string (group of digits) is:
1. Perform the single digit place value for each digit and the associated base
1. Add all the results together

## Base 10 as a Human Default

It is likely that human adopted this 10 symbols to match the number of fingers on our hands...making our hands the first computation device

There is no particular importance of 10 as a number system, it is just the system most easily adopted by early humans. As humans persisted and began developing a deeper understanding of numbers, base 10 also persisted

::: readmore Base 10/Decimal Number System
[Origins](https://en.wikipedia.org/wiki/Decimal#Origin)

[History](https://en.wikipedia.org/wiki/Decimal#History)
:::

## Conclusion
