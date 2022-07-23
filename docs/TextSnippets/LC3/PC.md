The Program Counter (PC) register is used my Simulate to control which like of LC-3 code in a program gets executed next

The PC is initially set to the address in the ```.ORIG xnnnn``` when to load the assembled program

@[code lang=arm-asm{5-6}](@/TextSnippets/LC3/PCExample.asm)

The Condition Code (CC) register is set based on ```ADD R0, R0, #-1``` (line 4)
- If the result is negative, CC is set to N
- If the result is zero, CC is set to Z
- If the result is positive, CC is set to P

These are mutually exclusive, so one and only one condition can be true at a give time.

```BRnz Done``` (line 5) is a decision point, where Simulate will check the CC, If the CC is N or Z, then this branch will be *taken*, meaning execution will jump to the instruction at the ```Done``` label (line 7)

The branch occurs at the end of the instruction cycle for ```BRnz Done```. Simulate will change the PC to the address of the ```Done HALT``` instruction. When the next instruction cycle starts, the ```Done HALT``` instruction will be loaded and executed.

```BRP ALoop``` is another decision point. If the previous ```BR``` was not *taken* then this one might, depending on the CC. If this branch is not *taken* execution will continue at the next instruction.

If the ```BRP ALoop``` branch is taken, the PC will be set to the address where the ```ALoop``` label sits (line 4). When the next instruction cycle starts, the ```ALoop ADD R0, R0, #-1``` instruction will be loaded and executed.

If ```BRP ALoop``` is not *taken* the PC will remain at its current value. 