---
title: Standard Input/Output (I/O)
parent: Assembly Programming
description: Interacting with devices outside of the ISA
pageClass: Topic
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

Modern computer hardware contains electronics for standard I/O devices. Keyboard, Mouse, NIC, and Audio are built-in to motherboards. In addition, CPUs are wired to take these signals into the ISA.

Newer technologies, such as Bluetooth, USB, and high definition video devices may be add-on hardware that the CPU cannot directly access.

> These newer technologies may be soldered onto the motherboard, but are not directly connected to the CPU

These newer devices likely require a driver to act as an interface to the CPU. Drivers interpret input and output communications, so that the CPU can send/receive data.

<QuestionTF question="Drivers are needed for any new I/O device that the CPU does not know how to 'talk' to already." answer='true' rightAnswerFeedback="Yes, this is a pretty good systems allowing computers to use new devices without needing a new CPU" wrongAnswerFeedback="Incorrect. Driver are effectively 'translators' between teh device and the CPU. Using a translator for a new device, the CPU will be able to 'understand' it"/>

Drivers are typically software designed for the devices and a particular CPU family. The access special memory areas and CPU connections to facility the communication. Drivers may be software installed on the system hard drive and manages by the operating system, or firmware burned into special integrated circuits and installed on the motherboard.

## Standard Input Devices
Keyboard - Letters and numbers, commands via keyboard

Mouse - Click on graphic elements on a display

Network Interface Card (NIC) - receive commands and data

## Standard Output Devices
Monitor - Displays data and graphic elements for user interactions

Printer - Send data to be saved as printable file or onto paper

Network Interface Card (NIC) - send commands and data

<QuestionTF question="Devices can be only an Input or an Output devices, but not both" answer='false' rightAnswerFeedback="Devices like WiFi adapters send and receive data" wrongAnswerFeedback="Some devices, like network cards are both"/> 

## Data Exchange Notification

We will refer to **Data Source** as an input device that has data for the program or the program when it has data for an output device.

**Data Destination** is the element (program or IO device) that receives the data.

There are two main schemes where the source and destination coordinate to exchange data: 1) Polling when the destination *waits* for data and 2) Interrupts where the source tells the destination it had data to send

The scheme used to exchange data it typically setup in the driver used by both sides of the exchange.

<QuestionMC question="An example of a Data Exchange Notification in a classroom setting is:" answer='D' AChoice="Two students passing a notes with jokes about the instructor's clothing" BChoice="Instructor starting the lecture" CChoice="Student starts talking during lecture" DChoice="Student raised hand to speak in class" rightAnswerFeedback="The student is letting the instructor know that wish to speak. This notify the instructor who now must decide how to respond." wrongAnswerFeedback="The other answers are related to Data Exchange, but they do not include a notification"/>

### Polling

When the Data Destination needs data and waits until the Data Source is ready to provide it, the Destination *polls* the Source for data, and waits until there is data to receive

This is common in a program that waits for keyboard input from the users before proceeding. Because the program cannot continue until the user input is received, it continually checks for an indication of data being available until there is data.

<QuestionTF question="An example of Polling in a classroom is when the instructor asks 'are there any questions'?" answer='true' rightAnswerFeedback="The instructor has stopped the lecture and is waiting for a reply. If none is received, the lecture will continue" wrongAnswerFeedback="Because the instructor stops to ask, it is polling"/> 

### Interrupts

Some programs may run as a loop, doing standard operations. These programs should never stop everything to wait for data from an input device.

For example, the a vehicle control program routinely monitors fuel usage, tire pressure, accelerator position, brake position, and many other inputs. This program can never stop to wait for updated data from the accelerator pedal because it might miss the operator pressing the brake peddle suddenly.

With programs like this, each device is configured to notify the program if there is new data. This notification is called an interrupt. Each device has a different interrupt ID (commonly referred to as an interrupt vector) that the program registers when the device first 'starts'.

When the device has new data it sends an interrupt signal with its ID. The program will finish the current instruction or function, then switch its attention to the interrupt, processing in the data.

This ensures 1) the program is never stopped waiting for data and 2) lets the program be in control of when it switches attention to the data.

<QuestionTF question="An example of Interrupts in a classroom is when a student raises their hand and the instructor gives then the 'let me finish my thought' hand gesture" answer='true' rightAnswerFeedback="The instructor knows there is something else that needs their attention. They will finish what they are doing and attend to the student soon" wrongAnswerFeedback="The student did 'interrupt' the lecture for a question. The instructor noted the request, but finished their thought before addressing the student's request"/> 

#### Interrupt Priorities 

In programs like vehicle control software, some inputs are more important than others. New accelerator or brake peddle information is more important that changing the A/C temperature setting.

Interrupts can be configured with priority settings. So when the program decided it has time to process in new data, it will choose to process more important data first, like the brake peddle. After that is handled, the program can take care of changing the A/C fan setting.

<QuestionTF question="When an instructor has two (2) students 'interrupting' the lecture, they should prioritize the interrupts by 'first hand up'" answer='true' rightAnswerFeedback="Given all things equal, this is the common courtesy way instructors handle this situation" wrongAnswerFeedback="If there is no obvious indication that one student 'should' go before the other, 'first hand up' is pretty standard stuff"/> 

<QuestionTF question="If, in the previous question, one of the students has a very frightened expression and is waving their hand franticly, the instructor should prioritize that student's 'interrupt' first" answer='true' rightAnswerFeedback="Yep. The issue the student wishes to share may be important to everyone in class" wrongAnswerFeedback="Oh, my. Wow"/> 

## Data Exchange Timing

**Data Exchange** is a general I/O interaction between the an I/O Device and the CPU. Interactions are typically Input or Output, depending on the device and how the CPU is interacting with it.

Passing data between CPU and device must occur when both systems are in a state to exchange data. There are two (2) common timing protocols used to ensure accurate data exchange.

CPU and device must both support the chosen timing protocol for successful interfacing.

### Synchronous (blocking)

Synchronous interaction causes the program to stop and wait for the I/O device to be ready for exchange. Once the device is ready, the exchange will occur, then the program continues executing.

|Pros|Cons|
|-|-|
| Program controls receiving the data | The program cannot perform any other tasks until exchange completes |
| Program can detect transmission or data errors | Program is responsible for detecting delays/timeouts|

Synchronous exchanges rely of common memory locations and/or special registers that both parties use to communicate *ready/not ready*, *data available*, and other exchange messages.

### Asynchronous (non-blocking)
Asynchronous interactions do not require the I/O device to be ready. The program will continue running other code and try the I/O interaction later.

Data is exchanged via special memory locations. This memory *buffer* is populated by the sender and read by the receiver. Size and location depend on the I/O device and type of data being exchanged.

|Pros|Cons|
|-|-|
| Program does nto need to wait for data | Buffer can be overwritten before being received |
| Size of data exchanged can vary |  |

## Conclusion

Standard input/output devices connect a computer to sensors, users, and other computers. To successfully share data, I/O devices must conform to standard protocols. These protocols are usually defined in each device's drives software.