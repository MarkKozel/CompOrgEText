---
title: Pioneers - Claude Shannon
parent: Foundations
description: The decision to use binary
pageClass: Topic
tags: [Claude Shannon, Binary]
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

# {{ $frontmatter.title }}

#### {{ $frontmatter.description }}

<KeyConcepts :ConceptArray= "[
  {
  Concept:'Choosing the right data type for digital computers',
  Details:'Claude Shannon recognized the important traits required for digital data processing'
},
{
  Concept:'Binary becomes the core data type',
  Details:'Based on the needs of digital computers to handles are share data, binary was the best option'
},
]" />

## Introduction

Claude Shannon (1916 - 2001) was an American mathematician, electrical engineer, and considered the father of Information Theory

As part of his master's thesis in 1937, Shannon expanded George Bool's *Boolean Algebra* to include *switching logic*, a set of methematical tools to analyse and degign circuits using algebraic operations. In his work, Shannon layed out the basis of digital circuit design and the use of binary as the underlying *language* of digital hardware

::: tip Life of Claude Shannon
[Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon) - April 30, 1916 to February 24, 2001

:::

## Key Elements of Binary

Technology was primarily analog-driven at the start of the 20th century. With electricity, voltage was used to represent *information*. 
- A voltage above a certain level, say 10v, would be considered a *high* or *on* indication
- A voltage of zero (0) represents *low* or *off*

Because voltage exists in an infinite number of levels, it is an analog signal. In the above example, what value would 0.3v or 8.7v mean?

When voltage transitions from *low* to *high* it is not a smooth line on a graph

![Binary vs Voltage graph](http://computerscience.chemeketa.edu/cs160Reader/_images/binary_w_noise.gif)

*credit: Introduction to Computer Science using Java by Bradley Kjell (CC BY-NC 3.0)*

Claude Shannon realized that existing information media, such as voltage in a wire, would not suit the incoming digital revolution. He recognized four (4) advantages of the binary number system that led to it's adoption into modern digital computers.

### Simple

At its heart, binary values are simple. Digital circuits would be simple, needing to send/receive *on* and *off* signals.

A binary digit being either a **1** or **0** is just about as simple as a number system can be. 

### Unambiguous

Digital information needs to clearly be in one of the two simple states. In-between values would cause performance issues at best and degradation of information at worst.

Binary does not have values between **0** and **1**. There is no *0.1* value in this system. This provides the exactness that digital information needs.

### Flawless copies

Integrity of the data is a key goal of information theory. Data that cannot be transferred (copied from one storage device to another) reliably has little or no use.

Copying binary values can be performed with simple circuits and, if needed, is simple to verify.

## Conclusion

Identifying binary as the data type for digital computer made the data *simple*, allowing for digital circuit to be fast.

Binary, by its nature, is unambiguous with only two (2) possible values. 

Because Shannon was working on Information Theory, he insisted that digital data be flawlessly copied. Binary allowed simple circuits to move data easily and reliably.
