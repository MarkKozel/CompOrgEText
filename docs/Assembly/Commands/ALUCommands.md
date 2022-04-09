---
title: ALU Commands
parent: Commands
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Software in much more useful if it can interacts with users and other systems',
  Details:'Accepting input and providing outputs to/from a user or other system allows software to solve more complicated problems.'
}
]" />

## ADD
### LC-3 ISA Format
<LC3Instruction opName="ADD (Register Mode)" :bitPattern="{OpCode:'0001', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['ADD R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'ADD R3, R2, R2 ; Add R2 to itself, store result in R3', 'ADD R3, R3, R3 ; Add value in R3 to itself, store result in R3']"/>

<LC3Instruction opName="ADD (Immediate Mode)" :bitPattern="{OpCode:'0001', DR: '000', SR1:'000',Mode:'0',IMM5:'00000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'0 indicates Register Mode'}, {IMM5: '5-bit immediate value' }]"  :examples="['ADD R3, R1, #1 ; add values in register 1 with 1, store result in R3', 'ADD R3, R2, #-4 ; add values in register 2 with -4, store result in R3', 'ADD R3, R3, xB ; Add value in R3 to hex value B (11 in base 10)), store result in R3']"/>

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
<LC3Instruction opName="AND (Register Mode)" :bitPattern="{OpCode:'0101', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['AND R3, R1, R2 ; And values in registers 1 and 2, store result in R3', 'AND R3, R2, R2 ; And R2 to itself, store result in R3', 'AND R3, R3, R3 ; And value in R3 to itself, store result in R3']"/>

<LC3Instruction opName="AND (Immediate Mode)" :bitPattern="{OpCode:'0101', DR: '000', SR1:'000',Mode:'0',IMM5:'00000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'0 indicates Register Mode'}, {IMM5: '5-bit immediate value' }]"  :examples="['AND R3, R1, #1 ; and values in register 1 with 1, store result in R3', 'AND R3, R2, #-4 ; and values in register 2 with -4, store result in R3', 'AND R3, R3, xB ; And value in R3 to hex value B (11 in base 10)), store result in R3']"/>

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
<LC3Instruction opName="NOT (Register Mode)" :bitPattern="{OpCode:'1001', DR: '000', SR:'000',unused:'000000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register'}, {unused: 'not used in Register Mode'}]"  :examples="['NOT R3, R3 ; Not value in R3, store result in R3', 'NOT R3, R2 ; Not value in R2, store result in R3']"/>

### Explanation

NOT is the other logic operations in the LC-3 ISA. This command bitwise nots a 16-bit value. The result is stored in a register

The Condition Code (CC) register is updated based on the resulting negation.

AND has 2 modes:
- Register Mode: And values from 2 register
- Immediate Mode: And value in 1 register with a *hard coded* immediate value
    - Immediate value is represented in 5-bits
        - -16 to +15

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

**NOT** is one of the simplest instruction, so does not have any gotchas of note.



## Conclusion