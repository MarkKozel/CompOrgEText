---
title: Basic Input/Output
parent: Assembly
description: Interacting with devices outside of the ISA
pageClass: Unit
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Software in much more useful if it can interacts with users and other systems',
  Details:'Accepting input and providing outputs to/from a user or other system allows software to solve more complicated problems.'
}
]" />

## Introduction

Allowing data to be input during program execution makes software more general-purpose and able to react to varying conditions. Data can be input from a user with a keyboard/mouse, from a storage device, or externally via a network connection.

Similarly, the ability to output data during program execute provides results or problems (like error messages). Output cam be to a display device, a data or log file, or externally to a network-connected devices

## Basic Input/Output
Review the mechanics for general IO devices and protocols:

[Standard I/O](StandardIO) main page

- [Data Exchange Notification (Polled vs Interrupt-Driven)](./StandardIO#data-exchange-notification)
- [Data Exchange Timing (Synchronous vs Asynchronous)](./StandardIO#data-exchange-timing)

## LC-3 Input/Output
Here is how we interface with LC-3's Polled IO.

[LC-3 I/O](LC3IO) main page

LC-3 has 2 IO Devices:
- [Keyboard](LC3IO#keyboard-input)
- [Monitor](LC3IO#monitor-output)  