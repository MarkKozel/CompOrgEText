---
title: Algorithms
parent: Introduction to Computer Organization
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
},
{
  Concept:'Ambiguity',
  Details:'Imprecise nature of a construct. For Natural Language, how individuals interprets the meaning or intent of a word or phrase'
},
{
  Concept:'Algorithm',
  Details:'In the context of Computer Science, re-writing a Problem in a form that minimizes the Ambiguity of Human/Natural Language'
}
]" />

## Introduction

Our world functions on sets of ordered steps, organized is an efficient and effective sequence to reach some solution. Changing the order and the result is likely to be different

These groups of steps make up an algorithm that complete a cycle

### Everyday College Course Example

::: details Algorithm Example
They typical college class flow can be described as the following algorithm. This cycle would repeat for each new chapter or topic
1. Instructor lectures on new material
2. Students complete quiz to see they understand
3. Instructor provide feedback on commonly missed questions
4. Students complete assignment to put their understanding to the test
5. Instructor provides feedback on assignment to ensure students understanding
:::

Algorithms can be written at different levels of detail (Abstraction Levels) depending on the audience or purpose of the algorithm


## Algorithms
*Algorithm* is a common term associated with technology today. The common use if *Algorithm* typically referring to software that takes in historic data and turns out recommendations for the next movie or series to binge. This meaning is a specific type of software that applies statistical analysis to known or historic data, and returns probabilities of future choices or preferences

In general, algorithms are a **sequence** of steps that **solve a problem** with a **reliable** result. So the above movie recommendation algorithm solves the *problem* of location streaming media you might like, based on previous viewing history. A different algorithm may predict rocket trajectories based on expected trajectory and wind changes during powered flight

### Algorithms in Computer Organization
We will use algorithms to understand how common analog procedures are executed in the digital world. If I ask you to add two (2) multi-digit numbers, you can likely complete the task without much step-by-step thought. However, we will need to think of simple math operations as an algorithm in order to implement them in digital logic and assembly language

::: considerit Quick Thought Experiment
Think about how you would teach a first grade student how to add 2 multi-digit numbers

First, Think of the steps to add 1234 and 4321 (note, there are no carries)

Next, Think of the steps to add 1234 and 9999 (note, there are carries)

Finally, Think of the steps to describe how to add any set of 2 multi-digit numbers (there may or may not be carries)
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

This means it will likely include *Ambiguity* that is understandable to most people that are fluent in the native language. However, software engineers must remove all ambiguity somewhere between the problem statement and the final program, as computers do not handle any ambiguity. We are going to removal all ambiguity when converting the problem statement to an algorithm

::: right
Learn how trivial bit of ambiguity caused the Mars Climate Orbiter that burned up in Mars' atmosphere
[Mars Climate Orbiter 1998](https://www.jpl.nasa.gov/missions/mars-climate-orbiter)
:::

### An Algorithm to Create Algorithms
1. Understand the Problem Statement
    - This may require research or asking questions of the author
    - Note the Ambiguities in the Problem Statement. Clarify the intended meaning, even if you fairly certain you understand (if you think this is unnecessary, please review the Mars Climate Orbiter article)
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
1. Return cream cheese tube to refrigerator
1. Please bagel haves on plate
1. Serve bagel halves

## Conclusion