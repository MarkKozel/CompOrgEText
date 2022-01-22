---
title: Abstraction
shorttitle: Breaking down a large concept into small pieces
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

## Conclusion