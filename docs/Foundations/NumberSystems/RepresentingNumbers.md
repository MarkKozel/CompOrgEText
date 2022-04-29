---
title: Representing Numbers in Binary
parent: Number Systems
description: IN WORK, DO NOT USE YET
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Concept 1',
  Details:'  '
},
{
  Concept:'Concept 2',
  Details:'  '
  }
]" />

## Introduction

The following table is a quick reference between binary and decimal numbers 0 - 15. For unsigned decimal numbers, 4 bits is all that in needed to represent 0 - 15

!!!include(TextSnippets/Foundations/fourbit_table.md)!!!

## Unsigned Integers

Using the conversion algorithm we learned in [Binary Values](BinaryValues.md#converting-to-base-10), you can verify the above table. Each binary value converts to the corresponding decimal l value.

::: details Binary to Decimal Algorithm
!!!include(TextSnippets/Foundations/Algo_unsigned_bin2dec.md)!!!
:::

The number of decimal values that can be represented in a fix number of binary digits (bits) is 2<sup>num of bits</sup>. The minimum value is 0 and the maximum is is 2<sup>num of bits</sup>.
> 4 bits can represent 2<sup>4</sup> or 16 values.  0 to 15<sub>10</sub>
> 
> 16 bits can represent 2<sup>16</sup> or 65536 values.  0 to 65535<sub>10</sub>

## Signed Integers

To be truly useful, we need to be able to represent negative (signed) values in binary. In order to accomplish this, we will sacrifice 1 bit to stand in for the +/- sign.

Before proceeding, we need to understand how to add 1 binary values. It is just like adding 2 decimal numbers:

::: left
!!!include(TextSnippets/Foundations/add_binary_numbers.md)!!!

:::

### The Sign Bit

Computer designers chose the most significate bit to represent the sign of the remaining bits. **0** in the left most **Sign Bit** position indicates a positive value for the entire bit string. A **Sign Bit** of **1** indicates a negative value.

We can still represent 2<sup>num of bits</sup> values with a **Sign Bit**, however the maximum value represented is now 2<sup>num of bits - 1</sup>
> 4 bits can represent 2<sup>4</sup> or 16 values.  -8 : +8<sub>10</sub>
> 
> 16 bits can represent 2<sup>16</sup> or 65535 values.  -32786 : 32786<sub>10</sub>

!!!include(TextSnippets/Foundations/fourbit_table_signbit.md)!!!

We can see in this updates table that 111<sub>2</sub> is still 7<sub>10</sub>, however with the sign bit is 1 (**1**111), the value is -7<sub>10</sub>. Check a couple of other values...for any two values where the three (3) least significate bits are the same, it is the same value, but positive is the **sign bit** is **0** and negative if it is **1**.

::: details Do you see any problems with this new table?
- Mainly there are two (2) bit strings that represent zero (0)
- And one if this is a negative zero (-1)
:::

### 2's Complement

To fix these issues, signed binary values use a conversion algorithm called **2's Complement**

!!!include(TextSnippets/Foundations/fourbit_table_twoscomplement.md)!!!

These conversions are generated using the 2's complement algorithm:
::: left
!!!include(TextSnippets/Foundations/twos_complement.md)!!!
:::

Use the above algorithm to test yourself
::: details What is the 2's complement value for +25<sub>10</sub> (011001<sub>2</sub>)

| Step | bit value | decimal value |
|-|-|-|
|Starting Value| 011001 | 25 |
|Flip the Bits|100110| n/a |
|Add 1|100111| -25|

:::

**Twos complement: Negative numbers in binary - Ben Eater**
<iframe width="640" height="360"  src="https://www.youtube.com/embed/4qH4unVtJkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

## Fixed-Point

## Conclusion