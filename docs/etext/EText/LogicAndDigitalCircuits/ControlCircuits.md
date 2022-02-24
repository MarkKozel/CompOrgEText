---
title: Control Circuits
parent: Logic and Digital Circuits
description: TODO
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Concept 1',
  Details:'Details of concept 1'
},
{  
  Concept:'Concept 2',
  Details:'Details of concept 2' 
}
]" />

## Introduction

Control or Combination circuits are used to manage the flow of information from clock cycle to clock cycle. These groups of <a href="./BasicLogicCircuits" target="_blank">Basic Logic Circuits</a> consist of input/control bits, and one or more output bits.

Control circuits are used by the computer based on the current program instruction (assembly instructions in this course). In the course of executing a single assembly instruction, the CPU's *Control Unit* will use required control circuits to complete actions like *retrieved data*, *store data*, *add bit*, *read keyboard input*.

The *Control Unit* knows what control circuits are available, how to use them, and when to use them to execute a program instruction.  More on that when we talk about the Von Neumann Model in the next section.

## Decoder



As an example, the following Decoder *un-encodes* data based on the following truth table. 
![Decoder Truth Table](/images/Circuits/Circuit_Decoder_TT.png =300x)

![Decoder Truth Table](/images/Circuits/Circuit_Decoder_Circuit.png =300x)

![Decoder Truth Table](/images/Circuits/Circuit_Decoder_Simple.png =300x)

## Multiplexer

## Conclusion