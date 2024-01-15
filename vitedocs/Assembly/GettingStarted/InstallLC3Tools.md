---
title: Setting Up LC3Tools
parent: Getting Started
description: Install LC3Tools
pageClass: Topic
tags: []
---

<!-- <script setup>
import KeyConcepts from '../../.vitepress/components/KeyConcepts.vue'
</script> -->

# {{ $frontmatter.title }}
<!-- **{{ $frontmatter.description }}** -->

<!-- <KeyConcepts :ConceptArray= "[
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
}]" /> -->

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/uOfsziZaPl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->


The Little Computer 3 (LC-3) assembly environment is an emulated Instruction Set Architecture (ISA) used to learn the basics of assembly language programming

The ISA is limited to 20+ actual instructions, but contains enough capability to learn and experiment with assembly

LC-3 is a simulated Von Neumann computer Instruction Set Architecture (ISA). Its purpose is solely for teaching Assembly programming and underlining control micro architecture

The LC-3 editor and simulator are used in the course to use the defined ISA to create programs that preform standard Input-Processing-Output flow implemented in the lowest-level human-readable language, Assembly

## Download the Tools
LC3Tools is a free tool maintained on Github. It is licensed under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)

The tools will run under Windows, MacOS, and modern Linux operating system

Download the appropriate version from the [LC3Tools 2.0.2 Build](https://github.com/chiragsakhuja/lc3tools/releases/tag/v2.0.2). Use this link to view and download the correct setup/installer for your personal system

:::tip Note for Windows users
The ```LC3Tools-2.0.2.exe``` release is a portable version that can be loaded onto a thumbdrive or portable disk fro use on any Win10 system

```LC3Tools-Setup-2.0.2.exe``` is an installer that is meant to install on a single Win10 system

When in doubt, use the portable version
:::

### Downloading the Docs and Template

<!-- <Badge text="Version 3.01" type="tip"/> <Badge text="Windows Only" type="warning"/> -->

> [Download the LC-3 docs](/downloads/LC3/LC3Docs.zip)

<!-- In class, we will be using version 3.01. Windows versions should be downloaded from McGraw Hill (https://highered.mheducation.com/sites/0072467509/student_view0/lc-3_simulator.html) -->

> Download and uncompress the file. You will be using these tools for the remainder of the semester

<!-- There are various implementations of the LC-3 available online, but most are student projects or hobby programmer implementations. Using these version may change your results -->

<!-- ### Installation
Both Tools and supporting files are not installed in the typical Windows installation process. The downloaded .exe for Windows is an auto-unzip files that will copy files to the chosen directory.
Uninstalling  only required deleting the directory contains the “installation”

![LC3 Installation Files](/images/AssemblyProgramming/GettingStarted/LC3Files.png) -->

### LC-3 Instruction Set Architecture (ISA) Reference and Template

The uncompressed file includes a ```Docs``` folder containing reference materials for the LC-3

It also contains the ```Assembly_Template.asm``` file. You will use this file to start all assignments