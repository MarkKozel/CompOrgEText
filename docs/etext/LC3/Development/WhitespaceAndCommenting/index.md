# LC-3 Formatting

LC-3 assembler will ignore empty lines and comments when creating the .obj file for execution in Simulate

## Whitespace

### Indenting

Tabs and Spaces can be used to indent code. This will improve readability

:::: code-group
::: code-group-item Not Indented
@[code](./whitespace1.asm)
:::
::: code-group-item Indented
@[code](./whitespace2.asm)
:::
::::

View the Not Indented and Indented tabs to compare the visual effect of indenting

### Blank Lines

Blank lines organize code into associated blocks. This helps show code that is with a context, like an IF block

:::: code-group
::: code-group-item No Blank Lines
@[code](./whitespace2.asm)
:::
::: code-group-item Blank Lines
@[code](./whitespace3.asm)
:::
::::

View the No Blank Lines and Blank Lines tabs to compare the visual effect of using blanks lines


## Comments

### Block Comments
When using blank lines, it is helpful the start with a comment describing what the block does

:::: code-group
::: code-group-item No Comments
@[code](./whitespace3.asm)
:::
::: code-group-item Block Comments
@[code](./blockcomments.asm)
:::
::::

View the No No Comments and Block Comments tabs to compare the visual effect of using block comments

### Inline Comments
Add comments at the end of lines that are not obvious what they do. It is safe to expect other people viewing your code understand the language, so comments should not be an LC-3 Tutorial

These comments explain the purpose of the line

:::: code-group
::: code-group-item No Inline Comments
@[code](./blockcomments.asm)
:::
::: code-group-item Inline Comments
@[code](./inlinecomments.asm)
:::
::::

View the No No Inline Comments and Inline Comments tabs to compare the visual effect of using block comments

### Function Comments
This is an overview of what the code does at a high-level

:::: code-group
::: code-group-item No Function Comments
@[code](./inlinecomments.asm)
:::
::: code-group-item Function Comments
@[code](./functioncomments.asm)
:::
::::

View the No No Function Comments and Function Comments tabs to compare the visual effect of using block comments