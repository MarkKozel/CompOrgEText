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

::: bythenumbers Base 8 Number System
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
1. Multiply the resulting Base 10 value by 8 raised to the power if the value's position
1. Add the result to the final Decimal result
1. Repeat for all Hex values


## Conclusion