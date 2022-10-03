---
title: von Neumann Model
parent: Assembly
description: Interacting with devices outside of the ISA
pageClass: Topic
tags: [von Neumann Model, CPU, Control Unit, ALU, RAM, MAR, MDR, IO]
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Modern computers continue to use a design from the 1940s',
  Details:'John von Neumann designed a digital computer architecture, mimicking the human body, that is still used in todays computers.'
},
{
  Concept:'Software in much more useful if it can interacts with users and other systems',
  Details:'Accepting input and providing outputs to/from a user or other system allows software to solve more complicated problems.'
}
]" />

## Introduction

## Overall Architecture

These are the key elements of the von Neumann as related to the LC-3 architecture we will be using in this course. The main components are the same across different architecture. However, the internal elements may be different is some cases.

![von Neumann Model](/images/Foundations/vonNeumann/vonNeumannModel_Complete.png)
> White Boxes - Registers
>
> Yellow Boxes - Devices
>
> Black Lines - Data Flow
>
> Red Lines - Control Signals

## CPU
The Central Processing Unit (CPU) contains the devices and register needed to complete math and logic operations. Note that this model does not include data connected directly from Memory to the CPU. Any data in Memory that is needed for the CPU must ne first loaded into the Control Unit's registers.

![von Neumann Model - CPU](/images/Foundations/vonNeumann/vonNeumannModel_CPU.png)

### Arithmetic Logic Unit (ALU)
The ALU contains complex circuits to perform mathematic operations such as addition, and logical operations like AND and NOT. 

ALUs can contain other capabilities like additional math functions and more complex logic operations. The Control Unit must know all of the ALU's capabilities and how to control the entire system when processing these operations.

### Cache
In order to maintain data from previous instruction or to allow buffering of data, the CPUs cache registers are used. Buffered data can improve performance when the CPU us performing several operations in the same data. The Control Unit does not need to load the same data before each instruction.

### Sign Ext

Some data passed to the CPU may not be the correct length (number of bits) for the ALU. The CPU can sign extend these values to ensure all data entering the ALU is formatted as required.

## Memory

One of the breakthrough concents of this model is general purpose memory. Previous designs called for separate data and program storage. This made the Control Unit simpler as it interacted with the two (2) memory devices separately. However, this required different hardware circuitry which made the hardware more complex

This model has one (1) memory device. The Control Unit and the program now must be aware of this and manage the information in memory correctly.

![von Neumann Model - Memory](/images/Foundations/vonNeumann/vonNeumannModel_Memory.png)

### RAM

The large storage array for retaining groups of bits. 

Each RAM location contains a number of bits. Each location contains the same number of bits. We'll refer to this amount as a *word*. Different architectures may use different word length. Modern computers use a power of 2 value, such as 8, 16, 32, or 64 bit work lengths.

> The LC-3 has a 16-bit word length.

Each location in RAM has an address, This is a reference to that location, and is used by the Control Unit and program to identify a location to read or write data.  The total number of addressable memory locations are also typically a power of 2 value, such 65535 (2<sup>16</sup>)

The capacity (amount) of RAM is calculated by multiplying the word length by the number of locations.

> for the LC-3, the capacity is 16 x 65536 = 1,048,576 = 1024 KB

### MAR
The Memory Address Register is used by the Control Unit to request data from Memory. The Control Unit copies a RAM address into the MAR then directs Memory to read data from that address

If the Control Unit is storing data to Memory, it places the destination RAM address in the MAR. It also copies the new value into the MDR

### MDR
The Memory Data Register is used to hold a value. If the Control Unit is storing data into a RAM location, it copied the destination address into the MAR and the new value for that address in the MDR. It then directs Memory to update RAM

When requesting data from Memory, the address of the requested RAMlocation is copied into the MAR. After Memory reads the value at the address, it is copied into the MAR for the Control Unit to retrieve.

## Input/Output
![von Neumann Model - I/O](/images/Foundations/vonNeumann/vonNeumannModel_IO.png)

## Conclusion

Modern computer architecture is based primarily on John von Neumann's designed. It is made up of five (5) components that manage program execution, memory access, performing math and logic operations, interfacing to the outside world.

With this simple and elegant configuration, this 1945's design continues to prevail. Only as we begin the next phase, quantum computers, is von Neumann's design likely fade into history.