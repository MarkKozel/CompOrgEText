---
title: Anatomy of an LC-3 Program
description: Breakdown of an LC-3 Program
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

The elements of an LC-3 program are found in most modern programming languages. Students of Java, JavaScript, and/or Python will recognize many of the element names and functions.

The actual text used to represent an element, like a comment for example, is different in LC-3, but it's function is the same.

Because assembly is a low-level programming language, it does not contain all the elements of a high-level programming language, like Java. For example, assembly does not have control/looping command, such as ```if-else``` or ```while```. 

These operations can still be implemented in assembly programs, however there are no keywords/commands provided to implement them. We will have to use the limited instruction set to cause these behaviors in our code.

## Anatomy of an LC-3 Program

### Comments
Comments are included in any programming language source code to aid humans in understanding and maintaining programs. Comments are removed from the program during the assembly process

Programmers are expected to provide concise, accurate, and helpful text to explain complex or non-obvious programming constructs

As programs are changed, comments are expected to be updated to reflect changes

Comments should not contain trivial information that is obvious by reviewing the executable code

LC3 comments begin with a semicolon ( ; ). All text to the right of a semicolon will not be assembled or executed. Comments can contain any printable characters.

![LC3 Comments](/images/AssemblyProgramming/GettingStarted/Anatomy_Comments.png)

#### Block Comments
The beginning of a source code file or function/method should contain a Block Comment explaining the general purpose, function, and/or use of the code that follows

Block comments are typically formatted to stand out among the surrounding executable code

#### Inline Comments
Occasionally, it is necessary to include a comment that pertains to a single line of executable code. An inline comment can be added to provide clarity to a non-obvious operation. Avoid adding comments to every line or two lines that another developer can figure out just by looking at the executable code
|||
|-|-|
| x = x + 1  ; *Add 1 to x* | Unhelpful and obvious be reviewing the executable code |
| x = x + 1  ; *Increment bank balance* | Helpful as it reminds the developer that x contains the bank balance |

#### Structural Comments
Inline or brief block comments before a logically associated block of code. While not common in higher-level programming languages, structural comments help organize common sections of an assembly program. Common structural sections include Main Loop, Subroutines, and Data/Storage

### Beginning and Ending of a Program
Unlike higher-level programming languages, assembly code contains information that directs the processor to do certain things at the the start and end of the program. Higher-level language executables contain this information, but the developer is not required to supply this information

![Anatomy PseudoOps](/images/AssemblyProgramming/GettingStarted/Anatomy_PseudoOps.png)

#### Object Code Load Point
Pseudo-Operations (Pseudo-Ops) are assembler directives. These pseudo-ops shortcuts used by the developer to direct the assembler on some basic functions. Pseudo-ops begin with a dot (.)

```.ORIG x3000``` is the first line of any assembly source code. The assembler replaces this line with the processor-specific instruction to load the executable object code at a specific memory location

>The number (3000, in this example, is in hexadecimal format)

The example, below, directs the assembler to create the executable object code instruction to load this program at memory location 3000 hex (memory slot 12288 on base 10)

#### Processor Halt
Executable object code must contain an instruction to tell the processor that the program is complete. While early computer programs literally halted the processor (stopped the clock), today's multi-processor CPUs do not actually ‘halt’
The LC-3 ISA provides several built-in functions to make common program tasks easier. These functions are called TRAP instructions
The HALT trap instruction (also referenced by TRAP x25) is a set of 13 assembly instructions (starting at memory location xFD70) that printer a message to the console and ends execution of the program

#### End of Source Code
The .END pseudo-op informs the assembler that there are no more lines of assembly code in the source file. This pseudo-op does not add any code to the executable object code. It simply terminates the assembly process

### Executable Instructions
The assembly language program starts after the .ORIG pseudo-op. 
Each line in the source code file contains 1 assembly instruction and required operands. 
Inline comments can be placed to the right of a source code line
Block comments can be placed on separate lines within the the executable instruction block
The final line of the executable instruction should be HALT or TRAP x25

![Anatomy ExecCode](/images/AssemblyProgramming/GettingStarted/Anatomy_ExecutableStatements.png)

### Data Declarations/References
Static data and pre-defined memory blocks are ‘declared’ using pseudo-ops. 
All data declarations start with a programmer-defined label. This is essentially a ‘variable name’ that is used within the executable instructions to access the memory/data
It is recommended (and required in our class) to place all data declarations at the bottom of the source code file, between the HALT and .END lines
A Structural Comment is recommended to indicate start of data declarations, and block/inline comments are encouraged to ensure use of the data is clear
.FILL #
Allocates 1 memory slot and fills it with the # value supplied. Values can be Integer (#) or Hex (x)
.BLKW #
Allocate # number of consecutive memory slots. All slots are initialized to zero
.STRINGZ *string of characters*
Allocate a string length +1 consecutive memory slots and fill all ascii code for each character in *string of characters* The final memory slot is filled with zero to indicate End-Of-String

![Anatomy DataDeclarations](/images/AssemblyProgramming/GettingStarted/Anatomy_DataDeclarations.png)

### Labels
Labels are effectively a variable name, referring to data or a location within the program. When used in an assembly instruction, a label is replaced with the data to which it refers or a line of code to which the program will jump.

Line variable names in high-level programming languages, the developer can choose a label name, with some rules:
- Letters, numbers, and underscores are allowed
- Cannot look like another assembly element (like an instruction or pseudo-op)
- Spaces are not allowed
- Cannot look like a comment (starting with semicolon)
- Labels should be short, but meaningful
- Abbreviate if possible
- Use underscore (_) to break up words
- Should indicate what the data or code represents (Start, Result, End_Of_Loop)

![Anatomy Labels](/images/AssemblyProgramming/GettingStarted/Anatomy_Labels.png)

## Conclusion