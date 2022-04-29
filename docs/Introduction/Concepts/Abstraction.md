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
  Details:'Abstraction help understand complex systems'
},
{  
  Concept:'Computer Organization Abstraction Layers',
  Details:'Starting with the Problem a computer can solve we can define the layers of abstraction that end with circuits and transistors' 
}
]" />

## Introduction
Humans, by default, understand the world through classifying and grouping information about the world in which we live. Associating items based on similarities and differences helps us communicate our understandings of our world. It could be argued that this capability of humans is something that sets us apart from other animals.

A key tool to manage information and our understanding of complex things is Abstraction. In effect, we can group related items by identifying traits that are similar. We then associate items that have that trait, and separate them from items that do not possess that trait

Once divided into groups, each group can be sub-divided based in a more specific trait, further defined the items. This process of sub-dividing can continue with more specific traits until we have reached a level of detail that is useful

## Why Use Abstraction
A key element to learning and communicating elements in the physical world is our ability to create abstraction layers. That is, defining different levels of detail about an element to be used in different contexts

::: details Abstraction Example
If you were describing email to a person, if would be helpful to know their understanding of things like the Internet, computers, web browsers, office memos, etc

For someone with a hands-on understanding of these concepts, such as a fellow CS student, you would use terms like *Ethernet, WiFi, Authentication Credentials, Service Provider, Spam* without additional explanation

For someone that uses email, but is not technically trained, you would use words like *Internet Connection, Account Login, GMail, Unwanted emails*, likely without needing and additional explanation

And, to describe email to someone that does not use a computer regularly, you will use terms like *Computer's Connection to other computers, Sign-in information, Company that provides E-Mail service*
:::

Abstraction works in layers, each having more details and specific meaning

## Abstraction Layers of Life on Earth
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

## Computer Organization Abstraction Layers

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











## Conclusion