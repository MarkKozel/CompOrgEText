# Initial Proposal

## CS 131 Course Info:
Basics of computer Number Systems, Logic Operations, Computer Electronics from transistors to CPUs

Instruction Set Architecture (ISA) and Assembly Language Programming using the Little Computer 3 (LC-3) ISA emulator run on Windows PCs

Current Textbook: Patt & Patel. introduction to computing systems: from bits & gates to C & beyond. Second Edition. McGraw-Hill. ISBN-hardback: 978-0-07-246750-5 2003

Purchase: $150 (new) $112 (used). Rental $97 (new) $60 (used)

The current course structure is tied closely to the organization of the textbook. The textbook is organized such that students do not get to program in assembly language until the 6th week of class. The first 5 weeks are building foundational info, but no connection to programming until later. I feel using programming throughout the course would help reinforce the fundamentals with hands-on programming opportunities

Create an updated, online textbook with links to OER and Creative Commons materials, include interactive elements, and make textbook and textbook build environment freely available

### Updated, Online Textbook
While the core Computer Organization technology has not changed in the last 20 years, the materials and information available online has grown. The current 2003 textbook lacks any links to online materials. It does not allow for interactive elements other than exercises at the end of each chapter. And, as a printed text, is not easily updatable, not is it searchable for keywords

Given the Internet and computers are now standard tools for modern students, an online textbook also makes the material more readily available

### OER and Creative Commons Materials
While I did not find an OER textbook that fits this course, there are many pieces that can be integrated or linked within an online textbook. This will provide students with different ways of presenting similar material

### Include Interactive Elements
An online textbook can be updated easily and can include elements that require students to stop and think about important concepts and ideas

Pages can include embedded videos to expand on the information being presented. Videos from other creators can provide another way of presenting or exploring a topic

### Make Textbook and Textbook Build Environment Freely Available
The online documentation framework I plan to use is VitePress (https://vitepress.dev). It is a static website generator that incorporates Vue (dynamic, interactive) web page components. VitePress also supports plug-ins to support various web site capabilities (such as copy/paste elements, navigation options, and analytic data gathering)

A VitePress site is created using Markdown (simplified HTML syntax), style and theme configuration, plugin implementations, and Vue components. This is the Documentation Source

The VitePress site is built into a static web site that can be deployed to various hosting sites for student use

The Documentation Source will be available on GitHub to allow others to instructors to modify and deploy their own version of the documentation. Other instructors couple then deploy their modified documentation to their own web sites for their students to access