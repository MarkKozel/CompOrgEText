---
title: TRAP Routines
description: Built-in code for common operation
tags: []
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<KeyConcepts :ConceptArray = "[
  {
    Concept: 'TRAP Routines are Built-In',
    Details:'Code for all TRAP routines are loaded into the Simulate environment each time it is started or reinitialized'
  },
  {
    Concept: 'LC-3 uses Vector/Jump Table for calling TRAP code',
    Details:'The address (i.e. TRAP x22) is the address int the Vector/Jump Table'
  },
  {
    Concept: 'The Vector/Jump table contains code addresses',
    Details:'Each Vector/Jump table address contains the address of the start of the associated TRAP routine code'
  }
  ]" />

## Introduction

The LC-3 provides a few built-in functions to make the system easier to use. These are common routines that typical programs might use, and is provided so a programmer does not need to write their own code

LC-3 provides 2 User Input and 3 User Output TRAP routines, as well as the HALT routine to terminate execution


## LC-3 TRAP Routines

The LC-3, designed as a teaching ISA, includes TRAP functions to support general keyboard input and terminal output

<LC3Instruction opName="TRAP" :bitPattern="{OpCode:'1111', unused: '0000', trapvect8:'--------'}" :descriptions="[{OPCode:'Bits [15:12]'},{unused:''},{trapvect8:'8-bit address of Trap Vector'}]" :examples="['TRAP x23 ; Call IN trap routine', 'IN ; Call IN trap routine']"/>

Calling these routines in user code can take 1 of 2 different forms:
```
  ; These two lines call the same TRAP code
  TRAP x20  ; Get character from console
  GETC      ; Uses assembler shortcut for TRAP x20
```
Note that the address in the 1st example is the TRAP Vector, not the Code Address. This is because LC-3 uses a Vector or Jump Table to look up the address of the first line of the actual TRAP code

| TRAP Vector | Code Address | Assembler Shortcut | Purpose | Result |
| :-: | :-: | :-: | :- | :- |
|  x0020  | x0400  |         GETC | Read one input character from the keyboard and store it into R0 _without echoing the character to the console_ | After execution, R0 contains the ascii code for the character entered in the console |
|  x0021  | x0430  |          OUT | Output character to the console | Before execution, load R0 with ascii code to display in console |
|  x0022  | x0450  |         PUTS | Output null terminating string to the console | Load address (using LEA) of first charater of the string to display |
|  x0023  | x04A0  |           IN | Displays a prompt and reads one input character from the keyboard and store it into R0 _and echo the character to the console_ | After execution, R0 contains the ascii code for the character entered in the console | 
|  x0024  | x04E0  |        PUTSP | Same as PUTS except that it outputs null terminated strings with two ASCII characters packed into a single memory location, with the low 8 bits outputted first then the high 8 bits | Load address (using LEA) of first charater of the string to display |
|  x0025  | xFD70  |         HALT | Ends a user’s program | None. But does modifiy registes while execting and does not return |

## Review TRAP Code in LC-3 Simulate

:::tip You Do It - Find and Review GETC TRAP Code

1. Start the LC-3 Simulate environment. Don't load an code, just use the system are it starts up
2. Enter x0020 in Jump to box and press enter

  ![Jump to X0020](/assets/img/02_AssemblyProgramming/TRAP_JumpTox20.png)

3. Note the value in x0020 It should be x0400
4. Enter x0400 in Jump to box and press enter

x0400 is the first line of the GETC TRAP routine
:::

<QuestionMC question="What register(s) are save at the start of GETC at x0400?" answer='B' AChoice="None" BChoice="R7" CChoice="R7 and R0" DChoice="R0" rightAnswerFeedback="CWe will learn the importance of R7 in TRAP and Subroutines soon" wrongAnswerFeedback="The first line, ST R7, x0408, is the only register saves in GETC"/>

<QuestionMC question="What is the last action GETC performs before the RET line at x0404?" answer='D' AChoice="Converts the character to ASCII" BChoice="Displays the charater" CChoice="Loads R7 into x0408" DChoice="Restores R7" rightAnswerFeedback="We will learn why soon" wrongAnswerFeedback="The last line fore RET is a LD call, restoring R7 with the value it contained when GETC started"/>

<QuestionTF question="The 2 TRAP instructions that appear at x0406 and x0407 are real TRAP instruction calls" answer='false' rightAnswerFeedback="Simulate will always try to identify an LC-3 instruction, even if the memory location contains 16 bits of data" wrongAnswerFeedback="Simulate will always try to identify an LC-3 instruction, even if the memory location contains 16 bits of data. In this case, the RET at x0405 indicates the TRAP code ender here. These 2 memory locations contain data declarations GETC allocated to use while executing"/>

::: tip TRAP Routines in other Instruction Architecture Sets
TRAP routines are ISA-defined. Each ISA may provide routines to support the intended/expected use of the ISA. An ISA designed for communication might include TRAP functions to connect to external systems and support basic I/O functions
:::

## Trap Vector Table

