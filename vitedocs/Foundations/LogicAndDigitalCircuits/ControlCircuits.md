---
title: Control Circuits
parent: Logic and Digital Circuits
description: TODO
pageClass: Topic
tags: []
---

<script setup>
  import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue';
</script>

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Control circuits manage data flow',
  Details:'To create an orderly flow of data, complex circuits are constructed to combine data, act as switchboards, and restrict data flow'
},
{  
  Concept:'Statelessness',
  Details:'When put into action, a control circuit will receive input values and produce an output. Once that action is complete, the control circuit resets for the next use. The results of the last use are not retained for future uses' 
}
]" />

::: details Terms
<!--@include: @/TextSnippets/Foundations/LogicAndDigitalCircuits_Terms.md-->
:::

## Introduction
Control or Combination circuits are used to manage the flow of information from clock cycle to clock cycle. These groups of <a href="./BasicLogicCircuits" target="_blank">Basic Logic Circuits</a> consist of input/control bits, and one or more output bits.

Control circuits are used to execute the current program instruction (assembly instructions in this course). In the course of executing a single assembly instruction, the CPU's *Control Unit* will use required control circuits to complete actions like *retrieved data*, *store data*, *add bit*, *read keyboard input*.

The *Control Unit* knows what control circuits are available, how to use them, and when to use them to execute a program instruction.  More on that when we talk about the Von Neumann Model in the next section.

### Stateless Circuits

Circuits are sent input signals during a single clock cycle. The electrons propagate through the circuit (all the transistors in each part of the circuit) during the same clock cycle. And, within that same clock cycle, the resulting output(s) pass on to another part of the system.

Next time the same control circuit is used, it is reset. It does not *remember* its last results to use in producing then next result. This *stateless* property of control circuits. They functions control circuits provide are all simple, stand alone actions.

> [Download these example circuits](/downloads/Logisim/Control.circ) to examine in [Logisim Circuit Simulation Tool](http://www.cburch.com/logisim/)

## Decoder

Decoding is a function that converts encoded info back to its original form. The original encoding might be to make information compact (like compressing a file), converting to a different try of data (such as Digital to Analog), or using bit patterns to indicate CPU operations

We'll use the last example to talk about decoders using an over-simplified CPU.

The CPU includes the Arithmetic Log Unit (ALU). This device can perform basic math and logic operations. When the Control Unit is executing an assembly instruction, part of the instruction includes an encoded pair of bits that indicates the correct math function to execute.

### Truth Table

|A|B|D0|D1|D2|D3|
|-|-|-|-|-|-|
|0|0|**1**|0|0|0|
|0|1|0|**1**|0|0|
|1|0|0|0|**1**|0|
|1|1|0|0|0|**1**|

A and B inputs are effectively selected 1 of the 4 outputs to be active (high). The other 3 outputs will always be inactive/low. The outputs are mutually exclusive...one (1) and only one will be active based on the inputs.

With this two (2) input Decoder, there will always be 4 outputs. In order to retain the mutually exclusive state, the input/output relationship is <b> *n* inputs -> 2<sup>n</sup> outputs </b>. 

> There must always be 2<sup>*number of inputs*</sup> outputs.

### Detailed Circuit Diagram

The decoder circuit is useful to convert encoded data to the original value. Setting A and B inputs will result in a one (1) output on 1 of the 4 lines. The example below works like a switch, with the two (2) inputs mimicking the *address* of the output to light up.

<img src="/images/Circuits/Decoder_2x4.png" width="300px">

::: details Decoding ISA Arithmetic Instructions

In modern ISAs, 2 bits of an instruction might represent which basic arithmetic operation to execute. In our example 16-bit ISA, bits 7 & 8 of an assembly instruction represent the math function for the Arithmetic Logic Unit (ALU) 

<table>
  <tr>
    <td>
      |Decoded Instruction|Bits 8 & 7|Operation|
      |-|:-:|-|
      |1010110**00**1111100|00|Add|
      |1010110**01**1111100|01|Subtract|
      |1010110**10**1111100|10|Multiply|
      |1010110**11**1111100|11|Divide|
    </td>
    <td>
    <img src="/images/Circuits/Decoder_Example.png" width="300px">
    </td>
  </tr>
</table>

Bits 8 & 7 are inputs into decoder to select 1 of the 4 operations. The output of this decoder will provide input another circuit (The Operation Selector) that enables the correct arithmetic operation for the instruction.
:::

### Simplified Component

To simplify more complicate circuit diagrams, the Decoder has a symbol that hide the inner workings.

<img src="/images/Circuits/Circuit_Decoder_Simple.png" width="300px">

Like the circuit above this symbol has 2 inputs (A and B) and four (4) mutually exclusive outputs (D0, D1, D2, and D3).

## Multiplexer

A Multiplexer chooses one (1) outputs from multiple inputs. The input value is unaltered by the circuit. It will retain its current value. The *Selection* signals allow 1 of the inputs through the circuit and blocks the others.

The Selection signals are set outside the multiplexer and set to cause a particular input value to be *selected* to be output

With 4 inputs, a multiplexer requires 2 Selection inputs. **N inputs -> &Sqrt;2 selection signals**

> 2<sup>n input values</sup> require n selection signals

### Truth Table

|S1|S2|||||
|-|-|-|-|-|-|
|0|0|**A**||||
|0|1||**B**|||
|1|0|||**C**||
|1|1||||**D**|

### Detailed Circuit Diagram

The selection signals enter each AND gate with a different set of normal and inverted modifiers

Inverted signals is effective run through a NOT gate or *flipped*. Normal signals unaltered

> Note that S0 and S1 entering each AND gate have a different pair of normal/inverted settings. The first has both inputs inverted, the next has S0 inverted and S1 normal. The third has S0 normal and S1 inverted. The fourth has both normal
>
> This causes the mutual exclusive behavior when selecting an input signal to output

The four (4) input values are all normal connections. Each is allowed into the its AND gate unaltered.

<img src="/images/Circuits/Multiplexer_2x4.png" width="600px">

::: details Multiplexing ISA Arithmetic Instructions

In modern ISAs, 2 bits of an instruction might represent which data source to use. We have 4 1-bit values from 4 memory locations. In our example 16-bit ISA, bits 2 & 1 of an assembly instruction contain an address/reference for each source.

<table>
  <tr>
    <td>
    |Decoded Instruction|Bits 2 & 1|Operation|
    |-|:-:|-|
    |1010110001111**00**0|00|L1 Cache|
    |1010110011111**01**0|01|Temp Register|
    |1010110101111**10**0|10|RAM|
    |1010110111111**11**0|11|Keyboard|
    </td>
    <td>
    <img src="/images/Circuits/Multiplexer_Example.png" width="1500px">
    </td>
  </tr>
</table>

Each of the 4 source devices is sending a 1 into the multiplexer. Bits 2 & 1 from the instruction are used to select one (1) of the four (4) sources to pass on to the next circuit using the value.
:::

### Simplified Component

We can use the simpler multiplexer symbol keep our diagram clean

<img src="/images/Circuits/Circuit_Multiplexer_Simple.png" width="300px">

Input value and selection signals work the same as above

## Conclusion

Control circuits do not retain their state between clock cycles. In each cycles control circuits reset to a neutral state and react to the new set of inputs.

Decoder circuits use input bits to select one and only one output. These devices effectively select one form several options

Multiplexer (Mux) circuits are used to pick one of several external signals to allow through this circuit.