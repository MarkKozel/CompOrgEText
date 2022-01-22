---
title: Getting Started with the LC-3
shorttitle: TBD

tags: []
---
# {{ $frontmatter.title }}
**{{ $frontmatter.shorttitle }}**

LC-3 is a simulated Von Neumann computer Instruction Set Architecture (ISA). Its purpose is solely for teaching Assembly programming and underlining control micro architecture

The LC-3 editor and simulator are used in the course to use the defined ISA to create programs that preform standard Input-Processing-Output flow implemented in the lowest-level human-readable language, Assembly

## LC-3 Getting Started

<Badge text="Version 3.01" type="tip"/>

::: tip Download the Tools 
There are a few different versions out there. To ensure we are all using the same version, download as described below

[McGraw Hill LC-3 Simulator](https://highered.mheducation.com/sites/0072467509/student_view0/lc-3_simulator.html)
Download the Windows Version 3.01
Run the downloaded executable, then select the directory to install the tools
:::

### The LC-3 Tools

#### LC-3Edit

The LC-3 editor is used to create, modify, and store LC-3 assembly source code. The editor also contains the assembler tools to generate LC-3 assembly object code
![LC-3 Edit Main Window](/assets/img/LC3/LC3EditMain.png)

#### Simulate

Once LC-3 assembly source code is assembled into object code, it is loaded into the Simulate environment. The simulator is a virtual LC-3 Microarchitecture that will execute object code. The environment shows the state of general registers, program and instruction registers, condition code, and contents of all RAM.

It also provides a debugger to step through object code 1 line at a time
![LC-3 Simulate Main Window](/assets/img/LC3/LC3SimulateMain.png)
::: tip
Debugging is a separate tutorial
:::

### Using the Tools