The LC-3 reserves memory addresses x0000 - x00FF for TRAP routine lookup. The TRAP Vector Table only contains references in memory locations x0020 - x0025 for the existing 6 routines. Each address in this jump table contains the location, in memory, of the start of a given TRAP function code block

::: tip Vector Table Location
LC-3 allocated memory location x0000 - x00FF for Trap Vector entries. This sets aside 256 memory location for addresses to TRAP routines. However, LC-3 only provides 6 TRAP routines, so much of the Vector Table is empty
:::

<QuestionTF question="If the LC-3 creators wanted to move PUTS from x0450 to x0460, they would only need to change the LC-3 Trap Vector Table's Vector for PUTS?" answer='true' rightAnswerFeedback="That is the main advantage to Vector Tables...it is easy to relocate the code and update the Vector Table" wrongAnswerFeedback="The Vector Table serves as an address book for TRAP Routines. TRAP x22 will run whatever code is at the Vector entry for x0022"/>

::: tip How the LC-3 Executes a TRAP PUTS instruction
During the execution the `TRAP PUTS` instruction, the LC-3 controller 'knows' the PUTS vector entry in the table is memory location x0022. The controller requested the contents of memory location x0022, and receives the address x0450

The controller stores the current PC (instruciton after the `TRAP PUTS` instruction) in R7, and changes the PC to x0450. It then ends the instruction cycle

The next instruction cycle starts with the PC x0450, and the first line of the PUTS instruction begines a new instruction cycle
:::

Things to note:

- The Jump Table address (x0022) for PUTS contains the address (x0450) of the first line of code for the `PUTS TRAP` function
- Before the PC is changed to x0450, the LC-3 controller stashed the current PC in R7
  - Remember that R7 is used by `RET` to return back to the

### The PUTS Function

```
.ORIG x0450
	;;; Save Registers ;;;
SavRegs	ST R7, R7_Store ; Return Address
		ST R0, R0_Store ; Pointer to String to Puts
		ST R1, R1_Store
		ST R2, R2_Store

Loop	LDR R1, R0, #0; Get address of first char of string
		BRz Done ;	Char was 0, so we are done

Wait	LDI R2, DSR ;	Console available?
		BRzp Wait 	;	No, loop back and try again

		STI R1, DDR ;	Write char to console

		ADD R0, R0, #1;	Move pointer to next char in String
		BRnzp Loop ;	Loop back for next caracter

	;;; Restore Registers ;;;
Done	LD R0, R0_Store
		LD R1, R1_Store
		LD R2, R2_Store
		LD R7, R7_Store

		RET

;Data Declarations-------------
	DSR		.FILL xFE04
	DDR		.FILL xFE06
	MX0462		.FILL xF3FD
	MX0463		.FILL xF3FE
	R0_Store	.FILL #0
	R1_Store	.FILL #0
	R2_Store	.FILL #0
	R7_Store	.FILL #0
.END
```

Things to note:

1. PUTS first stores the current contents of R7, R0, R1, R2 in memory
    - R7 contains the location of the calling code's next instruction
    - R0 was set in the calling code just before calling PUTS. It contains the address of the first character to be output by PUTS
      - PUTS stores R0 at the start because it will change R0 as it prints each character
      - The calling code may expect R0 to be set like it was before it called PUTS
    - R1 and R2 are used in the execution of PUTS. Because PUTS has no way of knowing if the calling code was using these registers, it stores them to be safe
1. Next PUTS gets the first character, stored in R0 by the calling code
    - At any time R0 contains zero (0), PUTS will exit this loop as all characters have been written to the console
    - a value zero (0) is a special case to PUTS. It is the end-of-string marker
1. Expecting that R0 does not contain zero (0), PUTS waits for the console to be ready, then copies the value in R0 (an ascii number representing the character to display) to the Display Data Register
1. R0 is incremented to point to the next character in the string to display
1. PUTS unconditionally loop back to check for zero (0), and start the cycle again
1. Once R0 is loaded with zero (0), PUTS is done displaying characters
    - R7, R0, R1, and R2 original values are copied from memory back to each register
1. RET is called, and the PC is loaded with the value n R7 (the calling code's next instruction)
1. Execution continues ate the calling code's next instruction after PUTS was called

## Conclusion

TRAP Routines are defined by an ISA

Designers and implementers of an ISA write TRAP code and provide information in the ISA's Application Programming Iinterface (API) to help assembly programs find and use these utilities

LC-3 designers provide 6 TRAP routines

LC-3 TRAP routines can be called using the ```TRAP``` instruction

LC-3 Assembler can also identify special shorcut names for TRAP routines, to make code more understandable

Like subroutines, TRAP routines save registers when they start and restore them when complete

> If they did not save registers they use, the registers would be in an unpredictable state when a TRAP returns back to your program...making it virtually unusable

Also, like subroutines, ```TRAP``` routines use ```RET``` to return control back to the program that

TRAP routines may require particular register be set before calling -or- set during execution for the user program to examine after the TRAP completes