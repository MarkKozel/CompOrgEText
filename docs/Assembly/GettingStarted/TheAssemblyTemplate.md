---
title: The Assembly Template
parent: Getting Started
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
<div class="iframe-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WsybkuWznpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Students will use and complete the assembly template for all graded work. This file is in the LC-3 Docs zip file downloaded earlier

![Assembly Template](/images/LC3/Assembly_Template.png)

## Header
The top section with lines started by a semicolon (;) is filled in with assignment and student name info. There is a line to describe the program at a high level and another to include any notes ot comments

## Main Body
The program will be written between the ```.ORIG x3000``` and the ```;End of Program``` lines. 
```asm
.ORIG x3000

Done HALT

;End of Program
```

> ```.ORIG x3000``` is the assembler directive that identifies memory location 3000<sub>16</sub> as the location to load and execute the program
>
>```Done HALT``` is the last executable line of code in an assembly program
>> ```Done``` is an optional label used to other parts of the program to terminal the program early
>>
>> ```HALT``` is a build-in function that stops the system clock so that no more instructions can execute
>
>```;End of Program``` is a comment to remind programs that no code will be executed after ```HALT```

## Data Declarations
The area under the ```;Data Declarations-------------``` comment is reserved for allocating memory locations and initialized data

## Code End

Like ```.ORIG```, ```.END``` is an assembler directive informing that there is no more programs or data allocations to assemble
