---
title: Representing Non-Numbers in Binary
parent: Number Systems
description: Using bits to represent useful non-numeric data
pageClass: Topic
tags: [ascii, unicode, text]
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Numbers are used to represent letters',
  Details:'ASCII provides a standard way to map numbers to alphanumeric values, as well as punctuation and special characters'
},
{
  Concept:'Computer architectures are number based',
  Details:'To present ASCII (or UniCode) characters, the architecture and the assembly program must manage the numbers they intended to represent characters'
  },
]" />

::: details Terms
!!!include(TextSnippets/Foundations/NumberSystems_Terms.md)!!!
:::

## Introduction

## ASCII

The **American Standard Code for Information Interchange** (ASCII) standard defines printable and non-printable text characters for telecommunication equipment. The standard was initiated in the early 1960s to define how digital equipment could consistently communicate information, primarily for human consumption.

[ASCII overview](https://en.wikipedia.org/wiki/ASCII)

This standard defines 8-bit strings used to transmit text characters between systems. ASCII values 32 - 126 are the [printable characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters)

The standard include some control standards used to send configuration or command actions to the receiving equipment. 

> Examples ASCII value 7 is the **BEL** command. When sent to another system, such as a printer, it would cause the receiving device to sounds an audible alarm to notify the operator of something, such as *print job is done*

ASCII values 0 - 31 & 127 are commands. 

### ASCII Table

![ASCII Table](/images/NumberSystems/1280px-ASCII-Table-wide.svg.png)
CC Attribution-ShareAlike License 3.0. Wikimedia Foundation, Inc., a non-profit organization.

## Unicode

ASCII is limited to english characters and punctuation characters. In addition, as communication between devices changed with networks, the simple command character were no longer needed. In the late 1980s Xerox and Apple engineers began on a standard to represent characters and languages from around the world.

As of Unicode version 14.0, September 2021, the standard represents 159 different *scripts* or character sets and 144,697 individual characters.

::: readmore Unicode 
[Wikipedia](https://en.wikipedia.org/wiki/Unicode)
:::

## Conclusion

Computer architectures can convert numbers to characters when instructed by the assembly program. The architecture does not store actual characters, but numbers that refer to characters on the ASCII or UniCode standard.

Assembly programmers must be aware of how an architecture converts between numbers and characters to ensure it is performed when required by the program.