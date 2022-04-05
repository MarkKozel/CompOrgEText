---
title: Design
parent: Development
description: Best Practices for Designing, Implementing, and Testing LC-3 Code
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**


<KeyConcepts :ConceptArray= "[
{
  Concept:'Software Engineering',
  Details:'A methodical practice of creating a program'
},
{
  Concept:'Software Engineering Phases',
  Details:'Planning, Design, Implementation, and Testing'
},
{
  Concept:'Scaling Software Engineering',
  Details:'Processes can be modified to fit the complexity of the project'
},
]" />

## Introduction
Software engineering is the methodical process of building software that
1. solves a prescribed problem
1. is designed to a level appropriate to the complexity of the problem
1. implemented is a standard format/structure 
1. is testable to ensure it solves the problem
1. is maintainable/upgradable as the problem changes

The formality and level-of-detail for these processes varies, based on project scope and company/organization requirements

Large software corporations likely has written processes, detailed rules and templates, and people that just manage their processes. For a class project, processes and rules are usually dictated by the instructor and tend to be pretty informal

### Why Have Processes?

In the classroom setting, formal processes take too long to learn and use when the goal is to learn something like arrays or binary-tree searches. Also, because students are unlikely to re-use software/code in other classes, the overhead is unnecessary

For bigger work, like a semester-long project or a senior theses, having consistent rules, styles, and practices will produce a better produce...and a better grade

::: considerit College CS Group Projects
Imagine you and 2-3 other students working on a semester-long software project. It is likely that, after some consideration, your team will take the divide-and-conquer approach. Someone writes the GUI, another works on the database, etc

- Without discussing which language to use, or how the GUI will get data from the database, each team goes off to work on their own to code up their part
- How easy do you expect it will be to integrate everyone’s parts together the first time you all meet back up?
- What kinds of issues/re-work would you predict will need to occur just to get all the code to work together?	
:::

## Software Engineering
Software Engineering is a set of processes to improve planning, designing, implementation, and testing. When done at the right times, and to the right level of detail, it will make software projects run smoother and more likely to succeed

### Planning
Ensure the team understands the problem being addressed by the program

Once understood the team can discuss schedule, resources needed, potential problems, how to approach the design phase of the project, implementation plans, and how the software will be tested

> In Software Engineering, planning is the most important step. It defines all the work to be performed

### Design

Now that the team understands what they are doing, they refine the plan to a higher level of detail

> For large projects with many people involved, design may be split into groups based on disciplines. Software engineers will refine the software design, while Hardware Engineers will refine the hardware design

These sub-teams will need to sync up to ensure the overall design is cohesive

With a shared understanding of the work ahead, the teams can 
- Select hardware and software used to implement the program
- Identify any special skills needed to complete the work
- Break the work into phases
- Define the testing needed to prove the program works as expected

Any issues identified at this phase may feed back to Planning to re-plan as needed

### Implementation

With a well-defined design that clarifies the overall plan for the project, the team(s) begin making the project. Hardware is obtained, software is written, and the team integrates all of the items to verifies it all works

While the high-level description of this phase is pretty simple, this is where much of the effort occurs. Any issues found during Implementation may cause a revision of the Design (or even Planning)

At completion, the team has created a product that addresses the problem the project set out to solve

### Testing

Before delivering the project, testing proves that the program solves the original problem

Testing as defined during planning, and refined during the other phases, now validates the program. It insures the problem understood by the team is solved

> It is important to define testing at the start. Primarily because this is when much of the team's focus was on the problem and how it would be solved
> It is also essential that testing is not defined at the end. This is a time where people can be rushed and take shortcuts to complete the task

## Scaling Software Engineering

Scaling, in this context, means to change the complexity of the steps to fit the importance of the work

A large-scale software company will likely scale their Software Engineering steps to include many sub-steps. Their goal being to complete the project with as few problems as possible. A large company will also have subject-matter experts (SMEs) that only do certain tasks, such as Database Design, User Interfaces, Testing. SME's will have specific steps to guide the, through their part of the process

Students in a Computer Science course can scale these same projects to be simpler for a group project. They can benefit from the overall phases, but don't need to invest much time in each of the steps to product a working program

## Two Design Methodologies

[Top-Down and Bottom-Up Design](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design#Computer_science) approaches are two of many concepts available for Software Engineering

Both are solid approaches for Computer Science student to use. Each utilizes the general Software Engineering phases, but in very different ways

### Top-Down Design
Viewing the project as a whole. Spending more time on planning and designing. Each part of the program (such as each function that will be created) is understood

During Implementation the overall 'main' program is written and tested

Next individual parts are implemented and tested, one at a time

Finally, the overall program is tested as a whole to ensure all the parts work together

**Advantages**
- As a student completes and tests each part of the program, they can consider that part complete
- Any new issues are most likely to be cause by new parts, since previous parts were tested
- One final test with the entire program will verify all the parts work together as expected

**Disadvantages**
- More time is spent planning. The value in planing is not as obvious was writing actual code, so it seems wasteful
- Simple projects may not require much planning. For students, this may be as simple as reviewing the assignment and the programming language instructions

### Bottom-Up Design

Viewing the project as a set of parts that can be implemented and tested as standalone code, then integrated into overall project

Planning is minimal, primarily used to define the parts and how to test each. Parts must be able to run on their own to satisfy some part of the whole problem

Parts are implemented and tested. Testing of parts can be more rigorous because parts are simpler that a larger program.

Finally, the 'main' program is created and calls the parts (such as Java functions) in the right order and with the right data to solve the problem

**Advantages**
Defining a program as a set of parts or functions allows for multiple programmers to work on different parts at the same time
With one part defined as function, it can be tested with various data to ensure it handles different situations
Once thoroughly tested, a part can be considered complete
Because each parts solves some part of the problem, that part can be used in other programs to solve similar problems

**Disadvantages**
- Parts can be created and tested, but do the wrong thing. This won't be discovered until the final integration
- With multiple programmers working on a project, moe time must be spend ensure everyone understands what each of their parts are expected to do

> A purely Top-Down or Bottom-Up approach is unlikely to be a good approach in the real world. A mix of both, driven by the project complexity, is a common approach

## Conclusion

Software Engineering is the methodical practice of creating a program

Steps of Software Engineering can be scaled up or down to fit the complexity of the project

Top-Down and Bottom-Up design approaches are two different ways to create software. Each has different organization of the Software Engineering processes
