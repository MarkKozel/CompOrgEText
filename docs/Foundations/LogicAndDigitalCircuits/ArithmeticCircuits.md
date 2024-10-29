---
title: Arithmetic Circuits
parent: Logic and Digital Circuits
description: TODO
pageClass: Topic
tags: []
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Adder circuits combine bits',
  Details:'A complex adder circuit performs 2\'s complement addition on 2 sets of bit strings. In the Full Adder configuration, this circuit manages the carry function'
},
{  
  Concept:'Subtractor circuits reduce bits',
  Details:'A complex subtractor circuit performs 2\'s complement subtraction on 2 sets of bit strings. In the Full Subtractor configuration, this circuit manages the borrow function' 
}
]" />

::: details Terms
<!--@include: @/TextSnippets/Foundations/LogicAndDigitalCircuits_Terms.md-->
:::

## Introduction

Performing mathematical operations is a fundamental capability for computers. In this section we review Addition and Subtraction circuits. There are other circuits to performs other basic and complex math operations.

> [Download the Logisim Examples collection](/downloads/Logisim/LogisimExamples.zip) to examine in [Logisim Circuit Simulation Tool](http://www.cburch.com/logisim/)

## Adder

This circuit performs addition of 2 1-bit values

### Half Adder

A simplifies adder circuit handles adding 1 binary bits, producing a *Sum* and *Carry<sub>out</sub>*

The *Half* designation is because it does not handle a *Carry<sub>in</sub>*. Therefore, the Half Adder is an good circuit to learn first, but is not used in practice

|A|B|Sum|C<sub>out</sub>|
|-|-|-|-|
|0|0|0|0|
|0|1|1|0|
|1|0|1|0|
|1|1|0|1|

Following the [algorithm to create a circuit diagram from a truth table](DesigningCircuits#truth-table-to-circuit-diagram), the following circuit is created

![Half Adder Circuit](/images/Circuits/Arithmetic_HalfAdder.png)

The circuit has two (2) AND gates to handle a 0,1 and 1,0 input. Both of these inputs result in a one (1) output for *Sum*

A *Carry<sub>in</sub>* only occurs when the two inputs are both 1.

The two (2) AND gates handling 0,1 and 1,0 inputs are functioning together like an XOR gate. Therefore, we can simplify the circuit by using a single XOR gate to handle the *Sum* portion of the Half Adder.

![Half Adder Circuit](/images/Circuits/Arithmetic_HalfAdderXOR.png)

### Full Adder

To be useful in most situations, a *Full* Adder is required. It behaves like a *Half* Adder and includes *Carry<sub>in</sub>*, therefore it handles all possible inputs and outputs used to add 2 bits.

<!--@include: @/TextSnippets/Foundations/full_adder_table.md-->

![Half Adder Circuit](/images/Circuits/Arithmetic_FullAdder.png)

The above circuit has 2 sets of redundant AND gates (101 and 111). The circuit diagram simplifies to the following

![Half Adder Circuit](/images/Circuits/Arithmetic_FullAdderSimple.png)

*Full* Adders have a simplified component symbol with the same 3 inputs and 2 outputs.

![Half Adder Circuit](/images/Circuits/Arithmetic_FullAdderComponent.png)

### Rippler Adder

Connecting a series of *Full* Adders creates a circuit that will add two (2) multi-length bit strings together. The term *Ripple* denotes how the *Carry<sub>in</sub>* and *Carry<sub>out</sub>* of individual *Full* adders are chained together, connecting a *Carry<sub>out</sub>* from a less significant bit place to the next most significate bit's *Carry<sub>in</sub>*. The *Carry* results *Ripple* thought the circuit quickly (in the same clock cycle) to produce the sum of all the bits.

The *Carry<sub>out</sub>* from the last *Full* Adder is considered *Overflow* for a 4-bit system. It may set a flag for the program to check. It may connect to a *Carry<sub>in</sub>* of another 4-bit Ripple Adder circuit.

Note the initial *Carry<sub>in</sub>* (to the least significant bits being added) is hard-coded to zero (0). This first Adder is functionally a *Half* adder. However, circuit designers prefer all parts be the same, so in practice all Adders are *Full* adders.

![Half Adder Circuit](/images/Circuits/Arithmetic_RippleAdder.png)

Four (4) bits in the A bit string (designated by A<sub>3</sub>A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>) are added to the Four (4) bits in the B bit string (designated by B<sub>3</sub>B<sub>2</sub>B<sub>1</sub>B<sub>0</sub>)

Each A<sub>n</sub> and B<sub>n</sub> bit are input into a *Full* adders. The *Carry<sub>out</sub>* from the previous *Full* Adder feeds into the *Carry<sub>in</sub>* of this *Full* Adder. The A<sub>n</sub> is output.

*Ripple* Adders can be shown on a circuit diagram with multi-bit inputs and outputs

![Half Adder Circuit](/images/Circuits/Arithmetic_RippleAdderComponent.png)

## Subtractor

### Half Subtractor

Like the *Half* Adder, the *Half* Subtractor does not handle the third inputs value, *Borrow<sub>in</sub>*. 

|A|B|D|B<sub>out</sub>|
|-|-|-|-|
|0|0|0|0|
|0|1|1|1|
|1|0|1|0|
|1|1|0|0|

Following the [algorithm to create a circuit diagram from a truth table](DesigningCircuits#truth-table-to-circuit-diagram), the following circuit is created

> Reading a line from the truth table is **A - B = D, B<sub>out</sub>** was borrowed from the higher significant value.
>
>Line 2: **0 - 1 = 1 after borrowing 1**

```
  1 0        0 10 (borrowed 1 from 2's column)
- 0 1  ->  - 0 1
  ---        ---
             0 1 
```

![Half Adder Circuit](/images/Circuits/Arithmetic_HalfSubtractor.png)

The circuit has two (2) AND gates to handle 0,1 and 1,0. Both of these inputs result in a one (1) for the *Difference* output.

A third AND gate handles 0, 1 input that outputs a one (1) for *Borrow<sub>out</sub>*.

The circuit contains to two (2) AND gates for inputs 0, 1. IT can be simplified by removing the redundant AND gate and connecting the output to *Borrow<sub>out</sub>*

![Half Adder Circuit](/images/Circuits/Arithmetic_HalfSubtractorSimple.png)

Like the *Hald* Adder, the two (2) AND gates handling 0,1 and 1,0 inputs are functioning together like an XOR gate. Therefore, we can simplify the circuit by using a single XOR gate to handle the *Sum* portion of the Half Adder.

![Half Adder Circuit](/images/Circuits/Arithmetic_HalfSubtractorXOR.png)

### Full Subtractor

The missing input, B<sub>in</sub>, is added to the truth table to make if a *Full* Subtractor. This input is **1** if the previous column (1 step less significant) had to borrow from this column

|A|B|B<sub>in</sub>|D|B<sub>out</sub>|
|-|-|-|-|-|
|0|0|0|0|0|
|0|0|1|1|1|
|0|1|0|1|1|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|0|
|1|1|0|0|0|
|1|1|1|1|1|

This is a *Full* Subtractor created using the algorithm and it has been simplified.

![Half Adder Circuit](/images/Circuits/Arithmetic_SubtractorSimple.png)

Three (3) of the AND gates from the D circuit are the same for the B<sub>out</sub>, 001, 010, and 111.

*Full* Subtractors have a simplified component symbol with the same 3 inputs and 2 outputs.

![Half Adder Circuit](/images/Circuits/Arithmetic_SubtractorComponent.png)

### Rippler Subtractor

Like the Adder, Subtractors can be connected in series for create a multi-bit subtraction circuit. The 4-bit inputs and outputs work the same as the Adder

The *Borrow<sub>out</sub>* from the last *Full* Subtractor is considered *Underflow* for a 4-bit system. It may set a flag for the program to check. It may connect to a *Borrow<sub>in</sub>* of another 4-bit Ripple Subtractor circuit.

![Half Adder Circuit](/images/Circuits/Arithmetic_RippleSubtractor.png)

Ripple Subtractor can be shown on a circuit diagram with multi-bit inputs and outputs

![Half Adder Circuit](/images/Circuits/Arithmetic_RippleSubtractorComponent.png)

## Conclusion

Single-bit addition and subtraction circuits are combined into multi-bit circuits that cas operate on multiple bit strings. And, these complex circuits can carry an borrow when needed.

The *Ripple* effect of information flowing though these complex circuits quickly settle out to produce a final answer.