---
title: Memory Access Instructions
parent: Instructions
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'LC-3 has limited register space for ALU operations',
  Details:'For long-term storage, memory is used as it is more plentiful than registers'
},
{
  Concept:'Commonly, data is read from memory, processed, and stored back out',
  Details:'The ALU can only operate on data in a register. So it is common to load a register with data, direct the ALU to modify that register, the write the results back to memory'
}
]" />

::: details Terms
!!!include(TextSnippets/Assembly/Instructions_Terms.md)!!!
:::

## Introduction

Memory Access Commands proved capability to move data between Registers and Memory (RAM). 

Recall that [ALU Commands](ALUCommands) do not operate on date in memory. Before executing any instruction on data in memory it must first be loaded from memory into a register. ALU Commands only store results in registers, so it must be stored out to memory if needed.

**Add Two Values in Memory**

This LC-3 program adds 2 values from memory and stores it in a different memory location.

@[code lang=arm-asm{2,3,7}](.vuepress/public/examples/Assembly/Commands/addMemData.asm)

- The program allocates memory using the labels **MyVal1**, **MyVal2**, and **Result**
- **MyVal1**, **MyVal2** are assigned values
- **R1** and **R2** are loaded with data from **MyVal1**, **MyVal2** (lines 2-3)
- **R1** and **R2** are added together and stored in **R3**
- The value is **R3** is stored in memory location **Result**

Memory Access instructions used labels to name and reference memory locations. During assembly, the label names are converted to offset values. Review Labels and PCOffsets if needed, below.

::: details Labels Revisited
!!!include(TextSnippets/LC3/Labels.md)!!!
:::

::: details PCOffset Revisited
The least-significant 9 bits of the LD command is a 9-bit PCOffset values. As described in the above Label section, the assembler converts the label into this PCOffset.

!!!include(TextSnippets/LC3/PCOffset.md)!!!
:::

## LD
Load

### LC-3 ISA Format

<LC3Instruction opName="LD" :bitPattern="{OpCode:'0010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LD R3, MyVal1 ; Loads the value from memory location labeled MyVal1 into Register 3', 'LD R0, MyVal2 ; Loads the value from memory location labeled MyVal2 into Register 0']"/>

### State Machine

![BR Example](/images/AssemblyProgramming/Commands/StateMachine_LD.png)

### Explanation

LD loads from Memory into a Register. A destination register is provided to receive the value from memory. The address to load from is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

### Examples

#### Loads value from memory location MyVal1 into Register 3
@[code lang=arm-asm{2}](.vuepress/public/examples/Assembly/Commands/ld1.asm)

#### Loads value from memory location MyVal2 into Register 0

@[code lang=arm-asm{2}](.vuepress/public/examples/Assembly/Commands/ld2.asm)

#### Loads value from memory location MyVal2 into Register 0

@[code lang=arm-asm{2}](.vuepress/public/examples/Assembly/Commands/ld3.asm)

### Gotchas

None.

## ST
Store

### LC-3 ISA Format

<LC3Instruction opName="ST" :bitPattern="{OpCode:'0011', SR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{SR:'Source Register'},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['ST R3, MyVal1 ; Store value from Register 3 into memory location labeled MyVal1', 'ST R0, MyVal2 ; Loads the value from Register 0 into memory location labeled MyVal2']"/>

### State Machine

![BR Example](/images/AssemblyProgramming/Commands/StateMachine_ST.png)

### Explanation

Stores a value in a Register into a Memory location. A source register is provided to supply the value to memory. The address to store to is provided to the Memory Interface. This address is calculated based on the PC during execution of the LD instruction.

### Examples

#### Store value from Register 3 into memory location MyVal1
@[code lang=arm-asm{3}](.vuepress/public/examples/Assembly/Commands/st1.asm)

```MyVal1 .BLKW 1``` allocates 1 *word* (16-bit memory slot) and labels it *MyVal1*


**Add 1 to a value in Memory**
![LD/ST Example](/images/AssemblyProgramming/Commands/LD-ST_Example.png)

<QuestionTF question="We could make the program simpler by adding 1 directly into the value at Result (x3004)" answer='false' rightAnswerFeedback="There are no ALU instructions that access values directly in Memory. All data to be used in an ALU instruction must be ina Register" wrongAnswerFeedback="rightAnswerFeedback"/>

::: details Review what the code is doing after answering the question
- The value in **Result** (x3004) is loaded into R2 so it can be modified
    - ALU instruction cannot access Memory directly, so the value must be loaded into a register
