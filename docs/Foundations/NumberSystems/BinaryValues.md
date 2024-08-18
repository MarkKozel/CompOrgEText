---
title: Binary Values
parent: Number Systems
description: Apply base 10 principles and practices to base 2
pageClass: Topic
tags: [binary, binary conversion]
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

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

<iframe width="560" height="315" src="https://www.youtube.com/embed/cJNm938Xwao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: details Terms
<!--@include: @/TextSnippets/Foundations/NumberSystems_Terms.md-->
:::

## Introduction

From the Decimal Values section of the text, as well as from your early educational with numbers, you have an intuitive understanding of the *Base 10* or *Decimal* number system. In elementary school you learned counting,  *Place Value* (representing numbers larger that 9), and arithmetic operations (addition, subtractions, etc). You also learned about special situations, such as carrying when adding large numbers ans borrowing when subtracting them

Modern computers are designed to use a different number system...*Binary* or *Base 2*...to represent numbers. *Base 2* numbers have all the same functions and operations. The processes for *Base 2* are the same as for *Base 10*, but may not be as obvious or intuitive without a little practice

## What is **Base 2**?

::: tip Base 2 Number System
| Property           | Value |
| ------------------ | ----: |
| # of symbols       |     2 |
| Symbol Range       | 0 - 1 |
| Symbols            |   0 1 |
| Place Value Factor |     2 |
:::

Also referred to as Binary system, *Base 2* is a system used by computers to refer to all data, including numbers

The *2* in **Base 2** identifies the largest value that can be represented in a single digit (symbol)
> Base - 1, Therefore, the largest value is a single digit is 1

## Converting to Base 10

Using Positional Notation, we can convert a Binary value to Decimal

Each Binary value, based on it's place value, is converted to its Decimal equivalent. The result of all Bit conversions are then summed to product the final Decimal value

![Convert to Base 10](/images/NumberSystems/Base2_ConvertToBase10.png)

**Algorithm**

<!--@include: @/TextSnippets/Foundations/Algo_unsigned_bin2dec.md-->

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

## Discrete vs. Analog Values

As computer information changes from voltages in transistors to bits in memory, there is a tiny, but fundamental change in its state. It changes from an analog signal to a discrete state

signal - an analog stream that may fluctuation a small amount and remain valid

Examples:
> Dimmer Switch attached to a Light
> 
> Water flowing through a hose, controlled by a valve
> 
> Speed (velocity) a student drives to class

state - a discrete value that can change between well-defined states 

Examples:
> Light controlled by an on/off switch
> 
> Water Valve being on/off
> 
> Student attending a class meeting

## Conclusion

The algorithms we use for everyday base 10 conversion still apply, but with a small modification for the different base

The base value (Base 10 or Base 2) indicates how many unique symbols in that system. In base 10 we can count 0 to 9 before running out of symbols. We then create a new *place* in the number, set it to 1, and start counting from 0 again.

Base 2 follows these same practices, we just run out of symbols faster and have to add *place* values much more often.