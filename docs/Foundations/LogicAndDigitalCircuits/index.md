---
title: Logic and Digital Circuits Section
parent: Computer Organization EText
description: Putting Bits to Work in Computer Hardware
pageClass: Unit
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

### Terms Used in this Section
<!--@include: @/TextSnippets/Foundations/LogicAndDigitalCircuits_Terms.md-->

<table>
    <tr>
        <td style="width:80%" >
        <p>
  Logic is the basic decision-making language for computer hardware and software. Using the simplified binary number system, computers function in the mutually exclusive realm of *and*, *or*, & *not*.

  While this is a very simple realm, it allows computers to complete tasks very fast. This speed then allows computers to complete more tasks for a given time unit that a device that functions in an environment of base 10.

  Transistors are the lowest level computer hardware element. When supplied with a voltage, a transistor can represent a single binary value. The two standard transistor types (P-Type and N-Type) can be arraigned to function as simple logic circuits.

  Circuits are the engine that powers logic operation in computers. Each elementary logic construct can be made physical with an equally elementary circuit. These circuits are built from configurations or 4 or 6 transistors.

  More complex logic constructs can be realized in configurations of elementary circuits.

  Finally, arraigning circuits in different configurations yields control and storage devices. These elements function as Memory, Controllers, Registers, and Arithmetic Logic Units (ALU)...combined to make the modern Central Processing Unit (CPU) at the heart of modern computers.

  In this section we will discuss the Devices and Circuits layers of the Hardware/Software Abstraction Model.
</p></td>
        <td style="width:20%">
          <figure> 
            <img src="/images/General/HW-SW_Abstraction-Circuits.png"/>
            <figcaption>HW/SW Abstraction Layers</figcaption>
          </figure>
         </td>
    </tr>
</table>

## Truth Tables
Learn how to discuss and document digital logic circuit behaviors.

## The Transistor
This microscopic physical device combines simple chemistry with the properties of electric potentials (voltage) to enable modern computers to perform with speed, accuracy, and reliability.

## Basic Logic
Logic drives the decision-making capabilities of computers. From high-level programming language comparisons to low-level hardware data flow, logic enables computers to react to the dynamic nature of real-world inputs.

We review simple logic function used not only in computer science, but in everyday situations.

## Basic Circuits
Arraigning sets of transistors into parallel and series configurations they behave electronically like Basic Logic functions. These simple 4 and 6 transistor circuits create digital logic that drive the lowest levels of the digital computer hardware

## Basic Logic Circuits
Combine transistors to implement basic logic functions, such as AND and NOT.

## Designing Circuits
Creating digital circuits starts with a Truth Table, listing all digital inputs and the required outputs for each possible set of inputs. Using a simple algorithm, an equitant circuit can be created to match the starting Truth Table. 

## Control Circuits
Combining basic logic circuits creates higher-level digital control circuits that can manage data flow, move information, and orchestrate higher-level digital hardware capabilities.

## Arithmetic Circuits
Understand how basic logic circuits can implement math operations like addition and subtraction.

## Storage Circuits
Basic logic circuits can also be arraigned to maintain digital information between computer clock-cycles. This allows modern computer hardware to retain information through more complex operations that take multiple operations to complete.

<!--@include: @/TextSnippets/GetStartedByExpandingTheSidebar.md-->
