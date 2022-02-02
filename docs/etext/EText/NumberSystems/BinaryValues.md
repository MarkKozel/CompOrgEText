---
title: Binary Values
parent: Number Systems
description: Apply base 10 principles and practices to base 2
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Apply base 10 concepts to base 2',
  Details:'With minor changes, the same processes work with binary numbers'
},
{  
  Concept:'Converting between base 10 and base 2',
  Details:'While computers perform best in binary, humans still require results in decimal'  
}
]" />

## What is **Base 2**?

::: bythenumbers Base 2 Number System
|Property|Value|
|-|-:|
|# of symbols|2|
|Symbol Range|0 - 1|
|Symbols|0 1|
|Place Value Factor|2|
:::

Also referred to as Binary system, *Base 2* is a system commonly used by humans to refer to integer values or quantities

*Base 10* is a mathematical term for the system of counting humans have standardized on for counting things. The **2** is the number of symbols used to represent quantities

The *2* in **Base 2** identifies the largest value that can be represented in a single digit (symbol)
> Base - 1, Therefore, the largest value is a single digit is 1

## Converting to Base 10

Using Positional Notation, we can convert a Binary value to Decimal

Each Binary value, based on it's place value, is converted to its Decimal equivalent. The result of all Bit conversions are then summed to product the final Decimal value

![Convert to Base 10](/images/NumberSystems/Base2_ConvertToBase10.png)

**Algorithm**

Recall that array indexes start at zero(0). Number positions in a number string also start at zero. So the value in the 1st position is said to be in *position 0*

1. Multiply a Binary value by 2 raised to the power if the value's position
1. Add the result to the final Decimal result
1. Repeat for all Binary values

::: tip Order Does Not Matter
You probably noticed that this algorithm does not require *starting with the least- or greatest-significant Binary value

Because we are summing up the result of all the Bit conversions it does not matter the order we perform this algorithm
:::

::: tip Ignore Binary Zeros
In this algorithm a Binary value of **0** will result in a Decimal **0** to sum up

Thinking about this, it should be obvious that **0** is any number system base is the same **0**. So, in effect we can ignore zeros because they do not have a magnitude

In Logic Circuits we will see this property again. A circuit that outputs **0** volts (or **0** binary value) does not need any circuitry
:::

## Converting from Base 10

The algorithm to convert Binary to Decimal is a series of  **Divide By 2** operations, noting feeing the result into the next cycle. The remainder of each cycle becomes one of the resulting Binary digits

::: tip Remainder will Alway be a 0 or 1
It might not be obvious at first look, but dividing a Decimal number by 2 will always yield a remanded of **1** or **0**

If the Decimal value is *even*, dividing by 2 will produce a reminder of **0**

If it is *odd*, then we get a reminder of **1**

Using this effect, we can extract each Binary digit from the Decimal value...but backwards. The first remainder we gt is the least-significate Binary value
:::

![Convert to Base 2](/images/NumberSystems/Base2_ConvertFromBase10.png)

**Algorithm**
1. Divide the Decimal number by 2
1. The reminder is the least-significate Binary value
1. The result of the division is the new Decimal value to operate upon
1. Repeat steps until the result of division is 0

## Conclusion