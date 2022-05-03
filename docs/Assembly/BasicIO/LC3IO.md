---
title: LC-3 Input/Output (I/O)
parent: BasicIO
description: Interacting with devices outside of the ISA
pageClass: Topic
tags: []
---

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

## Introduction

LC-3 has 1 input and 1 out device. Both devices are built-in, so no additional drivers are needed to access either one

Both devices are Synchronous and Polled 

## Keyboard Input
The built-in keyboard input device uses 2 memory-mapped addresses within the LC-3's memory space. Both addresses are near the end of memory space

| Register Mnemonic | Address | Purpose |
|-|-|-|
| KBSR | 0xFE00 | KeyBoard Status Register |
| KBDR | 0xFE02 | KeyBoard Data Register |

### KeyBoard Status Register
The KBSR is polled to determine if there is a new character for the program to read. Once the user presses a key on the keyboard, the KBSR is set to a non-zero value

> In LC-3 Simulate, the user must print the console window to the foreground before pressing a key

KBSR[15] is set to 1, making the entire register a negative value

KBSR[14-0] and not used

Therefore, to test the KBSR for a keypress is to 
1. Read the KBSR into a register
1. Check the Condition Code (CC) register
    - If CC is negative, a key was struck
    - If CC is positive or zero, loop back and read the KBSR again

### KeyBoard Data Register
When a key is pressed on the keyboard, the ASCII value for the key loaded into the KBDR. Next, the KBSR[15] is set to 1

Reading the value is simply loading the data from the KBDR address

### Example Code

@[code lang=asm{4, 8-11}](.vuepress/public/examples/Assembly/BasicIO/getChar.asm)

- Lines 4 and 5 are a simple loop, waiting for KBSR to become negative
- Once KBSR[15] is set to 1, and the entire KBSR is negative, the code falls through to line 6, where the KBDR is read into R0
- Lines 11 and 12 are data declaration to the KeyBoard Registers

## Monitor Output
The monitor works very similar to the keyboard, but, being an output device, the polling loop is checking for something different

| Register Mnemonic | Address | Purpose |
|-|-|-|
| DSR | 0xFE04 | Display Status Register |
| DDR | 0xFE06 | Display Data Register |

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
When the display device is ready it sets the DSR[15] to 1. The program can now store the ascii value for the desired character in the DDR

The display device will detect the change in DDR and write the character out to the console

### Example Code

@[code lang=asm{4, 8-11}](.vuepress/public/examples/Assembly/BasicIO/setChar.asm)

- Lines 5 and 6 are a simple loop, waiting for DSR to become negative
- Once DSR[15] is set to 1, and the entire DSR is negative, the code falls through to line 7, where the ascii value in R0 is written to DDR
- Lines 14 and 15 are data declaration to the Display Registers

## Why check the Status Register?
Checking the KBSR or DSR are necessary for the program to maintain the synchronous interface agreement the LC-3 defines for Keyboard and Display IO operations

If a program did not check the KBSR before reading data from the KBDR, it may read either
1. Zeros because no key had been pressed yet
1. The value of a previous keyboard interaction because the user has not press a new key yet

Skipping the DSR check may result in corrupting the last data sent to the display, that is still being processed by the display device yet

## Conclusion

LC-3 has a display output device and a keyboard input device. These I/O devices must be polled by user program to ensure they are ready to send/receive data with the user program.

Each device has a well-known pair of *Status* and *Data* registers, defined by memory addresses. The user program and the devices reference these addresses to share status and data.