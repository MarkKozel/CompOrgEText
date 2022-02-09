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

## Elementary Logic Constructs

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

When applied to binary values, the *opposite* means switching the bits to their opposite values. We will refer to this as **flipping the bits**. We also refer to ths as **Negation** as it negates or *reverses* the bits.

NOT is the only operation we will discuss that takes 1 input. It operates on a single bit and *flips*.

### OR

|a|b|c|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

![OR Gate](/images/Circuits/Gate_OR.png =150x)

Applying OR to something typically means considering any one situation enough to lead to the outcome.

> We will go to the park if traffic is not too bad OR I we can get an Uber

In this example 1 or two things must be true: either traffic is low or there is an alternative way to get to the destination without driving in heavy traffic. It is also true it *both* things are true

When applied to binary values, OR compare two bits. If either bit is *1* the result to *1*. Also, both bits can be *1* to product a *1* result. The only case that *ORing* 2 bits results in *0* is when both bits are *0*. In the above real-life if traffic was heavy and there were no Uber rides available, the park trip is cancelled

### AND

|a|b|c|
|-|-|-|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

![AND Gate](/images/Circuits/Gate_AND.png =150x)

Applying OR to something typically means considering all situations must occur to lead to the outcome.

> We will go to the park if traffic is not too bad AND I we can get an Uber

In this example both things must be true: traffic is low as well as there is an alternative way to get to the destination without driving in heavy traffic. If either one of the things is not true then no park trip. If both things are not true, the trip is also off

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

### NAND

|a|b|a AND b|NOT(a AND b)|
|-|-|:-:|:-:|
|0|0|0|1|
|0|1|0|1|
|1|0|0|1|
|1|1|1|0|

![NAND Gate](/images/Circuits/Gate_NAND.png =150x)

NAND is referred to as **NOT AND**. It negates the results of the AND output. In effect it only output a *0* if both inputs are *1*

NAND is effectively feeding the output of an AND operation into a NOT operation. It is interesting that the result is *1* unless both inputs are *1*

### NOR
|a|b|a OR b|NOT(a OR b)|
|-|-|:-:|:-:|
|0|0|0|1|
|0|1|1|0|
|1|0|1|0|
|1|1|1|0|

![NOR Gate](/images/Circuits/Gate_NOR.png =150x)

NOR is referred to as **NOT OR**. It negates the results of the OR output. In effect it only output a *1* if both inputs are *0*

NOR is effectively feeding the output of an OR operation into a NOT operation. It is interesting that the result is *0* unless both inputs are *0*

## Conclusion