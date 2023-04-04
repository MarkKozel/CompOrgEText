---
title: ALU Instructions
parent: Instructions
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'The LC-3 ALU is a very simple unit with three (3) instructions',
  Details:'As a teaching ISA, the LC-3 has limited capabilities. Modern ALUs are capable of 50 or more instructions'
}, 
{
  Concept:'AND and ADD instruction have two (2) different modes',
  Details:'The instruction process 2 16-bit values, but can also process a 16-bit value and a hard-coded value. This second mode is convenient for simple instruction like subtracting 1 from a stored value'
}
]" />

::: details Terms
!!!include(TextSnippets/Assembly/Instructions_Terms.md)!!!
:::

## Introductions

The LC-3 ALU is capable of executing three (3) operations: ADD, AND, and NOT. Although limited, when combined, these three (3) operations can be used to do many more things that add and compare.

In this section we will review the ALU instructions, options for each, and look at some simple example code.

## ADD
### LC-3 ISA Format
<LC3Instruction opName="ADD (Immediate Mode)" :bitPattern="{OpCode:'0001', DR: '000', SR1:'000',Mode:'1',IMM5:'00000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Register Mode'}, {IMM5: '5-bit immediate value' }]"  :examples="['ADD R3, R1, #1 ; Add values in register 1 with 1, store result in R3', 'ADD R3, R2, #-4 ; Add values in register 2 with -4, store result in R3', 'ADD R3, R3, xB ; Add value in R3 to hex value B, store result in R3', 'ADD R3, R3, b0111 ; Add value in R3 to binary value 7, store result in R3']"/>

<LC3Instruction opName="ADD (Register Mode)" :bitPattern="{OpCode:'0001', DR: '000', SR1:'000', Mode:'0',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'0 indicates Register Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['ADD R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'ADD R3, R2, R2 ; Add R2 to itself, store result in R3', 'ADD R3, R3, R3 ; Add value in R3 to itself, store result in R3']"/>

### Explanation

ADD is the only arithmetic operation in the LC-3 ISA. This command adds 2 16-bit, 2's complement values. The result is stored in a register

The Condition Code (CC) register is updated based on the resulting addition

ADD has 2 modes:
- Register Mode: Add values from 2 register
- Immediate Mode: Add value in 1 register with a *hard coded* immediate value
    - Immediate value is represented in 5-bits
    - Immediate value is a 2's complement
        - -16 to +15

### Examples

#### General Syntax

``` 
ADD DR, SR1, SR2
```
- DR - Destination Register for resulting operation
- SR1 and SR2 - Source registers for the operation

``` 
ADD DR, SR1, Imm5
```
- DR - Destination Register for resulting operation
- SR1 - Source register for the operation
- Imm5 - 5-bit 2's complement value to add to SR1

#### Add registers and store in a different register

``` 
ADD R0, R1, R2
```
Add the values in R1 and R2. Store in R0

``` 
ADD R0, R1, #6
```
Add the value in R1 and 6. Store in R0

#### Add registers and store in a one of the same registers

``` 
ADD R1, R1, R2
```
Add the values in R1 and R2. Store in R1, overwriting the original value in R1

``` 
ADD R1, R1, #-3
```
Add the value in R1 and -3. Store in R1, overwriting the original value in R1

#### Add a register to itself and store in a different register

``` 
ADD R0, R1, R1
```
Add the values in R1 to itself (double the original value). Store in R0

#### Add a register to itself and store in the same registers

``` 
ADD R1, R1, R1
```
Add the values in R1 to itself (double the original value). Store in R1, overwriting the original value in R1

### Gotchas

- Immediate Value mode can only add a register value and a small number (-16 to +15). To add larger values, use Register mode
- *ADD* and *AND* are easy to mix up when typing source code. Double check when you type these instructions. If your program behaves unexpectedly around and *ADD* instruction, check that you didn't accidentally type *AND*


## AND

### LC-3 ISA Format
<LC3Instruction opName="AND (Immediate Mode)" :bitPattern="{OpCode:'0101', DR: '000', SR1:'000',Mode:'1',IMM5:'00000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Register Mode'}, {IMM5: '5-bit immediate value' }]"  :examples="['AND R3, R1, #1 ; And values in register 1 with 1, store result in R3', 'AND R3, R2, #-4 ; And values in register 2 with -4, store result in R3', 'AND R3, R3, xB ; And value in R3 to hex value B, store result in R3', 'AND R3, R3, b0111 ; Add value in R3 to binary value 7, store result in R3']"/>

