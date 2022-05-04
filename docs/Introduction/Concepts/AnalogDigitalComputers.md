---
title: Analog and Digital Computers
parent: Foundations
description: TODO
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Analog is infinite',
  Details:'Measurements such as voltage or temperature effectively have and infinite set of possible values. Digital, by contrast, is fixed at two (2) distinct possibilities'
},
{  
  Concept:'Digital signals are best suited for modern computers',
  Details:'Creating circuits to use digital signals and store binary values is a core component of modern computer architecture' 
}
]" />

## Introduction

Humans developed devices to complete tasks (everyday and labor-intensive) 1) faster, and 2) reliably. As new materials and technologies become available (and cost-effective), these devices are upgraded or replaced.

::: left
It was left to people with rocks and sticks to turn and prepare soil for planting crops

As animals were domesticated, a work animal pulling wooden tools could prepare soil for planting quicker and more consistency that a group humans with shovels

As humans refined metals, the tools were replaced with steel plows

The creation of engines saw the mass replacement of work animals with tractors

Each stage of this brief (and overly-simplified) history of human agriculture improves speed, reliability, or both
:::

Computers evolved in a similar way, starting as people with special skills and training to tally or calculate numeric values. Likely driven by trade and the development of money, sellers and buyers wanted to know the value and quality of products, along with the changing value of currency they were using

Fast-forward to today's high-speed stock market trading computers, considering thousands of variables to decide to _buy_ or _sell_ in the market

## Analog Computing Devices

::: left
Analog, in the computer context, means signals or data represented by values that have a continuous and infinite number of variations

i.e.: The number of unique values between 0 and 1
:::

<QuestionMC question="Which of the following is made up of analog values?" answer='B' AChoice="A light switch" BChoice="The tension of a spring" CChoice="The number of students in our class this semester" DChoice="State of a traffic light" rightAnswerFeedback="Right! With finer and finer instruments, we can measure a spring with ever more accuracy" wrongAnswerFeedback="Incorrect. Spring Tension is the only analog value in the list. All others have a few pre-set values and/or may even have maximum values (like class size)"/>

Until relatively recently, computers were not digital devices. They were mechanical and electrical analog systems. These systems use mechanical or electrical motion to represent information

### Mechanical Analog Systems

Gears and springs could be constructed to retain states and move to different states in a pre-determined sequence.

These Mechanical Computers could be built to a wide varies of tasks. The complexity of these systems were driven my the difficulty of the task they performs

Mechanical computers were typically single-calculate (Specific-Purpose) computers. Changing the "program" meant swapping out gears, springs, and levers for a different set

More complex systems required special training to operate, maintain, and repair
::: readmore Predicting the Tides with Torque
[Nordsieck's Machine](https://www.computerhistory.org/revolution/analog-computers/3/141)
:::

<iframe src="https://player.vimeo.com/video/70589461" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p>UCLA&#039;s 1948 Mechanical Computer from <a href="https://vimeo.com/gizmodo">Gizmodo</a>.</p>

::: left
As seen in this video, electricity is used to turn shafts to move gears as needed

Also, the "program" us changed by swapping gears and shafts
:::

### Electrical Analog Systems

In the 1930s and 1940s, humans were able to make and control electricity to a highly precise level. With improved electrical switched, resistors, and capacitors; mechanical systems in analog computers were replaces with electrical current to represent states and changes in states

While electricity was used in Mechanical Computers, the power was used to turn shafts and move gears. True Electrical Analog computer systems use electricity in place of the gears, to represent states and changes in the calculations
[Analog Goes Electronic](https://www.computerhistory.org/revolution/analog-computers/3/150)

Electric circuits replaced springs and gears with a faster and more reliable means of computing. Failure rates and normal wear-and-tear issues were minimized by removing mechanical systems

Electrical computing systems also were also easier to modify "programs"

::: readmore Analog Computer Timeline
[CHM Analog Computers](https://www.computerhistory.org/revolution/analog-computers/3)
:::

## Digital Computing Devices

Further advances in electronic technology drove the next major advance in computers...**Vacuum Tubes**. While eventually replaced with transistors, vacuum tubes allowed computers to control electricity with electricity. Coupled with control circuits, digital computers could now be programmed and run using electricity to perform logical operations and maintain data between steps

::: left
Digital, in the computer context, means signals or data represented by values that have a finite set of possible values. The possible values for a digital system are finite, and do not have "fractional parts"

Digital computers are based on the binary (base 2) number system, where the only single-digit values are 0 and 1

i.e. the number a values between 0 and 5 in the whole number system
:::

::: readmore First Electrical Digital Computer
ENIAC (Electronic Numerical Integrator And Computer), built between 1943 and 1945—the first large-scale computer to run at electronic speed without being slowed by any mechanical parts.
[ENIAC](https://www.computerhistory.org/revolution/birth-of-the-computer/4/78)
:::

Vacuum tubes were replaced with **Transistors** in the late 1950s. Based on the semi-conducting nature of silicon, transistors able to reliably represent digital values (0 or 1) using electricity (as we recall, an analog medium). They were a simple replacement for vacuum tubes as they performs the same type of function

Transistors were, however, cheaper, more energy-efficient, and far more reliable that vacuum tubes

<QuestionMC question="Which of the following is made up of digital values?" answer='D' AChoice="The tension of a spring" BChoice="Your current interest level in this reading" CChoice="Pressure you can apply to a car's break pedal" DChoice="Number of students on this class's Wait List" rightAnswerFeedback="Right! Since we can't have 1/2 students signing up for classes, this value is digital" wrongAnswerFeedback="Incorrect. That value can have ever an infinite amount of variations. Students on a wait list can only be a count of whole students, and never a number in-between"/>

## Conclusion

Analog signals have an infinite number of possible values. Each may be a tiny bit different that the next, but they are measurably different.

Digital signals have a fixed number of values, two (2). Digital signals are well suited for electronic circuits and can easily represent binary values.