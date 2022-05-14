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


## Computer Organization Abstraction Layers

Within Computer Science, there are several places where abstraction is used to organize concepts such as Data Abstraction, Object-Oriented Inheritance, and Relational Database design.

Within Computer Organization, we use a set of abstraction levels that start with a _Problem_ at the top-most level, down to _Devices_ at the lowest level.

|Abstraction Layer|Description|Move Down|Move Up|
|-|-|-|-|
|Problem|Defining a thing to solve using Natural Language|A Program can be *Stated* as an Algorithm|-|
|Algorithm|Set of steps that that solve a Problem without the ambiguity of Human Language|An Algorithm is *Implemented* as a Program|An Algorithm ** a Problem|
|Program|Data, Functions, and Syntax of a chosen programming language that executes an Algorithm|A Program is *Rendered* into an Instruction Set Architecture|A Program *Realizes* an Algorithm|
|||||
|Instruction Set Architecture|Instructions and Data of an Assembly Language that implements a Program|An Instruction Set Architecture is *Orchestrated* by a Microarchitecture|A Instruction Set Architecture *Executes* a Program|
|Microarchitecture|Logic, Storage, and Control that executes ISA instructions|A Microarchitecture *Manages* Circuits|A Microarchitecture *Implement* an Instruction Set Architecture|
|Circuits|Components that are combined to Construct Microarchitecture elements|Circuits are *Made* from Devices|Circuits *Implement* a Microarchitecture|
|Devices|Electrical structures that Provide digital representations of Circuit functions and behaviors|-|Devices *Implement* Circuits|

There is a gap in these abstraction layers between **Program** and **Instruction Set Architecture**. This is because the first three (3) are a specific thing and the last four (4) are general-purpose things

Problem, Algorithm, and Programs might be a specific item that calculates the next prime number.

The Instruction Set Architecture down to Devices are all a set of fixed software and hardware elements that can be used to solve many different problems.

In addition, The transition from Problem to Algorithm is interesting. A problem is expressed as a deficiency or need, whereas the Algorithm describes a way to avoid or fix that Problem.

In Computer Organization will will focus on the Instruction Set Architecture (ISA) layer, But first we needs to understand how Devices create Circuits, that make the Microarchitecture needed to support the ISA.


## Conclusion

We used abstraction to explain complex things at an appropriate level. That level depends on the current understanding of the audience. In a classroom, the instructor might choose to introduce a new topic by discussing a high-level aspect of the topic, then add detail to the discussion to slowly reveal the more subtile aspects.

Abstraction layers in Computer Organization start with a Problem to be solved and expends that problem (given that the problem is solved using a computer) to a Program that is rendered in the computer's ISA that ultimately gets represented in Devices
