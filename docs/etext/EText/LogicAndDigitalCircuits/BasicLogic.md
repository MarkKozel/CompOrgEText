---
title: Basic Logic
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

## Simple Logic Constructs

Basic logic operations 

### NOT

       
|a|b|
|-|-|
|0|1|
|1|0|

![NOT Gate](/images/Circuits/Gate_NOT.png =150x)

Applying NOT to something typically means considering the opposite of the original things.

> If the crowds are NOT too big, we will go to the park.

In this example we are considering (or hoping) for the opposite of a *big crowd*.

When applied to binary values, the *opposite* means switching the bits to their opposite values. We will refer to this as **flipping the bits**. We also refer to this as **Negation** as it negates or *reverses* the bits.

NOT is the only operation we will discuss that takes 1 input. It operates on a single bit and *flips*.

### NOR

#### NOR Truth Table

|a|b|a OR b|NOT(a OR b)|
|-|-|:-:|:-:|
|0|0|0|1|
|0|1|1|0|
|1|0|1|0|
|1|1|1|0|



NOR is referred to as **NOT OR**. It negates the results of the OR output. In effect it only output a *1* if both inputs are *0*

NOR is effectively feeding the output of an OR operation into a NOT operation. It is interesting that the result is *0* unless both inputs are *0*
#### NOR Transistors

![AND Gate](/images/Circuits/TransistorNOR.png =600x)

#### NOR Gate
![NOR Gate](/images/Circuits/Gate_NOR.png =150x)

We simplify the transistor diagram into a simple circuit symbol.

### OR

#### OR Truth Table

|a|b|c|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

#### OR Transistors

![AND Gate](/images/Circuits/TransistorOR.png =600x)

#### OR Gate
![OR Gate](/images/Circuits/Gate_OR.png =150x)

We simplify the transistor diagram into a simple circuit symbol.



Applying OR to something typically means considering any one situation enough to lead to the outcome.

> We will go to the park if traffic is not too bad OR I we can get an Uber

In this example 1 or two things must be true: either traffic is low or there is an alternative way to get to the destination without driving in heavy traffic. It is also true it *both* things are true

When applied to binary values, OR compare two bits. If either bit is *1* the result to *1*. Also, both bits can be *1* to product a *1* result. The only case that *ORing* 2 bits results in *0* is when both bits are *0*. In the above real-life if traffic was heavy and there were no Uber rides available, the park trip is cancelled

### NAND

NAND is referred to as **NOT AND**. It negates the results of the AND output. In effect it only output a *0* if both inputs are *1*

It is not a common logic operation we apply to everyday situation, but it has utility in the logic and computer circuits

#### NAND Truth Table
|a|b|c|
|-|-|-|
|0|0|1|
|0|1|1|
|1|0|1|
|1|1|0|

It is interesting that the result is *1* unless both inputs are *1*

#### NAND Transistors

![AND Gate](/images/Circuits/TransistorNAND.png =600x)

The NAND circuit requires 2 P-Type transistors in parallel and 2 N-Type transistors in series. **a** and **b** inputs are connected to one of the P- and N-Type transistor control inputs. In this configuration, the junction between the P- and N-Type pairs outputs the NAND logic.

#### NAND Gate
![NAND Gate](/images/Circuits/Gate_NAND.png =150x)

We simplify the transistor diagram into a simple circuit symbol.

### AND

Applying AND to something typically means considering all situations must occur to lead to the outcome.

> We will go to the park if traffic is not too bad AND I we can get an Uber

In this example both things must be true: traffic is low as well as there is an alternative way to get to the destination without driving in heavy traffic. If either one of the things is not true then no park trip. If both things are not true, the trip is also off

#### AND Truth Table
|a|b|c|
|-|-|-|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

#### AND Transistors

![AND Gate](/images/Circuits/TransistorAND.png =600x)


#### AND Gate

![AND Gate](/images/Circuits/Gate_AND.png =150x)
We simplify the transistor diagram into a simple circuit symbol

When applied to binary values, AND compare two bits. If either bit is *0* the result to *0*. If 1 bit is *0* and the other is  *1* to product is also *0* result. The only case that *ANDing* 2 bits results in *1* is when both bits are *1*. In the above real-life if traffic was heavy or there were no Uber rides available, the park trip is cancelled

### XOR

|a|b|c|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|

![XOR Gate](/images/Circuits/Gate_XOR.png =150x)

XOR is referred to as **Exclusive OR**. The difference between XOR and OR is the case where both bits as *1* results in *0*. Another way to think of this is *the two bits being compared must be **different** to result in 1*

## Complex Logic Constructs

### Adding Inputs to a Logic Circuit

### DeMorgan's Laws

Augustus De Morgan proposed a pair of comparisons in the field of boolean algebra that have an interesting application to computer organization. When applying *negation* (NOT) transformations to solution sets of AND and OR functions, he realized that negating inputs and output of one set resulted in the other.

Inverting the inputs to an OR gate, then inverting the output produces the same truth table as an AND gate.

|a|b| NOT a | NOT b| NOT a AND NOT b| NOT(NOT a AND NOT b)| a OR b|
|-|-|:-:|:-:|:-:|:-:|:-:
|0|0|1|1|1|0|0|
|0|1|1|0|0|1|1|
|1|0|0|1|0|1|1|
|1|1|0|0|0|1|1|

![XOR Gate](/images/Circuits/DeMorgans_AndToOr.png =500x)

Inverting the inputs to an AND gate, then inverting the output produces the same truth table as an OR gate.

![XOR Gate](/images/Circuits/DeMorgans_OrToAnd.png =500x)

So, with only NOT and OR gates, you can produce a circuit that outputs AND results. Using NOT and AND gates will, similarly produce OR outputs.

## Conclusion