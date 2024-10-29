---
title: LC-3 Input/Output (I/O)
parent: BasicIO
description: Interacting with devices outside of the ISA
pageClass: Topic
tags: []
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue';
import QuestionTF from '../../.vitepress/components/QuestionTF.vue';
import QuestionMC from '../../.vitepress/components/QuestionMC.vue';
</script>

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'LC-3 has a Keyboard and Display device',
  Details:'The keyboard allows a user to enter data into a user program. The display can show user prompts or resulting data'
},
{
  Concept:'LC-3 devices are Synchronous and Polled',
  Details:'When a user program interacts with a device, it must stop doing anything else, and wait for the device to be available. The user program can send or receive data, then continue executing other instructions'
}
]" />

::: details Terms
<!--@include: @/TextSnippets/Assembly/BasicIO_Terms.md-->
:::

## Introduction

LC-3 has 1 input and 1 out device. Both devices are built-in, so no additional drivers are needed to access either one

Both devices are Synchronous and Polled 

## Keyboard Input
The built-in keyboard input device uses 2 memory-mapped addresses within the LC-3's memory space. Both addresses are near the end of memory space

| Register Mnemonic | Address | Purpose                  |
| ----------------- | ------- | ------------------------ |
| KBSR              | 0xFE00  | Keyboard Status Register |
| KBDR              | 0xFE02  | Keyboard Data Register   |

<QuestionTF question="These Registers are shared by all programs running in Simulate" answer='true' rightAnswerFeedback="These registers are two memory address, and as such, and accessible by all programs" wrongAnswerFeedback=""/> 

### Keyboard Status Register
The KBSR is polled to determine if there is a new character for the program to read. Once the user presses a key on the keyboard, the KBSR is set to a non-zero value

> In LC-3 Simulate, the user must print the console window to the foreground before pressing a key

KBSR[15] is set to 1

KBSR[14-0] are not used

Therefore, to test the KBSR for a keypress is to 
1. Read the KBSR into a register
1. Check the Condition Code (CC) register
    - If CC is negative, a key was struck
    - If CC is positive or zero, loop back and read the KBSR again

<QuestionMC question="Why do you think only KBSR[15] is used rather that other bits?" answer='B' AChoice="It is easy to remember" BChoice="A '1' in bit 15 makes the whole value negative" CChoice="The other bits are already used by Simulate" DChoice="Bits 14 - 0 contain the data" rightAnswerFeedback="The user program will check for the CC register to be set to N to indicate a key was pressed. It does not matter how the other bits are set, the whole memory location is negative when bit 15 is 1" wrongAnswerFeedback=""/>

### Keyboard Data Register
When a key is pressed on the keyboard, the ASCII value for the key loaded into the KBDR. Next, the KBSR[15] is set to 1

Reading the value is simply loading the data from the KBDR address

### Example Code
<<< @/public/examples/Assembly/BasicIO/getChar.asm {5,6,11-12 asm}

- Lines 4 and 5 are a simple loop, waiting for KBSR to become negative
- Once KBSR[15] is set to 1, and the entire KBSR is negative, the code falls through to line 6, where the KBDR is read into R0
- Lines 11 and 12 are data declaration to the Keyboard Registers

## Display Output
The display works very similar to the keyboard, but, being an output device, the polling loop is checking for something different

| Register Mnemonic | Address | Purpose                 |
| ----------------- | ------- | ----------------------- |
| DSR               | 0xFE04  | Display Status Register |
| DDR               | 0xFE06  | Display Data Register   |

With a polled output device, the program must check with the device to see it it is ready for data. Once ready, the program provides the data and the display is updated

### Display Status Register
Like the KBSR, the DSR[15] is used to know when the device is ready. When the display device is ready to display a new character, it sets DSR[15] to 1

DSR[14-0] are not used

To test the DSR is ready for a new character
1. Read the DSR into a register
1. Check the Condition Code (CC) register
    - If CC is negative, it is ready
    - If CC is positive or zero, loop back and read the DSR again

### Display Data Register
When the display device is ready it sets the DSR[15] to 1. The program can now store the ascii value for the desired character in the DDR.

The display device will detect the change in DDR and write the character out to the console.

### Example Code
<<< @/public/examples/Assembly/BasicIO/setChar.asm {5-6,7,13-14 asm}

- Lines 4 and 5 are a simple loop, waiting for DSR to become negative
- Once DSR[15] is set to 1, and the entire DSR is negative, the code falls through to line 7, where the ascii value in R0 is written to DDR
- Lines 13 and 14 are data declaration to the Display Registers

## Why check the Status Register?
Checking the KBSR or DSR are necessary for the program to maintain the synchronous interface agreement the LC-3 defines for Keyboard and Display IO operations.

If a program did not check the KBSR before reading data from the KBDR, it may read either
1. Zeros because no key had been pressed yet
1. The value of a previous keyboard interaction because the user has not press a new key yet

Skipping the DSR check may result in corrupting the last data sent to the display, that is still being processed by the display device yet.

<QuestionTF question="I vow to always (in this class anyway) check the Keyboard and Display status register before accessing their data register" answer='true' rightAnswerFeedback="Excellent. That's one less thing to check when coding and debugging" wrongAnswerFeedback="Oh? Maybe re-read the previous paragraph and try again"/> 

## Conclusion

LC-3 has a display output device and a keyboard input device. These I/O devices must be polled by user program to ensure they are ready to send/receive data with the user program.

Each device has a well-known pair of *Status* and *Data* registers, defined by memory addresses. The user program and the devices reference these addresses to share status and data.