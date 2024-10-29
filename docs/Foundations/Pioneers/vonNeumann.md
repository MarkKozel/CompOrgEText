---
title: Pioneers - John von Neumann
parent: Foundations
description: The practical application of John von Neumann
pageClass: Topic
tags: [von Neumann, von Neumann model]
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

# {{ $frontmatter.title }}

#### {{ $frontmatter.description }}

<KeyConcepts :ConceptArray= "[
{
  Concept:'The von Neumann Model',
  Details:'While designing a new computer in 1945, John von Neumann defined the core components used in modern computers'
},
{
  Concept:'Computers are more like us than we realize',
  Details:'von Neumann\'s model referes to \'organs\' and \'sensory\' inputs, suggesting he modeled his architecture after the human body'
},
]" />

## Introduction
John von Neumann (1916 - 2001) was a Hungarian mathematician, physicist, and designer of a practical digital computer architecture.

In 1945, while designing the [EDVAC (Electronic Discrete Variable Automatic Computer)](https://en.wikipedia.org/wiki/EDVAC) electronic computer, von Neumann documented the first logical design of a *stored-program* digital computer architecture. As the document circulated it became known as the **von Neumann Architecture** or **Model**

::: tip Life of John von Neumann
[John von Neumann - Wikipedia](https://en.wikipedia.org/wiki/John_von_Neumann) - December 28, 1903 – February 8, 1957
:::

## The von Neumann Model

In the first draft of the EDVAC computer, the parts of the computer architecture are referred to as *organs* and an overall architecture is equated to the human nervous systems. Input and output devices were viewed as sensory input/output signals, like that of the human body.

[Scan of von Neumann's original 1st draft. See Section 2.0, page 33 (pdf page 7/8)](http://web.mit.edu/STS.035/www/PDFs/edvac.pdf)

The main architecture contains three (3) main *organs*, as well as the two (2) core *sensory* connections.

### CPU
Section 2.2, *CA*

This is a device dedicated to performing arithmetic operations. Initially basic math operations. von Neumann mentions that the capabilities can be extended to include more complex functions.

### Control
Sections 2.3, *CC*

The *Central Control* unit is loaded with sequences of steps for executing program instructions. It is the device that manages the other parts of the architecture to ensure program instructions are executed correctly.

It is, at its heart, a state machine that orchestrates all activities of the systems. The Control unit takes in a program instruction and steps the system through the procedure to complete the instruction.

### Memory
Section 2.4, *M*

Devices for storing partial solutions to complex operations. von Neumann referenced differential equations and logarithmic function as needing a place to store partial results as these operations execute.

In section 2.5 of the paper, he suggests that the memory device not be divided into separate devices based on need/function (such as data memory, static lookup memory, and program code memory), but that it be one *"organ"*. This was a major change to existing architectures of the time, that had several different storage devices for different information/functions.

### Input/Output

Section 2.6 - 2.8, *R*

Devices that transfer all numerical (and other) information to the other parts of the system. 

Input devices (referred to as **I**) are directed by human actions, like typing, inserting punch cards, feeding in magnetic tape). There were no computer networks at this time, so humans were the primary source of inputs. Todays input devices include keyboard/mouse, microphone/camera, and network cards.

Output devices (referred to as **O**) store or show final results. Devices such as punch cards and magnetic tape are called out in the paper. Today output devices include monitors, printers, thumb drives, and network cards

> Recall the *Memory* is for partial results or intermediate information created during the process of solving a complex operation

## Conclusion

von Neumann's model, based on the human nervous system, re-defined computer architecture. The interactions between *Control*, *CPU* and *Memory* are paramount in the success of computer technology.

Today's computers contain the same core elements, albeit, considerably faster and smaller.

The concepts of using a single memory system for *data* and *programs* fundamentally change how computer are built, simplifying the hardware and the architecture complexity.
