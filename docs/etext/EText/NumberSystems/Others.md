---
title: Other Number Systems
parent: Number Systems
description: IN WORK, DO NOT USE YET
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Base 8 is a compact means to representing binary values',
  Details:'With a little understanding, hardware and software practitioners can translate between Hex and Binary '
}
]" />

## Base 8

::: bythenumbers Base 16 Number System
|Property|Value|
|-|-:|
|# of symbols|8|
|Symbol Range|0 - 7|
|Symbols|0 1 2 3 4 5 6 7|
|Place Value Factor|8|
:::

### Converting to Base 10

The algorithm used to convert from Binary to base 10 works here, just changing the base to 16. We also need to use the lookup table (above) to convert each Hex value to Decimal

![Convert to Base 10](/images/NumberSystems/Base16_ConvertToBase10.png)

**Algorithm**

Recall that number positions in a number string start at zero. So the value in the 1st position is said to be in *position 0*

Also, we will be raising 16 to the power of the position, because the original number is in Base 16

1. Convert each Hex value to Base 10 using the lookup table
1. Multiply the resulting Base 10 value by 16 raised to the power if the value's position
1. Add the result to the final Decimal result
1. Repeat for all Hex values

::: tip You'll Need a Calculator for this
Raising 16 to increasing powers is not easy to do in your head. And, in the above example, you may notice each Hex place value grows substantially. This is why Base 16 results in very compact numbers that represent large Decimal values
:::

16^2

### Converting to/from Octal

![Convert to Base 10](/images/NumberSystems/Base16_ConvertFromBase2.png)

This is where Hex is that *compact* representation of binary

Each Hex value represent 1 4-bit Binary string. And a 4-bit Binary value can be represented by a single Hex value

|Binary|Decimal|Hex||Binary|Decimal|Hex|
|-|:-:|:-:|-|-|:-:|:-:|
|0000|0|0||1000|8|8|
|0001|1|1||1001|9|9|
|0010|2|2||1010|10|A|
|0011|3|3||1011|11|B|
|0100|4|4||1100|12|C|
|0101|5|5||1101|13|D|
|0110|6|6||1110|14|E|
|0111|7|7||1111|15|F|


## Conclusion