- 1 is added to the value in R1 using **ADD**'s *immediate* mode
- The updated value in R2 wit written back out to **Result** (x3004)
    - **Result** (x3004) is overwritten by the ST instruction
    - The programmer could have preserved the starting value by storing into a different memory location
:::

<QuestionMC question="What would the programmer need to add in order to save Result in a different Memory location?" answer='B' AChoice="Use one of the other Memory Access instructions" BChoice="Add another Memory location with the .FILL PseudoOp" CChoice="Another register" DChoice="A newer version of LC-3" rightAnswerFeedback="Yes, and change the label in the ST instruction to the new label name"/>

### Gotchas

Typically the first register in the assembly instruction is the *Destination Register*. With **ST** it is the *Source Register*.

## LDI
Load Indirect

### LC-3 ISA Format

<LC3Instruction opName="LDI" :bitPattern="{OpCode:'1010', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{DR: 'Destination Register' },{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LDI R3, MyAddr1 ; Loads the value using the address in MyAddr1 into Register 3', 'LDI R0, MyAddr2 ; Loads the value using the address in MyAddr2 into Register 3']"/>

### Explanation

LDI loads from Memory into a Register. A destination register is provided to receive the value from memory. 

This differs from LD because it does not load from the *PCOffset* address. It reads *PCOffset* memory location for a 16-bit address. It then uses that address to load data.

The memory location containing the load address is still limited to -256 to +255 memory location before the current PC because it is a *PCOffset9* value.

Using a 16-bit address to request data from memory allows the program to load from any of the 56535 memory locations in the LC-3.

### Examples

#### Loads value from memory location contained in MyAddr1 into Register 3
@[code lang=arm-asm{2}](.vuepress/public/examples/Assembly/Commands/ldi1.asm)

``` asm {4}
Address   Value
x6FFE     x0000
x6FFF     x0000
x7000     x1234
x7001     x0000
```

1. **Controller** uses *PCOffset9* value to calculate memory location that contains address to load
1. **Controller** requests value from calculated value (x3001 in the example) from Memory Unit
1. **Memory Unit** return value at address x3001 (x7000 in the example)
1. **Controller** requests value at address it received from **Memory Unit** (x7000 in the example)
1. **Memory Unit** returns value at x7000 (x1234 in the example)
1. **Controller** copies received value into destination register (R3 in the example)


### Gotchas

None.

## STI
Store Indirect

### LC-3 ISA Format

<LC3Instruction opName="SDI" :bitPattern="{OpCode:'0011', SR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{SR: 'Source Register' },{PCOffset9:'Offset from current PC to branch'}]"  :examples="['SDI R3, MyAddr1 ; Stores the value in Register 3 into the address in MyAddr1', 'SDI R0, MyAddr2 ; Stores the value in Register 0 into the address in MyAddr2']"/>

### Explanation

Stores a value in a Register into a Memory location. A source register is provided to supply the value to memory. 

This differs from SD because it does not store to the *PCOffset* address. It reads *PCOffset* memory location for a 16-bit address. It then uses that address to store data.

The memory location containing the storage address is still limited to -256 to +255 memory location before the current PC because it is a *PCOffset9* value.

Using a 16-bit address to request data from memory allows the program to store to any of the 56535 memory locations in the LC-3.

### Examples

#### Store value into memory location contained in MyAddr1 from Register 3
@[code lang=arm-asm{3}](.vuepress/public/examples/Assembly/Commands/sti1.asm)

``` asm {5}
Before Update           After Update
Address   Value         Address   Value
x6FFE     x0000         x6FFE     x0000
x6FFF     x0000         x6FFF     x0000
x7000     x0000         x7000     x000E
x7001     x0000         x7001     x0000
```

1. **Controller** uses *PCOffset9* value to calculate memory location that contains address to store
1. **Controller** requests value from calculated value (x3002 in the example) from Memory Unit
1. **Memory Unit** return value at address x3002 (x7000 in the example)
1. **Controller** requests the **Memory Unit** store value in R3 into the address it received (store 14<sub>10</sub> (000E<sub>16</sub>) into memory address x7000 in the example)

### Gotchas

Typically the first register in the assembly instruction is the *Destination Register*. With **STI** it is the *Source Register*.

## LDR

Load Relative

### LC-3 ISA Format

