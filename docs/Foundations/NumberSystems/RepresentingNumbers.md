---
title: Representing Numbers in Binary
parent: Number Systems
description: IN WORK, DO NOT USE YET
pageClass: Topic
tags: [2's complement, unsigned, fixed point, sign bit, ]
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'We can use Binary to represent whole and fractional numbers',
  Details:'Organizing bits into standard formats, we can represent integers, fix- and floating-point fractional numbers. Each architecture defines how it maintains these values/'
},
{
  Concept:'Representing negative and positive numbers requires some additional processing',
  Details:'Number systems do not contain a symbol for negative values. When using numbers in any system we agree upon a format to indicate negative numbers. In computer architectures the use of a \'sign bit\' is the agreed upon process to including negative and positive states of a number.'
  }
]" />

::: details Terms
!!!include(TextSnippets/Foundations/NumberSystems_Terms.md)!!!
:::

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

Before proceeding, we need to understand how to add 1 binary values. We will explore this moreIt is just like adding 2 decimal numbers:

::: left
A Full Adder
!!!include(TextSnippets/Foundations/full_adder_table.md)!!!
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

| Step           | bit value | decimal value |
| -------------- | --------- | ------------- |
| Starting Value | 011001    | 25            |
| Flip the Bits  | 100110    | n/a           |
| Add 1          | 100111    | -25           |

:::

**Computer Science Series** - Binary 2 - Two's Complement Representation of Negative Numbers
<p>This is the second in a series of videos about the binary number system which is fundamental to the operation of a digital electronic computer. It covers the two's complement system of representing positive and negative integers in binary. It demonstrates how two's complement allows computers to perform subtraction operations, and explains with examples three different methods that can be used to convert negative denary numbers into binary</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/mRvcGijXI9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Sign Extension

It is probably second nature that **25<sub>10</sub>** and **00000025<sub>10</sub>** are the same value. The most significant zeros do not change the value of the number. They are unnecessary.

**-25<sub>10</sub>** and **-00000025<sub>10</sub>** are also the same and unnecessary.

2's complement binary values have a similar property, but a little different that decimal values.

>  6<sub>10</sub> = 0110<sub>2</sub> = 00000110<sub>2</sub>

We can lengthen a positive binary value by adding zeros (0) to the most significant bits without changing the value.

> -6<sub>10</sub> = 1010<sub>2</sub> = 111111010<sub>2</sub>

We can lengthen a negative binary value by adding one (1) to the most significant bits without changing the value.

In effect, the additional ones or zeros are extending the sign bit. When removing the extra bits, the original sign bit *must* be retained so that the value keeps its original sign

In computer architecture, sign extension is *not* unnecessary. As we will see in logic circuits, sometimes binary value of 16 or 32, or 64 bits long is required, even if the original bit string was shorter. A hardware circuit can copy the sign bit as many time as needed to create the desired length bit string before executing certain instructions.

## Fixed-Point

In order to represent fractional values in binary, a fixed number of the least significate bits can be designated as the fractional part. The remaining most significant bits are the whole number part

![Fixed Point](/images/NumberSystems/Base2_FixedPoint.png)

An architecture will define how many bits are used for the fractional and whole-number part. There is no bit used to hold the *decimal point* in memory. The hardware is configured to always, in the case of this example, use the 3 least significant bits.

#### **Computer Science Series** - Binary 3 – Fixed Point Binary Fractions
<p>This is the third in a series of videos about the binary number system which is fundamental to the operation of a digital electronic computer. It covers the representation of real numbers in binary using a fixed size, fixed point, register. It explains with examples how to convert both positive and negative denary numbers to and from fixed point binary format. It also covers the advantages and limitations of processors that make use of fixed point registers.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QFlbvSeBkwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The conversion from fixed point binary to base 10 fractional is the same as a whole number, however the fractions bits are multiplied by a fractional power of 2.

In base 10 we refer to the fractional digits as *10<sup>ths</sup>*,*100<sup>ths</sup>*, *1000<sup>ths</sup>* 

In binary, maybe we call these fraction bits *1-2<sup>th</sup>*,*2-2<sup>ths</sup>*, *3-2<sup>ths</sup>*. Maybe not, since these parts do not have true names.

Regardless of the names, It falls to the assembly programmer to identify bits strings that represent fixed-point values. Then the architecture can apply the correct conversion to generate the correct decimal value.

## Conclusion

Based on the architecture's design, integer and fractional values can be represented in binary. Because digital circuits do not have a decimal-place indication, the assembly program must use the architecture's rules on using fractional values.

Binary and digital circuits no have have a way to represent a negative value...only positive numbers. Using one of the value's bits to indicate the *sign* and the 2's Complement algorithm, binary values can be stored, used, and modified.