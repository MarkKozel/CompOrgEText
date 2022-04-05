# Page Templates

A **Book** has **Sections**

A **Section** has **Units** -or- no **Units** if the section is simple

A **Unit** optionally has **Topics**

A **Topic** is the detailed information to cover

**E-Text** ***Book*** has Sections
- Introduction Section
- Foundations Section
- Number Systems Section
- Logic/Digital Circuits Section
- Assembly Programming Section

Each **Topic** is a page of information for that *topic*

## Book

Initial page for a Book

```text
---
title: Computer Organization EText
description: 
pageClass: Book
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

## Introduction
```
## Section Pages

Main page for a Section, which presents more detailed parts of a Unit, like *unsigned binary numbers* or *2's complement*
Sections will contain 1 or more [topics](#topic-pages) that present details information, how-tos, and examples

```text
---
title: UNIT - SECTION
shorttitle: SECTION OVERVIEW DESCRIPTION
pageClass: Section
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.shorttitle }}**

INTRODUCTION OF SECTION

## [UNIT X](LINK TO UNIT FILE)
### UNIT DESCTIPTION
* LIST OF UNIT SECTIONS

```

## Unit Pages

Main page for a Unit, which presents an overview of a complex concept, like *binary numbers* or *logic gates*
Units will contain 1 or more [sections](#section-pages) that present more detailed information

```text
---
title: UNIT
shorttitle: UNIT OVERVIEW DESCRIPTION
pageClass: Unit
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.shorttitle }}**

INTRODUCTION OF UNIT

## [SECTION NAME](LINK TO SECTION)
OVERVIEW OF SECTION

```

## Topic Pages

Main page for a Topic, which presents lowest level of detailed parts of a related Section, like *adding 2 unsigned binary strings* or *algorithm for converting to 2's complement*

```text
---
title: UNIT - SECTION - TOPIC
description: TOPIC OVERVIEW DESCRIPTION
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
}]" />

## Introduction

## TOPIC X

## TOPIC Y

## Conclusion

```