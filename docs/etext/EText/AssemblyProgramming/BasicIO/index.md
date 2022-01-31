---
title: Basic Input/Output (I/O)
parent: Assembly Programming
description: Interacting with devices outside of the ISA
pageType: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Software in much more useful if it can interacts with users and other systems',
  Details:'Accepting input and providing outputs to/from a user or other system allows software to solve more complicated problems.'
},
{
  Concept:'Input from users make software more dynamic',
  Details:'Programs do not require hard-coded data to solve problems if a user or other system can supply live data. Computer-controlled rocket guidance systems require real-time data from a variety of sensors to make quick decisions during launch'
},
{
  Concept:'Output to users or other systems make software more useful',
  Details:'Displaying or sending data as it changes allow users and other systems to react more quickly, and more often'
},
]" />

## Introduction

A program with hard-coded data (values defined in the source code) can only perform calculations on that data. To change data requires modifying the source code and re-compiling and assembling the code

This takes a lot of time relative to the speed at which the computer can execute the program

**Input** devices allow the program to accept data while it is running

Data may be entered from a user with a keyboard or mouse. It may also be provided from another computer device connected to the computer executing the program. Network interfaces and Bluetooth connections are common computer-to-computer connections

**Output** devices all results of a programs to be made available for use while the program runs or at completion

Monitor and printers are common output devices. Like Input, network and bluetooth are common computer-to-computer connections

## Drivers

Modern computer hardware contains electronics for standard I/O devices. Keyboard, Mouse, NIC, and Audio are built-in to motherboards. In addition, CPUs are wired to take these signals into the ISA

Newer technologies, such as Bluetooth, USB, and high definition video devices may be add-on hardware that the CPU cannot directly access

> These newer technologies may be soldered onto the motherboard, but are not directly connected to the CPU

These newer devices likely require a driver to act as an interface to the CPU. Drivers interpret input and output communications, so that the CPU can send/receive data

Drivers are typically software designed for the devices and a particular CPU family. The access special memory areas and CPU connections to facility the communication. Drivers may be software installed on the system hard drive and manages by the operating system, or firmware burned into special integrated circuits and installed on the motherboard

## Standard Input Devices
Keyboard
Mouse
Network Interface Card (NIC)

## Standard Output Devices
Monitor
Printer
Network Interface Card (NIC)

## Data Exchange Timing

**Data Exchange** is a general I/O interaction between the an I/O Device and the CPU. Interactions are typically Input or Output, depending on the device and how the CPU is interacting with it

Passing data between CPU and device must occur when both systems are in a state to exchange data. There are two (2) common timing protocols used to ensure accurate data exchange

CPU and device must both support the chosen timing protocol for successful interfacing

**Synchronous (blocking)** interaction causes the program to stop and wait for the I/O device to be ready for exchange. Once the device is ready, the exchange will occur, then the program continues executing

|Pros|Cons|
|-|-|
| Program controls receiving the data | The program cannot perform any other tasks until exchange completes |
| Program can detect transmission or data errors | Program is responsible for detecting delays/timeouts|

Synchronous exchanges rely of common memory locations and/or special registers that both parties use to communicate *ready/not ready*, *data available*, and other exchange messages

**Asynchronous (non-blocking)** interactions do not require the I/O device to be ready. The program will continue running other code and try the I/O interaction later

Data is exchanged via special memory locations. This memory *buffer* is populated by the sender and read by the receiver. Size and location depend on the I/O device and type of data being exchanged

|Pros|Cons|
|-|-|
| Program does nto need to wait for data | Buffer can be overwritten before being received |
| Size of data exchanged can vary |  |

## Data Exchange Storage

## Data Exchange Synchronization

### Polling

### Interrupts

## Conclusion