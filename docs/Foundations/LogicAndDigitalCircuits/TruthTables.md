---
title: Truth Tables
parent: Logic and Digital Circuits
description: TODO
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Truth Tables Utility',
  Details:'We can effectively see under-the-hood of a circuit by examining the circuits truth table'
},
{  
  Concept:'Inputs and Outputs',
  Details:'Inputs are combined within the circuits logic to produce a desired output' 
},
{  
  Concept:'Multiple Outputs',
  Details:'A truth table with multiple outputs is effectively multiple circuits, one for each output. The will share the same inputs' 
}
]" />

::: details Terms
!!!include(TextSnippets/Foundations/LogicAndDigitalCircuits_Terms.md)!!!
:::

## Introduction
We start with a tool to describe logic functions

The Truth Table is a notation that shows binary inputs and resulting outputs for a logic circuit. The circuit can be a basic circuit (with 2 inputs and 1 output) or a complex circuit made up of many individual logic devices.

All truth tables, and the devices they describe will have a set of inputs, the circuit that modifies the inputs, and the outputs. For simplicity, outputs are consider instantaneously generated when the inputs are applied.

## Anatomy of a Truth Table

![Anatomy of a Truth Table](/images/Circuits/TruthTable_Anatomy.png)

Inputs and Outputs are labeled with letters. The labels typically do not have any meaning associated with the inputs/outputs.

Inputs and Outputs have values as signals in and out of the device being describes by the truth table.

All inputs in a given row are applied to the circuit and product the given output.

In the above example:
 > when **a** inputs a *0* and **b** inputs a *0*, the **z** output will be *0*
 >
 > when **a** inputs a *0* and **b** inputs a *1*, the **z** output will be *1*
 >
 > when **a** inputs a *1* and **b** inputs a *0*, the **z** output will be *1*
 >
 > when **a** inputs a *1* and **b** inputs a *1*, the **z** output will be *1*

## Complex Circuits

![Complex Truth Table](/images/Circuits/TruthTable_Anatomy_Complex.png)

Truth tables can have more than 2 inputs and 1 output. In cases of multiple outputs, all inputs in a given row produce each output signal separately

In the above example:
 > when **a** inputs a *0* and **b** inputs a *0*, the **z1** output will be *0* and **z2** output will be *0*
 >
 > when **a** inputs a *0* and **b** inputs a *1*, the **z1** output will be *1* and **z2** output will be *0*
 >
 > and so on

 You can also make the above truth table 2 separate tables

 ![Complex Truth Table](/images/Circuits/TruthTable_Anatomy_Complex2.png)

 When creating a physical circuit based on this diagram, remember this is one circuit and the **a** and **b** inputs are from the same source

 We will learn how to crate physical circuits, using a virtual circuit design adn simulation tool later

## Conclusion

Using Truth Tables, we can understand how different inputs produce different outputs in the circuit being described

Reading a single row os a truth table, we see all the input values into the circuit and the expected output(s)

If a circuit/truth table produces multiple outputs, each row of inputs will product the expect outputs separately
