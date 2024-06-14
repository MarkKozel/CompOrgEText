---
title: Abstraction
parent: Introduction to Computer Organization
description: 
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Why Use Abstraction',
  Details:'Abstraction helps understand complex systems'
},
{  
  Concept:'Computer Organization Abstraction Layers',
  Details:'Starting with the problem a computer can solve, we can define the layers of abstraction that end with circuits and transistors' 
}
]" />

<script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
import QuestionTF from '../../.vitepress/components/QuestionTF.vue';
</script>

## Introduction
Humans understand the world through classifying and grouping information, associating items based on similarities and differences. This form of organization, called abstraction, helps us communicate concepts and ideas for ourselves and between each other. It could be argued that thinking in abstraction is a capability that sets humans apart from other animals.

Once divided into groups, each group can be sub-divided based on a more specific trait, which further defines the items. This process of sub-dividing can continue with more specific traits until we have reached a level of detail that is useful ...FOR WHAT?

## Why Use Abstraction
A key element to learning and communicating elements in the physical world is our ability to create abstraction layers, that is: defining different levels of detail about an element to be used in different contexts.

::: details Abstraction Example
If we wanted to describe email to someone, it would be helpful to know that person's understanding of things like the Internet, computers, web browsers, office memos, etc.

For someone with a hands-on understanding of these concepts, such as a fellow CS student, we would use terms like *Ethernet, WiFi, Authentication Credentials, Service Provider, Spam* without additional explanation

For someone that uses email, but is not technically trained, we would use words like *Internet Connection, Account Login, GMail, Unwanted emails*, likely without needing and additional explanation

And, to describe email to someone that does not use a computer regularly, we would use terms like *Computer's Connection to other computers, Sign-in information, Company that provides E-Mail service*
:::

Abstraction works in layers, each having more details and specific meaning.

## Abstraction Layers of Life on Earth
Abstractions layers are commonly used in schools. Take, for example, the Biological Life Taxonomy layers of abstraction in upper-division grade school:

<table>
    <tr>
        <td style="width:80%" >
        Top level represents all life on Earth.<br><br>
        Domain defines most general types of life, based on unique characteristics. Bacteria, Archaea, and Eukarya are the 3 domains.  All life can be only one of these three domains.<br><br>
        Kingdom further breaks down domains into more details: Animals, plants, and fungi.<br><br>
        Class, Order, Family, and Genus are another layer that has more details.<br><br>
        Species is the final, and most detailed layer, ultimately describing the characteristics of a single type of life.
        </td>
        <td style="width:20%"><img src="/images/Foundations/History/2000px-Biological_classification_L_Pengo_vflip.svg.png" style="max-height:100%; max-width:100%"/> </td>
    </tr>
</table>

Abstraction is a tool used to communicate and understand an item or concept. Teaching mathematics in public school relies on abstraction to expose students to the complex world of math, slowly, over several years. From kindergarten, where students learn numbers, to junior high school, where students are exposed to geometry and trigonometry, and on to high school where calculus is taught.

Abstraction builds relationships among layers. So, when moving between layers, we can express the transition in one of two ways:

- Moving to a more specific layer (down), we would say the Higher level *has* Lower levels in it:
>A Kingdom *has* Phylums
- Moving to a less specific layer (up), we would say the Lower level *is part of the* Higher level:
>A Phylum *is part of the* Kingdom

<QuestionTF question="Computer programs can have ambiguity in the source code" answer='false' rightAnswerFeedback="Ambiguity would lead to some pretty unreliable programs" wrongAnswerFeedback="Any unclear instructions typically lead to errors or buggy programs"/>

<QuestionTF question="A programmer translates problems initially described in Natural Language into a programming language that has little or no ambiguity" answer='true' rightAnswerFeedback="In effect, programs are translators, and must clear up any vagueness in the problem description" wrongAnswerFeedback="Translating is a primary function when programmers solving a problem"/>


## Computer Organization Abstraction Layers

Within Computer Science, there are several places where abstraction is used to organize concepts such as Data Abstraction, Object-Oriented Inheritance, and Relational Database design.

Within Computer Organization, we use a set of abstraction levels that start with a _Problem_ at the top-most level, down to _Devices_ at the lowest level.

| Abstraction Layer            | Description                                                                                   | Move Down                                                                      | Move Up                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| Problem                      | Defining a thing to solve using Natural Language                                              | A Program can be *stated* as an Algorithm                                      | -                                                    |
| Algorithm                    | Set of steps that that solve a Problem without the ambiguity of Natural Language              | An Algorithm is *implemented* as a Program                                     | An Algorithm *describes* a Problem                   |
| Program                      | Data, functions, and syntax of a chosen programming language that executes an Algorithm       | A Program is *Rendered* into an Instruction Set Architecture                   | A Program *realizes* an Algorithm                    |
|                              |                                                                                               |                                                                                |                                                      |
| Instruction Set Architecture | Instructions and data of an Assembly Language that implements a Program                       | An Instruction Set Architecture (ISA) is *orchestrated* by a Microarchitecture | An Instruction Set Architecture *executes* a Program |
| Microarchitecture            | Logic, storage, and control that executes ISA instructions                                    | A Microarchitecture *manages* Circuits                                         | A Microarchitecture *implements* an ISA              |
| Circuits                     | Components that are combined to construct Microarchitecture elements                          | Circuits are *made* from Devices                                               | Circuits *implement* a Microarchitecture             |
| Devices                      | Electrical structures that provide digital representations of Circuit functions and behaviors | -                                                                              | Devices *implement* Circuits                         |


Problem, Algorithm, and Program layers are focused on a solution to a specific problem. 

::: tip Specific Layers
The top three (3) layers are focused on a specific problem and solution.

Example:
  - **Problem**: Test a number for prime
  - **Algorithm**: Mathematical formula to verify number is prime
  - **Program**: User inputs a number, executes algorithm on number, display result to user

In this example, a specific problem is solved
:::

::: tip General Layers
The bottom four (4) layers provide a general platform to execute any program created within the rules of the computer

The connection between the *specific* and *general* layers is the programming language compiler/interpreter

  - **Instruction Set Architecture**: Assembly language instructions that implement the compiled/interpreted Program
  - **Microarchitecture**: Control instructions that execute each assembly instruction
  - **Circuits**: Digital elements that control/stores information
  - **Devices**: Transistors that form circuits

These layers work the same way each time they are used. The only thing that changes is the compiled/interpreted Program
:::

The Instruction Set Architecture down to Devices are all a set of fixed software and hardware elements that can be used to solve many different problems.

In addition, The transition from Problem to Algorithm is interesting. A problem is expressed as a deficiency or need, whereas the Algorithm describes a way to avoid or fix that Problem.

In Computer Organization, we'll focus on the Instruction Set Architecture (ISA) layer. But first, we need to understand how Devices create Circuits, that make the Microarchitecture needed to support the ISA.

## Conclusion

We learned that using abstraction explains complex concepts to the current understanding of a specific audience. For example, in a classroom, the instructor might choose to introduce a new topic by discussing a high-level aspect of the topic, then add detail to the discussion to slowly reveal the more subtile aspects.

Abstraction layers in Computer Organization start with a Problem to be solved and presents that problem (given that the problem is solved using a computer) to a Program that is rendered in the computer's ISA that ultimately gets represented in Devices.