<LC3Instruction opName="LDR" :bitPattern="{OpCode:'0110', DR: '000',BaseReg: '000', Offset:'000000'}" :descriptions="[{OPCode:''},{DR: 'Destination Register' },{BaseReg: 'Base Register'},{Offset6:'Offset from address in DR'}]"  :examples="['LDR R3, R1, #0 ; Add value in R1 with #0. Use that result as address to load value from Memory into Register 3', 'LDR R0, R1, #2 ; Add value in R1 with #2. Use that result as address to load value from Memory into Register 0']"/>

### Explanation

LDR loads from Memory into a Register. A destination register is provided to receive the value from memory. 

The address to load from is calculated using the 16-bit value in BaseReg added to the 6-bit offset. The value at this calculated address is loaded into the destination register.

This load instruction is similar to arrays in high-level languages. The BaseReg is the *Array Name* and the Offset in the *Array Index*.

### Examples

@[code lang=arm-asm{3,6}](.vuepress/public/examples/Assembly/Commands/ldr1.asm)

The LEA instruction reads the Memory Address of MyArray1 label. It does not load that value at the Memory Address

1. **Controller** adds value in R1 and *Offset6* (x3002 + 2 in the example)
1. **Controller** requests value from calculated value (x3004 in the example) from Memory Unit
1. **Memory Unit** return value at address x3004 (-7 in the example)
1. **Controller** copies value into Destination Register (R3 in the example)

### Gotchas

Verify the Offset value does not cause a load beyond the know values being used

## STR
Store Relative

### LC-3 ISA Format

<LC3Instruction opName="SDR" :bitPattern="{OpCode:'0110', SR: '000',BaseReg: '000', Offset:'000000'}" :descriptions="[{OPCode:''},{SR: 'Source Register' },{BaseReg: 'Base Register'},{Offset6:'Offset from address in SR'}]"  :examples="['SDR R3, R1, #0 ; Add value in R1 with #0. Use that result as address to store value to Memory in Register 3', 'SDR R0, R1, #2 ; Add value in R1 with #2. Use that result as address to store value to Memory in Register 0']"/>

### Explanation

SDR stores a value from a Register into Memory. A source register is provided to provide the value to memory. 

The address to load from is calculated using the 16-bit value in BaseReg added to the 6-bit offset. The the destination register value is stored at this calculated address.

This store instruction is similar to arrays in high-level languages. The BaseReg is the *Array Name* and the Offset in the *Array Index*.

### Examples

@[code lang=arm-asm{4,7}](.vuepress/public/examples/Assembly/Commands/sdr1.asm)

The LEA instruction reads the Memory Address of MyArray1 label. It does not load that value at the Memory Address

1. **Controller** adds value in R1 and *Offset6* (x3002 + 2 in the example)
1. **Controller** requests the **Memory Unit** store value in R3 into the address it received (store 2<sub>10</sub> into memory address x3004 in the example)
1. **Memory Unit** stores value at address x3004 (2 in the example)

## LEA
Load Effective Address

### LC-3 ISA Format

<LC3Instruction opName="LEA" :bitPattern="{OpCode:'1110', DR: '000',PCOffset:'000000000'}" :descriptions="[{OPCode:''},{DR: 'Destination Register'},{PCOffset9:'Offset from current PC to branch'}]"  :examples="['LEA R3, MyVal1 ; Loads the memory address of MyVal1 into Register 3', 'LEA R0, MyVal2 ; Loads the memory address of MyVal2 into Register 0']"/>

### Explanation

LEA load the address of a label, not the value at that label. This is useful when using LDR/STR and the Trap routine PUTS, where an memory address is needed to perform some other command.

This command does not require any memory reading or writing. The PCOffset9 value is added to the PC and that result is address to store in the DR.

### Examples
@[code lang=arm-asm{2}](.vuepress/public/examples/Assembly/Commands/lea1.asm)

1. **Controller** uses *PCOffset9* value to calculate memory location that contains address to load
1. **Controller** copies value from calculated value (x3001 in the example) into the Destination Register (R3 in the example)

### Gotchas

None.

## Conclusion

Long-term data will be stored in memory. The CPU have limited register slots to retain values after an operation completes.

A common procedure is:
1. Read a value from memory into a register
1. Use or modify that data while in the register
1. Copy the update dat form register to memory

LC-3 has 3 variations in loading and storing values ot memory. Each has a utility based on how you will be accessing memory (where the data is in memory). ```LD``` and ```ST``` are the common instruction. The other two (2) are used in some special situations.