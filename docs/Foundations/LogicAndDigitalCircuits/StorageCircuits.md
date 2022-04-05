---
title: Storage Circuits
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

The primary function of storage circuits is to retain information between clock cycles. This is commonly called **Statefulness** as these circuits *remember* their last state for future clock cycles.

> [Download this example circuits](/downloads/Logisim/Storage.circ) to examine in [Logisim Circuit Simulation Tool](http://www.cburch.com/logisim/)

### Storage Circuit vs Gate/Control Circuit Output

Gates and Control Circuits output a value based on the current input/inputs. As soon as the inputs change, the output can change. The input value causes a part of the whole circuit to produce the output. Other sections do not produce an output that influences the overall output of the circuit.

The inputs propagate quickly through the circuit and produce the output value during a single clock cycle.

Storage Circuits also propagate the output value during a single clock cycle. However, it is not a single part of the Storage Circuit that causes the output. Instead, all parts of the circuit work together to produce the output. Think of the output as a result from the *circuit* and not a single *gate* or *section* of the circuit.

### Input Pulses

Because storage circuits hold their state, the input/inputs do not need to be maintained for the entire clock cycle. They only need to be held high or low enough to allow the value to propagate through the circuit. We will refer to this a a *pulse* or *pulsing* an input.

When examining storage circuits in Logisim, you can click an input to make it high, them click again to make the input low. The circuit will maintain the overall output, even after removing the high input.

Notice that, starting with the Set-Reset Flip-Flop circuit, we use **1** on the *Set* to cause the circuit to output a **1**. We use **1** on the *Reset* to cause the circuit to output **0**.

## Basic Flip-Flip 

Note that the simple Flip-Flop circuit, below, has the output fed back in as an input. This is a key characteristic of storage circuits, and the feature that creates statefulness.

![Simple Flip Flip](/images/Circuits/Storage_SimpleFlipFlop.png)

The an initial state (the state at power-up of the computer) of *In* is **0** . The *Out* is unknown.

Toggling *In* to **1** produces a **1** output in the *OR* gate. The **1** is fed back into the *OR* gate's 2nd input.

Toggling *In* back to **0** does not change the output, because the **1** fed back from the output keeps the *OR* gate outputting a **1**.

The Flip-Flip is essentially stuck outputting a **1**.

To be useful, a Flip-Flop circuit must easily switch between **0** and **1** based on the input value

## Set-Reset Flip-Flop

By adding a second *OR* gate and cross-connecting the gates, the Set-Reset Flip-Flop overcomes the issue of getting stuck that the *Basic Flip-Flop* experiences.

Pulse the *Set* input high to make the Set-Reset Flip-Flop hold a **1**

Pulse the *Reset* input high to make the Set-Reset Flip-Flop reset to a **0**

![Set-Reset Flip Flip](/images/Circuits/Storage_SRFlipFlop.png)

The single *OR* gate has been switched to a *NOR* gate. 

> Recall from [NOR Gate section](./BasicLogicCircuits.md#nor) that there are 2 less transistors in a *NOR*, compared to and *OR* gate

The use of *NOR* gates is required because the output to input feedback connections do not feed back to themselves, but to the *other* *NOR* gate. The outputs are cross-connected. A Set-Reset Flip-Flop built using *OR* gates will still get stuck outputting **1**

In the diagram, above, the top *NOR* gate's function is to react to the *Reset* input. The bottom *NOR* gate reacts to the *Set* input. Recall from the Introduction section, *Set* or *Reset* are pulsed to **1** to set the storage circuit to **1** or **0**.

#### Truth Table

|Set|Reset|Q|-Q|
|-|-|-|-|
|0|0|1 or 0|0 or 1|
|0|1|0|1|
|1|0|1|0|
|1|1|0|0|

Initial state of *Set* **0** and *Reset **0** is effectively an *unknown* state. Outputs can *Q* **1**/*-Q* **0** or vice-versa. 

*Set* **1** and *Reset **1** is a contradictory state that upstream circuits setting this Flip-Flop must prevent. This issue is a flaw in the Set-Reset Flip-Flip

Pulsing *Set* or *Reset* individually causes the circuit to hold a **1** or **0**

With two (2) *NOR* gates, this Flip-Flip produces 2 outputs, *Q* and *-Q*. These outputs will be opposite values, typically. The circuit's output value will be from *Q*

*Latches and Flip-Flops 1 - The SR Latch - Computer Science - UK YouTube Provider*
<p>This is the first in a series of computer science videos about latches and flip-flops..</p> <p>Copyright TODO</p> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/-aQH0ybMd3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Set-Reset Flip-Flop with Enable

The addition of two *AND* gates and the *EN* input create an **Enable** feature to the Set-Reset Flip-Flop. Using *AND* gates ensures that the *Set* or *Reset* input will only be allowed through into the core Set-Reset gates when the *EN* input is high. Once *EN* is high, the *Set* or *Reset* input behaves the same as the above circuit.

![Set-Reset Flip Flip with Write Enable](/images/Circuits/Storage_SRFlipFlopWithWE.png)

The *EN* input can prevent stray *Set*/*Reset* signals from updating the circuit. It also facilitates a delaying or coordinating updates within a clock cycle. Also, describes in the next section, it also facilitates a simple *Memory Management* construct for addressing specific circuits.

|Set|Reset|EN|Q|-Q|
|-|-|-|-|-|
|0|0|1|1 or 0|0 or 1|
|0|1|1|0|1|
|1|0|1|1|0|
|1|1|1|0|0|
|0|0|0|Last State|Last State|
|0|1|0|Last State|Last State|
|1|0|0|Last State|Last State|
|1|1|0|Last State|Last State|

### Use of Write Enable with Storage

In practice, the upstream circuit is likely directly connected to many storage circuits. To facilitate this circuit changing the correct storage circuit, each storage circuit has a write-protect capability to prevent unwanted updates.

The upstream circuit will send, for example, a *Set* to all storage circuits it is connected to, but only the one with its Write Enable *on* will allow the *Set* into its input.

![Set-Reset Flip Flip](/images/Circuits/Storage_WriteEnable.png)

Consider the 4 Set-Reset Flip-Flops in the above diagram. They share a single pair of *Set* and *Reset* inputs. Each Set-Reset circuit is shows an a high-level symbol that hides the inner-workings.

The Decoder and Selector circuits are used to *pick* one of the four Set-Reset Flip-Flips to update. The *Set* or *Reset* input to then pulsed to update the selected Flip-Flip. When examining this circuit in Logisim, notice that when the *Set* or *Reset* is pulsed, all four Flip-Flips receive the pulse. The Write Enable, connected to an output of the Decoder, prevents all but the selected Flip-Flip from allowing the pulse to, updating the state of the Flip-Flip.

A negative effect of managing Flip-Flips in groups like this is that only 1 can be updated in a single clock cycle.

*Latches and Flip-Flops 2 - The Gated SR Latch - Computer Science - UK YouTube Provider*
<p>This is the second in a series of computer science videos about latches and flip-flops.  These bi-stable combinations of logic gates form the basis of computer memory, counters, shift registers, and more..</p> <p>Copyright TODO</p> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/HxAhOETcvr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## D (Data) Flip-Flip

The primary issue with the Set-Reset Flip-Flop is the possibility of both the *Set* and *Reset* inputs being active at the same time. With some slight modifications to the Set-Reset Flip-Flop with Enable, we can remove this issue.

The Set-Reset Flip-Flop was further complicated with requiring two (2) separate actions to cause the circuit to hold a **1** or a **0**.

![Data Flip Flip](/images/Circuits/Storage_DFlipFlop.png)

The D Flip-Flop removed the *Set* and *Reset* inputs and adds the *D* input. This input simply supplied the state the Flip-Flop is to hold. The *D* input is also pulsed like the Set-Reset circuit.

The *EN* input working like the enable on the Set-Reset circuit, only allowing the *D* input into the circuit when *EN* is high or enabled.

*Latches and Flip-Flops 3 - The Gated D Latch - Computer Science - UK YouTube Provider*
<p>This is the third in a series of videos about latches and flip-flops.  These bi-stable combinations of logic gates form the basis of computer memory, counters, shift registers, and more..</p> <p>Copyright TODO</p> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/y7Zf7Bv_J74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Use of Write Enable with Storage

Like the Set-Reset Enable example, the D Flip-Flop can be managed by an upstream circuit that uses the Write Enable capability to select which D Flip-Flop to update

![Data Flip Flip](/images/Circuits/Storage_DFlipFlopWithWE.png)

Because each D Flip-Flop is simpler, the overall 4-D Flip-Flip circuit is simpler. Also, the upstream circuit does not need to protect against sending *Set* and *Reset* during the same clock cycle. The D Flop-Flop prevents this by its design.

## Using Propagation to Detect Clock Cycle Start

Recall that voltage takes time to propagate through each transistor in a gate or circuit. So, simplifying circuits to use less transistors will cause a gate or circuit to settle into its state earlier in the clock cycle.

And, it should make sense that adding more transistors will result in a gate to take longer to settle.

In the following circuit, consider what is happening inside the AND gate when the input is first set to high

![Data Flip Flip](/images/Circuits/Storage_LeadingEdgeDetector.png)

::: details Whats Going On Inside the AND Gate
The overall behavior of this AND Gate will be to output a 0 always. With 1 input always negated by the NOT Gate, the AND Gate will never receive 2 *1* inputs needed to output a *1*

With the input sending *0* into this AND gate, one input like is settled on *0* and the other (with the NOT Gate) is settled at *1* going in to the AND Gate

In the first nanoseconds after the input is it set to *1*, the top input will send the *1* into the AND Gate. Because the other input had a NOT gate inline, the *1* will continue going in to the AND Gate unto the transistors in the NOT Gate settle to *0*. In this short period before the NOT Gate settles, the AND Gate has 2-*1* inputs and will output a *1*

Quickly after the input changes, the NOT Gate will settle to *0* and the AND Gate will output *0*
:::

What this circuit does, using the delayed propagation, is to detect the Leading Edge (start) of an event. The change of an input in this example.

If, instead is connecting an input to this circuit, we connect the clock, we can detect the Leading Edge of the clock cycle.

![Data Flip Flip](/images/Circuits/Storage_LeadingEdgeExample.png)

With the Leading Edge Clock Cycle circuit connected to a D Flip-Flop's Enable line, the D Flip-Flop will automatically be write enabled at the start of a clock cycle, then disabled for the remaining time of that cycle

::: details Why 3 NOT Gates
Using more that 1 NOT Gate ensure the propagation will be long enough to pulse the write enable input

Increasing NOT Gates will lengthen the pulse. This may be needed with high-quality transistors that have low propagation times

And, NOT Gates must be in an odd-number configuration, to ensure the pulse occurs at the leading edge of the clock cycle
:::

## Conclusion