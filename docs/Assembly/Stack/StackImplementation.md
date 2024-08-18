---
title: Stack Implementation
parent: The Stack
description: The Stack Implementation
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

<!-- <KeyConcepts :ConceptArray= "[
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
]" /> -->

## Introduction
The inner-working of the stack depend on the program language used to implement the stack. The implementation will create the public functions used my a program to interact with the stack. It may also include other helper functions to make the implementation work. In addition, the implementation programmer will decide how to to store and access the data. Depending on the selected programming language, an array, linked-list, or some other data structure might be used

This page will explore an LC-3 Stack implementation

## Public Function

### Stack Data Declarations
In LC-3 there are only registers and memory to store data and manage the stack. This implementation will store all data and variables in memory

<<< @/public/examples/Assembly/Stack/stack_data-decls.asm {4-7 asm}

>**StackData** is, in this implementation, a 10 memory slot storage. This is where the user program data will be stored
>>
>**StackEnd** is a location that defined the end of the Data section. The implementation will use this to check for the stack being full
>>
>**StackPtr** will contain the address within the *StackData* area that is the most recently pushed data element
>>
>**StackSize** will be set during implementation to represent how many slots the stack contains. In this can it will be set to 10
>>
>**StackSaveR4** - **StackSaveR7** as created for the various stack functions to share when saving and restoring registers

### Initialize
It is likely some internal variables and states will need to be setup before a user program can start pushing and popping data. That will be done when the user program first starts using the stack. In a high-level programming language, this will be completed in the constructor, when the user creates a *new* stack

In LC-3, the user code will need to call the **Init** subroutine before using it

<<< @/public/examples/Assembly/Stack/stack_init.asm {10,11,13,18,22-26 asm}

> Addressed of **StackData** and **StackEnd** are loaded and used to calculate the stack size. The result is saved in **StackSize** at line 18
>>
> Line 13 sets the **StackPrt** to the first slot in the stack
>>
> Lines 22 - 26 loop through all slots in in the stack and set them to zero (0). This and resetting **StackPtr** are a good idea in case the user code wants to reset the stack after using it. Simply calling *Init* again will reset the stack for reuse

### Push
When the user code calls *Push, the stack must do two (3) things. First checks that the stack is not already full. If there is room, it saves the pushed data in the next slot in the stack. Finally, it updated the **StackPtr** to the next slot so it is ready for another push call later

<<< @/public/examples/Assembly/Stack/stack_push.asm {9-16,198,21-22 asm}
>The current **StackPrt** is compared to the **StackEnd** if they are the same, that indicates that the stack is full
>> Basically, the **StackPtr** that was updated after the previous push was changed to the memory location pasted the last memory slot. This is not checked until the user code tried to push an 11th item onto the stack
>>
>Line 18 saved the user code's data (placed in R0 before calling *Push*) is copied into the currently open slot (**StackPtr**)
>>
>Lines 21-22 update the **StackPrt** to then next open slot and save it for next time

### Pop
 
<<< @/public/examples/Assembly/Stack/stack_pop.asm {8-9,11,13 asm}
>Lines 8-9 get the **StackPtr** and move it back one slot. Recall the **StartPtr** always refers to the then next open slot. To access the last pushed slot, it needs to be moved back 1 slot
>>
>Line 11 retrieves the data an the last updated slot. The value us stored in R0 according to the subroutine's header *output* note
>>
>Line 13 saves the updated **StackPtr** since it now points to the newly available slot

::: tip Was the value just *popped* actually deleted?
This implementation chose to **not** spend any extra instruction cycles clearing (zeroing out) stack memory slots after they are popped

As long as the **StackPtr** is updated correctly, it is unnecessary. Next time *Push* is called, the new value will over-write the stale data left behind from the previous *Pop*

This is typically ok for standard stack operations. However, stale data can be useful to hackers if it is some important data, like a password

If this stack had a requirement to be extra secure, zeroing out *popped* data would be needed in this implementation
:::


## Conclusion