<LC3Instruction opName="AND (Register Mode)" :bitPattern="{OpCode:'0101', DR: '000', SR1:'000',Mode:'0',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'0 indicates Register Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['AND R3, R1, R2 ; And values in registers 1 and 2, store result in R3', 'AND R3, R2, R2 ; And R2 to itself, store result in R3', 'AND R3, R3, R3 ; And value in R3 to itself, store result in R3']"/>

### Explanation

AND is one of two logic operations in the LC-3 ISA. This command bitwise ands 2 16-bit values. The result is stored in a register

The Condition Code (CC) register is updated based on the resulting and operation.

AND has 2 modes:
- Register Mode: And values from 2 register
- Immediate Mode: And value in 1 register with a *hard coded* immediate value
    - Immediate value is represented in 5-bits
        - -16 to +15
### Examples

``` 
AND DR, SR1, SR2
```
- DR - Destination Register for resulting operation
- SR1 and SR2 - Source registers for the operation

``` 
AND DR, SR1, Imm5
```
- DR - Destination Register for resulting operation
- SR1 - Source register for the operation
- Imm5 - 5-bit 2's complement value to AND to SR1

#### AND registers and store in a different register

``` 
AND R0, R1, R2
```
And the values in R1 and R2. Store in R0

``` 
AND R0, R1, #6
```
And the value in R1 and 6. Store in R0

#### AND registers and store in a one of the same registers

``` 
AND R1, R1, R2
```
And the values in R1 and R2. Store in R1, overwriting the original value in R1

``` 
AND R1, R1, #-3
```
And the value in R1 and -3. Store in R1, overwriting the original value in R1

#### AND a register to itself and store in a different register

``` 
AND R0, R1, R1
```
And the values in R1 to itself (double the original value). Store in R0

#### AND a register to itself and store in the same registers

``` 
AND R1, R1, R1
```
And the values in R1 to itself (double the original value). Store in R1, overwriting the original value in R1

### Gotchas

- Immediate Value mode can only add a register value and a small number (-16 to +15). To add larger values, use Register mode
- The Immediate Value will be sign-extended, Remember that the most significant bits [15-5] will be all zeros (0) or ones (1) based on the sign
- *ADD* and *AND* are easy to mix up when typing source code. Double check when you type these instructions. If your program behaves unexpectedly around and *AND* instruction, check that you didn't accidentally type *ADD*


## NOT

### LC-3 ISA Format
<LC3Instruction opName="NOT" :bitPattern="{OpCode:'1001', DR: '000', SR:'000',unused:'000000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register'}, {unused: 'not used in Register Mode'}]"  :examples="['NOT R3, R3 ; Not value in R3, store result in R3', 'NOT R3, R2 ; Not value in R2, store result in R3']"/>

### Explanation

NOT is the other logic operations in the LC-3 ISA. This command bitwise nots a 16-bit value. The result is stored in a register

The Condition Code (CC) register is updated based on the resulting negation.

### Examples

``` 
NOT DR, SR
```
- DR - Destination Register for resulting operation
- SR - Source register for the operation

#### NOT register and store in a different register

``` 
NOT R0, R1
```
Not the value in R1. Store in R0

#### NOT register and store in the same register

``` 
NOT R1, R1
```
Not the value in R1. Store in R0, overwriting the original value in R1

### Gotchas

The LC-3 Simulate tool shows Hex and Decimal values of 16-bit data stored in Memory and Registers. Simulate does this 'to be helpful' to the developer. When storing data for logical operations, it falls to the developer to remember that the bits are representing bits.

## Conclusion

The LC-3 Arithmetic Logic Unit (ALU) is capable of performing one (1) arithmetic instruction, ADD, and two (2) logic functions (AND, NOT).

ADD and AND have two (2) modes that define the input data elements to use. Register mode pulls data from two (2) registers. Immediate mode pulls data from one (1) register and a hard-coded value that is defined in the instruction.

Once the CPU Controller has all the information to complete an ALU instruction, it send the data and operation to the ALU to complete. Results are send back to the Controller to store.
