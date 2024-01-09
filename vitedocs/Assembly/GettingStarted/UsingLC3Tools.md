---
title: Using LC3Tools
parent: Getting Started
description: Install and Use the LC3Tools
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}

LC3Tools contains an editor and hardware simulator

## Editor 
![Editor Button](/images/LC3/LC3Tools_Editor_Button.png)
LC-3 assembly programs will be written and assembled (similar to compiling in Java programming) using the Editor view

![LC3Tools Editor](/images/LC3/LC3Tools_Editor.png)

The editor has controls on the left side to create a new file, save a file, open an existing file, and assemble a file

The main content area of the editor is where the .asm (assembly source code) is viewed and modified

## Simulator
![Simulator Button](/images/LC3/LC3Tools_Simulator_Button.png)
In order to run an assembly program, computer hardware or simulated hardware is needed. LC3Tools provides a simulation tool that behaves like a virtual Little Computer 3 (LC-3) machine

![LC3Tools Simulator](/images/LC3/LC3Tools_Simulator.png)

The simulator has controls on the left to open an existing .obj file (a complied assembly program), run and reload an .obj file, as well as debugging and hardware reset options

The main content area of the simulator contains hardware registers, memory, and Input/Output console

## Before Your Begin
Click on the *gear button* and ensure that the following options are set in your LC3Tools installation:
![LC3Tools Settings](/images/LC3/LC3Tools_Settings.png)

**Number View** is *Signed*

**Ignore privileged mode** is *enabled*

**Use less strict assembly** is *disabled*

You can set **Theme** to whichever style you prefer
