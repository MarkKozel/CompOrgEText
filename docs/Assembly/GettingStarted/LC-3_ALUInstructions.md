---
title: Arithmetic and Logic Instructions
parent: Getting Started
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
<div class="iframe-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cHtBbG9pCeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

The LC-3 provides three (3) Arithmetic and Logic Unit (ALU) Instructions

All ALU instructions are preformed on data in Registers and the results are stored in Registers

## NOT
Performs a logical **NOT** on data in a register

<<< ../_CodeSnippets/QuickStart/ALU.asm {4 asm}

## AND
Performs a logical **AND** on data in two Register, storing the result in a Register

<<< ../_CodeSnippets/QuickStart/ALU.asm {2 asm}

## ADD
Performs a logical **ADD** on data in two Register, storing the result in a Register

<<< ../_CodeSnippets/QuickStart/ALU.asm {3 asm}

## Condition Code Register

All ALU instructions set the Condition Code (CC) register at the end of executing the instruction

<!-- @include: @/TextSnippets/LC3/CCRegister.md -->