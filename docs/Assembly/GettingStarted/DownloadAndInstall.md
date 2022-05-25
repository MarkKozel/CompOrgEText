---
title: Download and Install LC-3
description: Setup the LC-3 Tools for this Section
pageClass: Topic
tags: [download, install, setup]
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
  {
  Concept:'Little Computer 3 (LC-3) is an educational environment',
  Details:'We will be using a very simple environment to learn assembly. Is is highly simplified, but contains plenty of instructions to expose students to the level of programming'
},
  {
  Concept:'LC-3 is Windows-only',
  Details:'The official version only runs on the Windows platform. Students may need to use computer labs on campus or get access to a Windows system if they do not own one.'
},
{
  Concept:'Download the correct version',
  Details:'There are many variations of LC-3 created by schools and students. Ensure you download the correct version for our class'
}]" />

## Introduction

The Little Computer 3 (LC-3) assembly environment is an emulated Instruction Set Architecture (ISA) used to learn the basics of assembly language programming

The ISA is limited to 20+ actual instructions, but contains enough capability to learn and experiment with assembly


LC-3 is a simulated Von Neumann computer Instruction Set Architecture (ISA). Its purpose is solely for teaching Assembly programming and underlining control micro architecture

The LC-3 editor and simulator are used in the course to use the defined ISA to create programs that preform standard Input-Processing-Output flow implemented in the lowest-level human-readable language, Assembly

### Downloading the Tools

<Badge text="Version 3.01" type="tip"/> <Badge text="Windows Only" type="warning"/>

In class, we will be using version 3.01. Windows versions should be downloaded from McGraw Hill (https://highered.mheducation.com/sites/0072467509/student_view0/lc-3_simulator.html)

> This site also contains a Unix version. It is not recommended for classwork as it is command-line only. Examples and classroom instruction will require the graphical editor and simulate tools

There are various implementations of the LC-3 available online, but most are student projects or hobby programmer implementations. Using these version may change your results

### Installation
Both Tools and supporting files are not installed in the typical Windows installation process. The downloaded .exe for Windows is an auto-unzip files that will copy files to the chosen directory.
Uninstalling  only required deleting the directory contains the “installation”

![LC3 Installation Files](/images/AssemblyProgramming/GettingStarted/LC3Files.png)

### LC-3 Instruction Set Architecture (ISA) Reference

The linked pdf file contains a complete list of LC-3 instructions and assembly capabilities for our version of LC-3. Download this document and get aquatinted with it. We will be referring to it in class and it is a good reference when completing assignments and exams.

> [Download the complete LC-3 manual](/downloads/LC3/lc3-isa.pdf)

## Conclusion

Ensure that you have LC-3 version 3.0.1. You will need a Windows computer to run both applications.