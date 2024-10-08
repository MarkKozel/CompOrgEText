---
title: Pioneers - Alan Turing
parent: Foundations
description: Theories and Influence of Alan Turing
pageClass: Topic
tags: [Turing, General Purpose Computer, Theory, State, State Machine]
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**


<KeyConcepts :ConceptArray= "[
{
  Concept:'A Theoretical General Purpose Computer',
  Details:'While the technology did not exist to build his vision, Turing, nevertheless, defined the components and interactions needed to create a general purpose computer'
},
{
  Concept:'Maintaining State',
  Details:'The state machine is the heart of Turing\'s theory, allowing a computer to operate based on changing inputs and internal events (state changes)'
},
{
  Concept:'The Turing Machine',
  Details:'The theoretical model that defined the actual creation a decade later'
}
]" />

## Introduction

Alan Turing (1912 - 1954) was an English mathematician, cryptographer, and creator of theoretic computer science. His legacy as a scientist, philosopher, and world war 2 code breaker lives on in scientific and popular culture.

::: tip Life of Alan Turing
[Alan Turing - Wikipedia](https://en.wikipedia.org/wiki/Alan_Turing) - June 23, 1912 - June 7, 1954
:::

Among his many contributions to computer science, he imagined a machine that could run any program, solve any problem, and, without the technology to build one, designed the first draft of the modern computer architecture.

*Turing Machines Explained - Computerphile*
<p>Turing Machines are the basis of modern computing, but what actually is a Turing Machine?</p> <p>Assistant Professor Mark Jago. Copyright CC BY International</p> 
<iframe width="640" height="360"  src="https://www.youtube.com/embed/dNRDvLACg5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## A Theoretical General Purpose Computer

While not a new idea, [the first general purpose digital computers](https://en.wikipedia.org/wiki/History_of_computing_hardware#Advent_of_the_digital_computer) were decades away in the 1930's when Turing described his simple *stored-program computer*. Turing would describe the elements needed and the mechanism to maintain information (states) during program execution.

## The Turing Machine

In 1936, Turing revealed his theoretical *automatic machine* or *a-machine*. It would later be called the **Turing Machine**

Without the technology to build a prototype, Turing defines components that we recognize today as a modern computer

![Physical Turing Machine](/images/Foundations/Turing/1080px-Turing_Machine_Model_Davey_2012.jpg)
<center>Physical model of a Turing Machine</center>

By Rocky Acosta - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=24369879

### Tape
The *Tape* is an infinitely long read/write ledger of data. It is made up of cells, each containing a single symbol that the machine understands.

We'd recognize the *Tape* in today's computers as data stored in RAM/External storage.

### Head

The *Head* can read/write symbols to/from the tape. It can move the tape as ordered by the Instructions.

### State Register

As the Turing machine runs, it maintains a current state, based on reading from the tape. The state drives the next instruction to execute. The *State Register* holds the current state for reference.

While the State Register is a simple storage device, it functions as the modern Controller. It drives what happens each instruction cycle

### Instructions

Each instruction can both *react* to previous events and *act* to modify the machine for future instructions. When executed, an instruction first reads the State Register. Next it reads the data at the current head position. With these two (2) pieces of information, the instruction *may* cause in one (1) or more of the following actions:
- State change
- Update to data on the tape at the current head position
- Movement of the head one (1) position left or right

Together a set of *Instructions* make up the program that runs on a Turing Machine. It is equitant to modern computer programs, although considerably simpler.

Instructions makes Turing Machines **General-Purpose** computer.

A program in a simple Turing Machine contains rows of states. Based on the current state, the correct row is *executed* and the state is updated for the next instruction cycle.

## Sample Turing Program

The Turing Machine instruction system is as follows: 
1. Read *symbol* from current head position
1. Use *State Register* S<sub>0</sub> and newly read *symbol* to select program row to execute
1. Following selected program row:
    - Write *symbol* (Wt) to tape
    - Move *Head* Mv direction
    - Set *State Register* to S<sub>1</sub>

| S<sub>0</sub> | Rd  | Wt  | Mv  | S<sub>1</sub> | Description                                                                                                                                                   |
| ------------- | --- | --- | --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A             | -   | -   | Lt  | B             | If in state **A** -and- **blank** is read from the Tape: <br>1) Write *blank* to the tape, <br>2) Move Head to the Left 1 space, and <br>3) Switch to B State |
| A             | 0   | -   | Rt  | A             | If in state **A** -and- **0** is read from the Tape: <br>1) Write *blank* to the tape, <br>2) Move Head to the Right 1 space, and <br>3) Stay in A State      |
| A             | 1   | -   | Rt  | A             | If in state **A** -and- **1** is read from the Tape: <br>1) Write *blank* to the tape, <br>2) Move Head to the Right 1 space, and <br>3) Stay in A State      |
| B             | -   | 1   | Rt  | C             | If in state **B** -and- **blank** is read: <br>Write *1*, Move Right, Switch to C State                                                                       |
| B             | 0   | 1   | Lf  | C             | If in state **B** -and- **0** is read: <br>Write *1*, Move Left, Switch to C State                                                                            |
| B             | 1   | 0   | Lf  | B             | If in state **B** -and- **1** is read: <br>Write *0*, Move Left, Switch to C State                                                                            |
| C             | -   | -   | Lf  | HALT          | If in state **C** -and- **blank** is read: <br>Write *blank*, Move Left, **HALT**                                                                             |
| C             | 0   | -   | Rt  | C             | If in state **C** -and- **0** is read: <br>Write *blank*, Move Right, Stay in C State                                                                         |
| C             | 1   | -   | Rt  | B             | If in state **C** -and- **1** is read: <br>Write *blank*, Move Right, Stay in C State                                                                         |


## Animated Turing Machine

Below is an animation of a simple Turing Machine.

This example has 3 states (A, B, and C) and 2 symbols (0, and 1).

The purple bar shows the instruction being executed.

![Animated Turing Machine](/images/Foundations/Turing/Turing_machines_06-1.gif)

Source: https://www.futurelearn.com/info/courses/how-computers-work/0/steps/49259

## Turing Machine Simulator

Check out this simple simulator by Anthony Morphett
[Morphett.info Turing Machine Simulator](http://morphett.info/turing/turing.html)

1. Select *Load and Example Program* and select **Binary Addition**
1. In the *Initial Input* field, enter **100 1110** (4 and 14 in base 10, note the space between the two values)
1. Click *Reset*
2. Click *Run*
3. The machine will execute the programs and the Tape should display **10010** (18 in base 10)

Repeat the steps, but use the *Step* button to see each *Instruction Cycle* of the Turing Machine

[Link to GitHub project](https://github.com/awmorp/turing)

## Conclusion

Turing defined a theoretical general purpose computer with the basic components used in today's actual computers.

Using a State Machine made the design general. Changing the state machine (effectively a program) made the Turing Machine a general purpose system.

Use of a Tape to supply data into the computer and update data as the program ran was a key to simple design.