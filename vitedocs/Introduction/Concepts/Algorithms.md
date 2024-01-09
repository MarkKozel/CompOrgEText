---
title: Algorithms
parent: Introduction to Computer Organization
description: 
pageClass: Topic
tags: []
---

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script>

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
},
{
  Concept:'Ambiguity',
  Details:'Imprecise nature of a construct. For Natural Language, how individuals interpret the meaning or intent of a word or phrase'
},
{
  Concept:'Algorithm',
  Details:'In the context of Computer Science, describe the solution to a Problem in a form that minimizes the Ambiguity of Natural Language'
}
]" />

## Introduction

Computers function on sets of ordered steps, organized in an efficient and effective sequence to reach some solution. Changing the order would likely result with a different solution.

These groups of steps make up an Algorithm that completes a Cycle.

### Everyday College Course Example

::: details Algorithm Example
They typical college class flow can be described as the following Algorithm: 
1. Instructor lectures on new material.
2. Students complete quiz to see they understand.
3. Instructor provide feedback on commonly missed questions.
4. Students complete assignment to put their understanding to the test.
5. Instructor provides feedback on assignment to ensure students understanding.

This cycle repeats for each new chapter or topic.
:::

Algorithms can be written at different levels of detail (Abstraction Levels) depending on the audience or purpose of the Algorithm.

## Algorithms
An Algorithm is a common term associated with technology today. An example of an Algorithm is using a specific type of software that takes in historic viewing data, applies statistical analysis to that data, and then turns out recommendations for the next movie or series to binge.

In general, algorithms are a **sequence** of steps that **solve a problem** with a **reliable** result. So the above movie recommendation algorithm solves the *problem* of location streaming media you might like, based on previous viewing history.

### Algorithms in Computer Organization
We will use Algorithms to understand how common analog procedures are executed in the digital world. If we were to add two multi-digit numbers, we can likely complete the task without much step-by-step thought. However, if we were to explain it in using digital logic and assembly language, we would need to think of how to use simple math operations as part of an Algorithm.

::: tip Quick Thought Experiment
Think about how you would teach a first grade student how to add two multi-digit numbers:

First, think of the steps to add 1234 and 4321 (note, there are no carries).

Next, think of the steps to add 1234 and 9999 (note, there are carries).

Finally, think of the steps to describe how to add any set of two multi-digit numbers (there may or may not be carries).
:::

In addition, we will also create algorithms that describe at a higher level of abstraction, what our assembly program will do. *Sketching out* or *prototyping* code before writing it will help:
* Identify the high-level section of code needed to solve the problem
* Create a program without an actual programming language in mind
    - You are free to design the algorithm without language constraints
    - The algorithm may help decide the best language to use for the final program
    - Other software engineers can understand the algorithm, even if they don't know the final programming language
* Help with coding the actual program, as you can implement parts of the algorithm, test the part, and repeat

### Creating an Algorithm
To create an algorithm, we typically start with the problem or *Problem Statement*. A problem statement will capture an issue that, hopefully, can be solved by computer and some clever code. It will be written in the author's native language

::: details Natural Language
Spoken, written, and signed communication that evolved along with humans. The natural languages we use today exist by common use and repetition, without formal planning or design.

[Natural Language](https://en.wikipedia.org/wiki/Natural_language)
:::

This means it will likely include *Ambiguity* that is understandable to most people that are fluent in the native language.

::: details Ambiguity
Words, phrases, and other communication elements that are not strictly defined. Information having ambiguity has some level of vagueness, and can be interpreted differently by each consumer.

[Ambiguity](https://en.wikipedia.org/wiki/Ambiguity)
:::

However, software engineers must remove all **ambiguity** somewhere between the problem statement and the final program, as computers do not handle any ambiguity. In addition, any **Natural language** terms must be converted to generally-understood words/phrases.

We are going to removal all **ambiguity** and **natural language** when converting the problem statement to an algorithm.

::: tip
Learn how trivial bit of ambiguity caused the Mars Climate Orbiter that burned up in Mars' atmosphere
[Mars Climate Orbiter 1998](https://www.jpl.nasa.gov/missions/mars-climate-orbiter)
:::

### An Algorithm to Create Algorithms
1. Understand the Problem Statement
    - This may require research or asking questions of the author
    - Note the Ambiguities in the Problem Statement. Clarify the intended meaning, even if fairly certain you understand (if you think this is unnecessary, please review the Mars Climate Orbiter article)
1. Declare any *given* situations
    - Elements that are already available
    - Options/capabilities that already exist
1. Write a sequence of steps that would solve the problem
    - Write english words that describe each step
    - Do not give in to the temptation of writing steps the look like code
    - In most cases each step will include a primary noun and verb/action
    - Each step is a single action that stands on its own

### Example Algorithm
Algorithm to Make a Bagel

*Given*
1. Toaster is working
1. User knows how to use a knife safely
1. User understands basic kitchen sanitary practices

*Algorithm*
1. Open bagel container
1. Remove 1 bagel
1. Place bagel on cutting board
1. Use bread knife to slice bagel into to section along its circular axis
1. Place bagel halves in separate toaster slots
1. Set toaster to medium darkness setting
1. Press toaster slide handle down until it locks
1. Verify heating elements emit heat
1. Remove cream cheese container from refrigerator
1. Obtain butter knife
1. Remove lid from cream cheese tub
1. Wait for toaster to complete cycle
1. Use hand protection to extract each bagel half from toaster and place on flat surface
1. Swipe knife across surface of cream cheese, gathering approximately 1 ounce on the knife
1. Spread gathered cream cheese into toasted surface of 1 bagel half
1. Swipe knife across surface of cream cheese, gathering approximately 1 ounce on the knife
1. Spread gathered cream cheese into toasted surface of other bagel half
1. Return cream cheese tub to refrigerator
1. Place bagel haves on plate
1. Serve bagel halves

## Conclusion

A general algorithm describes a procedure without using ambiguous terminology. It orders steps to successfully complete a procedure consistently.

In Computer Science and algorithm is a high-level description of a solution that will be written in a programming language. The nouns used in this type of algorithm are likely names of data or functions. The verbs are commands or instructions that modify the data or execute functions
