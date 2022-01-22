---
title: Concepts in Computer Organization
shorttitle: Abstraction and Algorithms
tags: []
---

# {{ $frontmatter.title }}
{{ $frontmatter.shorttitle }}

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

[[toc]]

## Introduction

A key tool to manage information and our understanding of complex things is Abstraction. In effect, we can group related items by identifying traits that are similar. We then associate items that have that trait, and separate them from items that do not possess that trait

Once divided into groups, each group can be sub-divided based in a more specific trait, further defined the items. This process of sub-dividing can continue with more specific traits until we have reached a level of detail that is useful

## Abstraction

### Abstraction Layers of LIfe on Earth
You have likely encountered the Biological Life Taxonomy layers of abstraction in upper-division grade school

<table>
    <tr>
        <td style="width:80%" >
        Top level represents all life on Earth<br><br>
        Domain defines most general types of life, based on unique characteristics. Bacteria, Archaea, and Eukaryota are the 3 domains.  All life can be only 1 of these three domains<br><br>
        Kingdom further details domains into more details. Animals, plants, and fungi<br><br>
        Class, Order, Family, and Genus continue defines more details<br><br>
        Species is the final, and most detailed layer, ultimately describing the characteristics if a single type of life
        </td>
        <td style="width:20%"><img src="/images/Foundations/History/2000px-Biological_classification_L_Pengo_vflip.svg.png" style="max-height:100%; max-width:100%"/> </td>
    </tr>
</table>

Abstraction is a tool used to communication and understand an item or concept. Teaching mathematics in public school relies on abstraction to expose students to the complex world of math, slowly, over several years. From kindergarten, where students learn numbers, to Jr High, where students are exposed to geometry and trigonometry, and on to high school where calculus is taught

Within Computer Science, there are several places where abstraction is used to organize concepts: Data Abstraction, Object-Oriented Inheritance, Relational Database design

Within Computer Organization we use a set of abstraction levels that start with a _Problem_ at the top-most level, down to _Devices_ at the lowest level

<table>
  <thead>
    <tr>
      <th style="width:30%"> Abstraction Layer</th>
      <th style="width:70%"> Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Problem</td>
      <td>Defining a thing to solve using Natural Language</td>
    </tr>
        <tr>
      <td>Algorithm</td>
      <td>Set of steps that that solve a Problem without the ambiguity of Human Language</td>
    </tr>
        <tr>
      <td>Program</td>
      <td>Data, Functions, and Syntax of a chosen programming language that executes an Algorithm</td>
    </tr>
        <tr>
      <td>Instruction Set Architecture</td>
      <td>Instructions and Data of an Assembly Language that implements a Program</td>
    </tr>
        <tr>
      <td>Microarchitecture</td>
      <td>Logic, Storage, and Control that executes ISA instructions</td>
    </tr>
        <tr>
      <td>Circuits</td>
      <td>Components that are combined to Construct Microarchitecture elements</td>
    </tr>
        <tr>
      <td>Devices</td>
      <td>Electrical structures that Provide digital representations of Circuit functions and behaviors</td>
    </tr>

  </tbody>
</table>

::: readmore Abstraction Layers
[Abstraction Layers in Computer Architecture](https://en.wikipedia.org/wiki/Abstraction_layer#Computer_architecture)
High-level abstraction of computer architecture
:::

## Algorithms
*Algorithm* is a common term associated with technology today. The common use if *Algorithm* typically referring to software that takes in historic data and turns out recommendations for the next movie or series to binge. This meaning is a specific type of software that applies statistical analysis to known or historic data, and returns probabilities of future choices or preferences

In general, algorithms are a **sequence** of steps that **solve a problem** with a **reliable** result. So the above movie recommendation algorithm solves the *problem* of location streaming media you might like, based on previous viewing history. A different algorithm may predict rocket trajectories based on expected trajectory and wind changes during powered flight

### Algorithms in Computer Organization
We will use algorithms to understand how common analog procedures are executed in the digital world. If I ask you to add two (2) multi-digit numbers, you can likely complete the task without much step-by-step thought. However, we will need to think of simple math operations as an algorithm in order to implement them in digital logic and assembly language

::: thinkaboutit Quick Thought Experiment
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