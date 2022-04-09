---
title: Your First LC-3 Program
description: Creating and Assembling Your First LC-3 Program
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
}]" />

## Introduction
In this section, you will create the classic first program, Hello World, to verify the programs are installed and running correctly.
Additionally, you will be exposed to a few of the standard conventions used in our class for writing, building, and running LC-3 program.

### Create the Hello World Program

1. Start the LC3Edit program
1. Enter the following code into the Edit Area

    ```
    .ORIG x3000
       LEA R0, HW
       PUTS
       HALT
    HW .STRINGZ "Hello, World !"
    .END
    ```

    ::: whatsgoingon
        Line 1 Defines the start of the program -and-
               the starting memory location in to which the program will be loaded
        Line 6 Defines the end of the program
        Line 5 Created a memory reference called HW -and-
               fills the memory locations with the characters "Hello, World !"
        Lines 2 - 4 are the main program
           Line 2 Loads the address of HW into the R0 register
           Line 3 Prints "Hello, World !" into the LC-3 Console
           Line 4 Ends the program
    :::
1. Save .asm source code file
    1. Click File|Save
    1. Navigate to desired folder
    1. In File name: field, enter ‘HelloWorld.asm’, then click Save button
      >HelloWorld.asm appears at the top of the LC3Edit window

### Assemble Source Code
Assembling LC-3 Source Code converts it to Object code that the Simulate program can read in and execute
1. Click Translate | Assemble or the **asm** button
1. Review the Output Area. You should see:
    ``` 
    Assembling <path to your file>
    Starting Pass 1…
    Pass 1 - 0 error(s)
    Starting Pass 2…
    Pass 2 - 0 error(s)
    ```
    :::whatsgoingon
    The LC-s Editor includes an assembler, similar to the Java compiler, that converts your assembly code source (.asm file) into a runnable LC-3 object file (.obj)

    The assembler makes the first pass through the source code to verify the syntax is correct, find variable definitions, and ensure any pseudo-ops (like .ORIG) are in the right place

    The second pass uses information from the first pass to convert each instruction into the runnable object code

    If successful, the result is a new .obj file that can be loaded into the LC-3 Simulate tool. Other files are generated, that will be discussed in a later section
    :::
1. If any errors appear, compare your source code to the code in Step 2 and fix as needed. Repeat Step 1 & 2

### Load Hello World into Simulate
1. Start the Simulate program
1. Click File | Load Program
1. Navigate to the folder in which you saved the source file
1. You will see HelloWorld.obj. Select it, then click Open
    >If you named your file something different, the .obj file will have the different name

Note 
* Simulate has loaded your program in memory location x3000
* x3000 - x300E contain NOP instructions. This is because these memory slots contain ascii codes the the letters in “Hello, World!”
* The first executable instruction is located at x300F. Compare to the 3rd line of the source code file. They should be the same instruction
* All registers are set to zero (0)
* PC and IR set to starting values

### Run Hello World Program
1. Click Execute | Run -or- F5
1. Bring the LC3 Console window into the foreground
1. You should see
    ```
    Hello, World!
    ----- Halting the processor -----
    ```

This indicates the program successfully ran because it output the “Hello, World!” was displayed
“----- Halting the processor -----” is displayed as a result of the HALT command in the source code

### Re-Run the Hello World Program
1. Click File | Reinitialze Machine
    >All registers and counters are reset, and returns to memory location x3000

    >The Hello World program is no longer in memory.
1. This is effective like rebooting the computer
1. Repeat the Load and Run instructions, above

## Conclusion