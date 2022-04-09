---
title: XYZ Commands
parent: Commands
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Concept 1',
  Details:'Details of concept 1'
},
{  
  Concept:'Concept 2',
  Details:'Details of concept 2' 
}
]" />

## Introduction

## INSTRUCTION

### LC-3 ISA Format

<LC3Instruction opName="NAME" :bitPattern="{OpCode:'0000', DR: '000', SR1:'000',Mode:'1',unused:'00',SR2:'000'}" :descriptions="[{OPCode:''},{DR:'Destination Register'},{SR1:'Source Register 1'}, {Mode:'1 indicates Immediate Mode'}, {unused: 'not used in Register Mode'},{SR2:'Source Register 2' }]"  :examples="['NAME R3, R1, R2 ; sum values in registers 1 and 2, store result in R3', 'NAME R3, R2, R2 ; Add R2 to itself, store result in R3']"/>

### Explanation

### Examples

### Gotchas

## Conclusion