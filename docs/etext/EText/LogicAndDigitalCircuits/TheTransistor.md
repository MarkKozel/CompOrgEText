---
title: The Transistor
parent: Logic and Digital Circuits
description: TODO
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Simple Chemistry and a Little Voltage',
  Details:'Using 2 variations of silicon, transistors can physically represent the digital zero (0) and one (1) values that represent the basic numeric units'
},
{  
  Concept:'Concept 2',
  Details:'Details of concept 2' 
}
]" />

## Introduction

## P- and N-Type Transistors
Semiconductor transistors act as switches in the core of modern computers. Constructed with layers of slight variations of silicon (mixed or doped with other elements). Transistors have a control connector that provides an input into the device. The input voltage will cause the transistor to output 1) the same voltage as its input, or 2) the opposite of its input voltage

There are two (2) types of basic transistors:
- P-Type output the opposite of its input
- N-Type output the same as its input

![P- and N-Type](/images/Circuits/PNTypeElectricalFunctions.png)

Above we see that a P-Type with 2.9 volts input on the *Control* line to output 0 volts on the *Reference* line

N-Type transistors output 0 volts with 0 volts are input, and 2.9 volts out when 2.9 volts are input.

The line from *source* to *drain* is one independent electrical connection. there is a power source (not pictured) that connects these 2 lines.

The *Control* line also has another line that connects both to a power source. It is omitted from these diagrams for simplicity. In truth, the two electrical connections (*source* to *drain* and *Control* to the missing ground connection) typically share a ground or common. The two connections still operate separately



::: note
The P-Type symbol includes a circle where the *Control* line meets the *Reference* line. A circle symbol indicates *opposite* or *inverse*.

Also, *source* and *drain* lines are swapped between P- and N-Type diagrams. Finally, the V<sub>in</sub> is positive for P-Types and negative for N-Type. This is related to electrical difference, and beyond the scope of our class.
:::

## Transistors as Bits
If the power supply feeding

## Conclusion