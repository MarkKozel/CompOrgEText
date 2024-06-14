---
title: Stack ADT
parent: The Stack
description: The Stack Abstract Data Type
pageClass: Topic
tags: []
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue';
import QuestionMC from '../../.vitepress/components/QuestionMC.vue';
import QuestionTF from '../../.vitepress/components/QuestionTF.vue';
</script>

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Abstract Data Type',
  Details:'A model of how a data type works. The program only needs to know how to interact with the construct, but not the inner-workings'
},
{
  Concept:'Stack',
  Details:'A data collection where the last item added to the collection if the first one that can be accessed'
},
{
  Concept:'LIFO',
  Details:'Last In, First Out (LIFO) data accessible collection'
}
]" />

## Introduction
A collection of data elements organized in a LIFO construct is a Stack. It is similar to a start of plates or coins

<!-- ![Real-world stack](https://commons.wikimedia.org/wiki/File:Tallrik_-_Ystad-2018.jpg#/media/File:Tallrik_-_Ystad-2018.jpg) -->

::: details Learn More
[Abstract Data Types](https://en.wikipedia.org/wiki/Abstract_data_type)

[Stack ADT](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
:::

## Accessing Stack Data
Data is added to the stack one element at a time. It is added to the top of the collection

As in a stack of plates on a kitchen counters, a new plate is stacked on top

When a plate is needed, the top plate, the last one *in* is the first one sent *out* for use

## Stack Abstraction
The inner-workings of the stack in a given language does not need to be understood by a programmer using a stack. The programmer needs to know the functions *public* functions available for use. The actions a program can perform on a Stack, like most ADTs, is to add and remove data from it as the main program requires

### Push
New data added to the stack is *pushed  onto the stack*. The stack provides a public **Push** function to accomplish this

<<< @/public/examples/Assembly/Stack/PushOntoStack.java {1,7,10,11,12 java}

>Java provides a Stack ADT in ```java.util.Stack``` package
>>
>This code creates a Stack using Strings as the data to be contains with the stack
>>
>Lines 10 - 12 push 3 strings onto the stack

<QuestionTF question="In the java code, above, the first name that can be accessed is Charles" answer='true' rightAnswerFeedback="Yes! It was the last one in, so it will be the first one out" wrongAnswerFeedback="Remember the last on in will be the first one out. In this code Charles will be the first one out"/> 

### Pop
Data is removed from the stack by *popping it off the stack*. The last data element is removed from the stack and returned to the main program for use

<<< @/public/examples/Assembly/Stack/PushOntoStack.java {17 java}
> The *Pop* function removes the last data element added, and returns it to the calling code
>>
> We also see a secondary function *isEmpty()* (line 16) that lets the main program know when there are no more data elements on the stack

<QuestionTF question="In the java code, above, the output will be Alice, Bob, Charles" answer='false' rightAnswerFeedback="Yes! Entries are popped off in the reverse order they were added" wrongAnswerFeedback="No, Recall that stacks are a LIFO ADT. Entries are popped off in the reverse order they were added, so it will be Charles, Bob, Alice"/> 

## Conclusion


::: details Terms
<!--@include: @/TextSnippets/Assembly/BasicIO_Terms.md-->
:::
