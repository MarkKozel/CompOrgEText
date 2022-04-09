# Examples Section

<!-- ## MD file from outside (../LC3) folder
[LC-3 Test Page](../LC3/LC3Test.md) -->

## Import Code Snippets

```<<< @/VuePressTests/Examples/Another.md```

<<< @/VuePressTests/Examples/Another.md


```@[code lang=markdown](@/VuePressTests/Templates/BookPage.md)```

@[code lang=markdown](@/VuePressTests/Templates/BookPage.md)


## Inject MD Snippets using markdown-it-include

```
!!!
include(VuePressTests/Examples/Another.md)
!!!

All on 1 line

Must use forward slashes, otherwise build on live site will fail
```

*start md injected into this page*
!!!include(VuePressTests/Examples/Another.md)!!!

*end md injected into this page*

## Page Templates
This resource is divided into Units
Units contain sections of more specific content (Units)

[Unit Template](./templates/0_Unit.md)

[Section Template](./templates/1_Section.md)

[Topic Template](./templates/2_Topic.md)

## Code Blocks

Option in default theme

Multi-tabbed code windows

````
<code-group>
<code-block title="YARN">
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>
````

<code-group>
<code-block title="YARN">
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>


## Links to other .md files
```md
[one.md](../one.md)
```
[one.md](../one.md)

[two.md](../two.md)

## Images
```
<img src="/images/CourseLogo.png" width="40%" height="40%">
```
<img src="/images/CourseLogo.png" width="40%" height="40%">

## Image in Markdown
```
![Alt text](/images/CourseLogo.png)
```
![Alt text](/images/CourseLogo.png)

## Text and Image in Table
```html
<table>
    <tr>
        <td style="width:20%" >Course Logo </td>
        <td style="width:80%"><img src="/images/CourseLogo.png" style="max-height:100%; max-width:100%"/> </td>
    </tr>
</table>
```
<table>
    <tr>
        <td style="width:20%" >Course Logo </td>
        <td style="width:80%"><img src="/images/CourseLogo.png" style="max-height:100%; max-width:100%"/> </td>
    </tr>
</table>

## Custom VUE Components
vue files are in .vuepress\component folder

### LC-3 Instructions

```vue
<LC3Instruction opName="Some LC-3 Instruction" :bitPattern="{OpCode:'1010', More: '101010', TheRest:'101010'}" :descriptions="[{OPCode:''},{More:'more bits'},{TheRest:'Final bits'}]"  :examples="['TRAP x23 ; Call IN trap rountine', 'IN ; Call IN trap rountine']"/>
```

<LC3Instruction opName="Some LC-3 Instruction" :bitPattern="{OpCode:'1010', More: '101010', TheRest:'101010'}" :descriptions="[{OPCode:''},{More:'more bits'},{TheRest:'Final bits'}]"  :examples="['TRAP x23 ; Call IN trap routine', 'IN ; Call IN trap routine']"/>

#### Props
  - **opName**: { String} Title at top of Instruction Box
  - **bitPattern**: { Object } Contains name/bit string pairs for Bit section in table
  - **descriptions**: { Array } Contains individual objects with name/description pairs
  - **examples**: { Array } string elements with 1 or more examples of instruction

### True/False Inline Questions
vue files are in .vuepress\component folder

```vue
<QuestionTF question="C's get Degrees" answer='true' rightAnswerFeedback="Technically true, but Bs and As are still better" wrongAnswerFeedback="Although technically incorrect, shooting higher is bound to be better"/>
```

<QuestionTF question="C's get Degrees" answer='true' rightAnswerFeedback="Technically true, but Bs and As are still better" wrongAnswerFeedback="Although technically incorrect, shooting higher is bound to be better"/>


### Multiple Choice Inline Question

```vue
<QuestionMC question="The best way to get past a problem is..." answer='C' AChoice="Ignore it" BChoice="Deny as long as possible" CChoice="Address is directly" DChoice="Hope tomorrow is better" rightAnswerFeedback="Right! It make make others uncomfortable, but this is better in the long term" wrongAnswerFeedback="Bandaid Solution!"/>
```

<QuestionMC question="The best way to get past a problem is..." answer='C' AChoice="Ignore it" BChoice="Deny as long as possible" CChoice="Address is directly" DChoice="Hope tomorrow is better" rightAnswerFeedback="Right! It make make others uncomfortable, but this is better in the long term" wrongAnswerFeedback="Bandaid Solution!"/>


### You Do It activity header

```vue
<YouDoIt time=12 instructions="follow the white rabbit"/>
```


<YouDoIt time=12 instructions="follow the white rabbit"/>


### Key Concepts
```vue
<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
},
{
  Concept:'Ambiguity',
  Details:'Imprecise nature of a construct. For Natural Language, how individuals interprets the meaning or intent of a word or phrase'
},
{
  Concept:'Algorithm',
  Details:'In the context of Computer Science, re-writing a Problem in a form that minimizes the Ambiguity of Human/Natural Language'
}
]" />
```

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
},
{
  Concept:'Ambiguity',
  Details:'Imprecise nature of a construct. For Natural Language, how individuals interprets the meaning or intent of a word or phrase'
},
{
  Concept:'Algorithm',
  Details:'In the context of Computer Science, re-writing a Problem in a form that minimizes the Ambiguity of Human/Natural Language'
}
]" />

## vuepress-plugin-container elements
see .vuepress/config.js
styles found in .vuepress/styles/index.styl

see [Plugin Page](https://vuepress.github.io/en/plugins/container)

### Read More
```md
::: readmore Abstraction Layers
[Abstraction Layers in Computer Architecture](https://en.wikipedia.org/wiki/Abstraction_layer#Computer_architecture)
High-level abstraction of computer architecture
:::
```
::: readmore Abstraction Layers
[Abstraction Layers in Computer Architecture](https://en.wikipedia.org/wiki/Abstraction_layer#Computer_architecture)
High-level abstraction of computer architecture
:::

### Consider It
```md
::: considerit Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force
:::
```
::: considerit Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force
:::


### What's Going On
```md
::: whatsgoingon
Here's the 411 on the thing, above...
1. this
1. that
1. the other
:::
```
::: whatsgoingon
Here's the 411 on the thing, above...
1. this
1. that
1. the other
:::

### By The Numbers

```md
::: bythenumbers Test Table
|table|data|
|-|-|
|1|2|
:::
```

::: bythenumbers Test Table
|table|data|
|-|-|
|1|2|
:::


### Right container (with link)
```md
::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::
```
::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::

### Details
```md
::: details
Tip container of `@vuepress/theme-default`
:::
```
::: details
Tip container of `@vuepress/theme-default`
:::

### Tip
```md
::: tip
Tip container of `@vuepress/theme-default`
:::
```
::: tip
Tip container of `@vuepress/theme-default`
:::

### Warning
```md
::: warning
Tip container of `@vuepress/theme-default`
:::
```
::: warning
Tip container of `@vuepress/theme-default`
:::

### Danger
```md
::: danger
Tip container of `@vuepress/theme-default`
:::
```
::: danger
Tip container of `@vuepress/theme-default`
:::

