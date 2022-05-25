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
- Assembly Section

Each **Topic** is a page of information for that *topic*

## Book

Initial page for a Book

[Book Page](BookPage)

<!-- <<< @/VuePressTests/Templates/BookPage.md -->

@[code lang=markdown](@/VuePressTests/Templates/BookPage.md)

## Section Pages

Main page for a Section, which presents more detailed parts of a Unit, like *unsigned binary numbers* or *2's complement*
Sections will contain 1 or more [topics](#topic-pages) that present details information, how-tos, and examples

[Section Page](SectionPage)

<<< @/VuePressTests/Templates/SectionPage.md

Main page for a Unit, which presents an overview of a complex concept, like *binary numbers* or *logic gates*
Units will contain 1 or more [sections](#section-pages) that present more detailed information

## Unit Pages

[Unit Page](UnitPage)

<<< @/VuePressTests/Templates/UnitPage.md

Main page for a Unit, which presents an overview of a complex concept, like *binary numbers* or *logic gates*
Units will contain 1 or more [sections](#section-pages) that present more detailed information

## Topic Page

[Topic Page](TopicPage)

<<< @/VuePressTests/Templates/TopicPage.md

## Topic Page (LC3 Instructions)

[Topic Page (LC-3 Instruction)](TopicPageLC3Instruction)

<<< @/VuePressTests/Templates/TopicPageLC3Instruction.md