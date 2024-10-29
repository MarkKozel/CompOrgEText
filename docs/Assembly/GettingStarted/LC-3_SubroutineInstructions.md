---
title: Subroutine Instructions
parent: Getting Started
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

<div class="iframe-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/-W1Q4OeDKT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

The LC-3 provides the ability to jump to a subroutine (like calling a function in Java) and return back to the main program

Like in Java, this is helpful when a program needs to execute the same code several times. The subroutine only has to be written and tested once, then can be executed multiple time

Assembly does not have a way to pass parameters into a subroutine, not a way to return a result back to the main program. This behavior can be emulated by using general purpose registers -or- by using memory locations

One additional difference in assembly is that general purpose registers are shared between the main and subroutine code. So when a subroutine changes it may cause issues in the main program is the original value was still needed. There is a way to safeguard this

## JSR
Unconditionally jump to a subroutine

<<< ../_CodeSnippets/QuickStart/JSR.asm {6,9,12,17-22 asm}

This subroutine uses registers to *pass in* parameters and *return* results

The subroutine us located between ```HALT``` and ```.END```

The comment above the subroutine is essential. It documents how the main program uses the subroutine (which registers to use for parameters/input and which to use for a return value/output)

The subroutine is named with a label, ```DoubleValue``` in this case. The main program prepares parameters (placing a value in R2), the calls the subroutine with ```JSR <label>```

<<< ../_CodeSnippets/QuickStart/JSRMem.asm {17,22-29 asm}

This subroutine uses memory to *pass in* parameters and *return* results

The subroutine is a little more complicated because it needs to ```LD``` the value from *Param* and ```ST``` the result to *Result* memory locations

The main program is a bit more complicated because as well. But, this is because it must copy the previous *Result* into *Param* each time so that it can keep doubling the previous value. If this subroutine was normally going to double the same value, it should be redesigned so that the main code was simpler


<<< ../_CodeSnippets/QuickStart/JSRLoop.asm {10,16,21-34 asm}

This subroutine uses a register and memory to *pass in* parameters and *return* results

Now the subroutine is more complicated because it doubles the value in *Param* based on the value in *R3*

The main program is simpler, only needing to load the value into *Param* and setting *R3* to the number of times to double

## RET

```RET``` is similar to ```return``` in Java. However it is different it 2 ways:
1. It must be the last line of the subroutine. If it is omitted, the main program will not continue executing
1. It does not allow a *return* value. If the subroutine returns a result, it must be placed in a register or memory before ```RET``` is executed

<<< ../_CodeSnippets/QuickStart/JSR.asm {22 asm}

## Safeguarding Registers
The eight (8) general purpose registers in the LC-3 are shared by the main program and all subroutines. This means if main sets a value in a register and a subroutine changes it, the value is changes forever. The main program will not know the value was changes, leading to possible errors

There are two (2) ways to prevent problems with registers when using subroutines:
1. Document the registers that will be purposefully changed by the subroutine
1. Save/Restore temp registers inside the subroutine

### Document the Registers

This safeguard does not *protect* data. It makes clear what will be modified so there are no surprised

Include a block comment at the top of the subroutine declaring all registers that will be purposefully changed by the subroutine

Purposeful changes are those that are required by the subroutine to execute. Typically those registers used to pass values into the subroutine and return results back to the main program

<<< ../_CodeSnippets/QuickStart/JSR.asm {17-19 asm}

It is up to the main program to make sure no important values in the registers identified in the subroutine's block comments

### Save/Restore Temp Registers

This safeguard does actually protect data by copying value to memory before changing a register. Then restoring the values just before the ```RET``` instruction

It is best that the subroutine save all registers it uses **and** are not listed in the subroutine block comment. These are registers the subroutine need to use to complete its function but are not part of the params or return registers

There is not guarantee that the main program is using the subroutine's temp registers. But, to be safe, the subroutine must always save/restore temp registers to ensure it does not cause an unexpected side-effect in the main program

:::tip Main program behaving weird when using subroutines?
Check that the registers used in the subroutine are either *Documented* or are being *Saved and Restored*
:::

<<< ../_CodeSnippets/QuickStart/SaveRestore.asm {21,22,33,34,38,39 asm}

>Lines 38 & 39 allocate 2 memory locations to store values of 2 registers
>
>Lines 21 & 22 save the register values into those memory location
>
>Lines 33 & 34 Restore the value from memory into the original registers

The main program will have the same values in *R3* and *R4* and not be aware they were used by the subroutine
