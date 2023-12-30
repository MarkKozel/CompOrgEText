---
title: LC-3 Source File Editing
parent: Getting Started
description: Writing and Assembling LC-3 Source Code
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
  {
  Concept:'LC-3 Edit is the editing tool used for this course',
  Details:'Assembly programs are created in LC-3 Edit. They can be saved and loaded'
},
{
  Concept:'LC-3 Edit also assembles the source code',
  Details:'Assembling source code results in an object file that can be loaded into the Simulate tool for execution. Assembling is similar to compiling java source code'
}]" />

## Introduction

LC3Edit is the tool used to edit source (```.asm```) files. It provides some basic text editing capabilities

It also contains the LC-3 assembler. This tool is similar to a Java complier. The assembler converts the ```.asm``` assembly source code into ```.obj``` assembly run-time/executable code

## Starting the Tools
Double click on LC3Edit.exe to start the programs.
Click **File** > **Exit** or the **X** in the upper-right of the program will close it.


## LC-3Edit
```LC3Edit.exe```

The LC3 editor is used to create, modify, and store LC-3 assembly source code. The editor also contains the assembler tools to generate LC-3 assembly object code
![LC3 LC3Edit Breakdown](/images/AssemblyProgramming/GettingStarted/LC3Edit_Breakdown.jpg)

The LC-3 editor is used to create, modify, and store LC-3 assembly source code

The editor also contains the assembler tools to generate LC-3 assembly object code

::: tip Editor Vintage
The LC-3 editor is *essentially* the IDE used to program in LC-3 Assembly. It is, however, and standard Windows text editor from the ~2000. It does not have standard IDE tools, such as styles, configurable formatting, extensions, etc.

You may choose to create LC-3 source files in another text editor, but the code must be opened in LC3Edit to be assembled

Also, formatting (tabs vs. spaces) tend to get mangles between new IDE editors and the LC-3Edit tool. You will need to fix the formatting before submitting assignments for grading
:::

### LC-3 Edit with Code
In this example, source code has been entered into the Editing Area. The code was assembled and the success messages are displayed in the Output Area

![LC-3 Edit Main Window](/images/AssemblyProgramming/GettingStarted/LC3EditMain.png)

### Editing Area
The main window is where LC-3 source code is edited. Tab and spaces are used to create readable source code with whitespace

Above the edit window are buttons and drop-down menus for performing tasks in the editor

### Toolbar > File Buttons
![LC3 Edit File Buttons](/images/AssemblyProgramming/GettingStarted/LC3EditFileBtns.png)

The File Buttons contain standard Windows file functions:
* New - Clear edit window to make a new file
* Open - Navigate and select existing source file for editing
* Save - Navigate and store current source file to disk

### Toolbar > Build Buttons
![LC3 Edit Build Buttons](/images/AssemblyProgramming/GettingStarted/LC3EditBuildBtns.png)

The Build Buttons are used to assemble source file that was previous loaded into the Edit Window

There are 3 different formats that can be assembled into LC-3 object code:
* Binary (B) - Source code was written in 16-bit strings
* Hex (X) - Source code was written in 4-byte hexadecimal strings
* Assembly (asm) - Source code was written in LC-3 Assembly code

In most cases, you will be writing source code in ASM (Assembly) format

### Output Area

This area show the results of program assembly. If there are no errors, you will see a message that pass 1 and pass 2 completed. Any errors that occur during assembly will show line numbers and some detail on the error. Double-click on the line number to highlight it in the Edit Area

## Conclusion

The LC-3 Edit programs contains tools and the editing capability to create and assemble programs.