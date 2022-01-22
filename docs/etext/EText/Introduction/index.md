---
title: Introduction to Computer Organization
shorttitle: Description of main topics to be covered in this course
pageType: Unit
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.shorttitle }}**

## Introduction

### Themes of this Course
#### Abstraction
Humans, by default, understand the world through classifying and grouping information about the world in which we live. Associating items based on similarities and differences helps us communicate our understandings of our world. It could be argued that this capability of humans is something that sets us apart from other animals

A key element to learning and communicating elements in the physical world is our ability to create abstraction layers. That is, defining different levels of detail about an element to be used in different contexts

::: details Abstraction Example
If you were describing email to a person, if would be helpful to know their understanding of things like the Internet, computers, web browsers, office memos, etc

For someone with a hands-on understanding of these concepts, such as a fellow CS student, you would use terms like *Ethernet, WiFi, Authentication Credentials, Service Provider, Spam* without additional explanation

For someone that uses email, but is not technically trained, you would use words like *Internet Connection, Account Login, GMail, Unwanted emails*, likely without needing and additional explanation

And, to describe email to someone that does not use a computer regularly, you will use terms like *Computer's Connection to other computers, Sign-in information, Company that provides E-Mail service*
:::

Abstraction works in layers, each having more details and specific meaning

#### Algorithms
Our world functions on sets of ordered steps, organized is an efficient and effective sequence to reach some solution. Changing the order and the result is likely to be different

These groups of steps make up an algorithm that complete a cycle

::: details Algorithm Example
They typical college class flow can be described as the following algorithm. This cycle would repeat for each new chapter or topic
1. Instructor lectures on new material
2. Students complete quiz to see they understand
3. Instructor provide feedback on commonly missed questions
4. Students complete assignment to put their understanding to the test
5. Instructor provides feedback on assignment to ensure students understanding
:::

Algorithms can be written at different levels of detail (Abstraction Levels) depending on the audience or purpose of the algorithm

#### Connecting Hardware and Software
Computer Science courses focus primarily on software (File Systems, Operating Systems, Network Protocols, Bits and Bytes). Computer Engineering courses focus primarily on hardware (Processors, Storage, Data Buses, Voltage and Current)

Computer Organization connects those to worlds, and explores how they work together to provide today's modern computer systems

To look discuss the interface between Hardware and Software, we need to dive down into the lowest levels of the Computer Abstraction Layers. We will learn how a 5-volt current becomes a bit of data, Why the timing of hardware is essential of digital data integrity, and How a set of electronic circuits can reliably manipulate bits into useful data

#### Programming Approaches and Debugging
As a CS student, you have already programmed in a high-level language, like Java. In that process you have taken a problem and solved it with a program. In doing so, you have likely encountered an error in your program, and had to change your code to make it work

In computer organization, you will work in a low-level programming language to solve similar problems. In the process, you will learn ways to plan out your program to minimize errors. And, since errors are still likely to occur, you will learn tools and methods to debug your code

While you will be working in a low-level language, the planning and debugging practices can be applied to higher-level languages, using Abstraction
