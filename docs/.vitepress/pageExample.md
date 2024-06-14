<!-- 
A **Book** has **Sections**
A **Section** has **Units** -or- no **Units** if the section is simple
A **Unit** optionally has **Topics**
A **Topic** is the detailed information to cover 
-->
---
title: BOOK TITLE
description: DESCRIPTION
pageClass: Book
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

## Introduction

## Section 1

## Section 2

---
title: SECTION TITLE
parent: Computer Organization EText
description: DESCRIPTION
pageClass: Section
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

## Unit 1

## Unit 2

---
title: UNIT TITLE
description: DESCRIPTION
pageClass: Unit
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

some high-level introduction

## Topic 1
[Topic 1](./Topic 1)
Description of Topic



---
title: TITLE
parent: PARENT TITLE
description: DESCRIPTION
pageClass: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

## Introduction

## Concept 1

## Concept 2

## Conclusion