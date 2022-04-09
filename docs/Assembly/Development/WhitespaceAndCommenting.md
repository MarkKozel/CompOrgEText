---
title: Whitespace and Commenting
parent: Development
description: Whitespace and Comments in Software Development
pageClass: Topic
tags: [whitespace, comments, tabs, formatting, maintenance]
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Whitespace for easier code review',
  Details:'Indenting and blank lines visually organizes source code to help other developers understand and modify your code'
},
{
  Concept:'Commenting for understandability',
  Details:'Adding comments help others understand important and non-obvious code'
},
]" />

## Introduction

Use of formatting of source code will make it easier to understand and updates. Including comments adds another level of built-in help for future updates

These elements are your code are purely for humans. Compilers and assemblers ignore these parts of the code when generating the executable. As a result, it will not make the final program any larger

## Whitespace

Using blank section or lines in source code makes it more readable for others. It is a way to visually group and align instructions into understandable groups

### [LC-3 Whitespace Examples](../../../LC3/Development/WhitespaceAndCommenting/index.md#whitespace) 

### Indenting

Use Space or Tab indents in code shows how code it organized within a construct like a for-loop. It is visually obvious that code indented run inside the loop and code that is not indented is outside

@[code lang=java{2-3}](@/Assembly/Development/javaForLoop.java)

It is visually obvious that each array elements are doubles, the increments by 1 inside the loop


### Blank Lines

Use blank lines to group associate code. This will make it visually easy to see that several line of code exist for some associated purpose

@[code js{1-2,4-9,11-12}](@/Assembly/Development/jsForLoop.js)

The blank lines in this code separate Initialization, Processing Loop, and Output

<QuestionTF question="Use of whitespace helps developers understand the program" answer='true' rightAnswerFeedback="Right! Particularly code that was written a while back, and now needs to be updated by another developer" wrongAnswerFeedback="Actually it is likely to help"/>

<QuestionTF question="Assemblers/Compilers include whitespace in the executable" answer='false' rightAnswerFeedback="Right! Whitespace is stripped out during the first pass of the Assembly process" wrongAnswerFeedback="Incorrect. Assemblers/Compilers completely ignore all whitespace during the process"/>

## Comments

Comments are included to help other developers understand the organization and important parts of the code. This will help simplify future updates

### [LC-3 Commenting Examples](../../../LC3/Development/WhitespaceAndCommenting/index.md#comments) 

### Function Comments

An overall description of the code helps developers understand the big-picture purpose of the program. Block and Inline comments will clarify particular sections

@[code js{1-4}](@/Assembly/Development/jsForLoop1.js)

### Block Comments

Adding a comment to the beginning of a block can help other developers understand the purpose of group of code

@[code js{6,10,18}](@/Assembly/Development/jsForLoop2.js)

### Inline Comments

Adding a comment to the end of a single line of code helps make clear what the line does

@[code js{12,20}](@/Assembly/Development/jsForLoop3.js)

<QuestionTF question="Adding good comments to your code now is likely to help you in the future" answer='true' rightAnswerFeedback="Yes, it is very likely to help as you may not recall the reasons for the structure of your code" wrongAnswerFeedback="Well, that may be true, but you will need to have incredible memory recall"/>

## Conclusion

Using whitespace, troubleshooting and modifying code (by you or another developer) can be easier as code is visually organized in groups and blocks

Adding comments that describe overall function and specific *important* sections will also help with understanding and modifying the program