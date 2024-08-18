# LC-3 Formatting

LC-3 assembler will ignore empty lines and comments when creating the .obj file for execution in Simulate

## Whitespace

### Indenting

Tabs and Spaces can be used to indent code. This will improve readability

::: code-group
<<< @/public/examples/AddlMaterials/Development/whitespace1.asm {asm}[Not Indented]
<<< @/public/examples/AddlMaterials/Development/whitespace2.asm {asm}[Indented]
:::

View the Not Indented and Indented tabs to compare the visual effect of indenting

### Blank Lines

Blank lines organize code into associated blocks. This helps show code that is with a context, like an IF block

::: code-group
<<< @/public/examples/AddlMaterials/Development/whitespace2.asm {asm}[No Blank Lines]
<<< @/public/examples/AddlMaterials/Development/whitespace3.asm {asm}[Blank Lines]
:::

View the No Blank Lines and Blank Lines tabs to compare the visual effect of using blanks lines

## Comments

### Block Comments
When using blank lines, it is helpful the start with a comment describing what the block does

::: code-group
<<< @/public/examples/AddlMaterials/Development/whitespace3.asm {asm}[No Comments]
<<< @/public/examples/AddlMaterials/Development/blockcomments.asm {asm}[Block Comments]
:::

View the No No Comments and Block Comments tabs to compare the visual effect of using block comments

### Inline Comments
Add comments at the end of lines that are not obvious what they do. It is safe to expect other people viewing your code understand the language, so comments should not be an LC-3 Tutorial

These comments explain the purpose of the line

::: code-group
<<< @/public/examples/AddlMaterials/Development/blockcomments.asm {asm}[No Inline Comments]
<<< @/public/examples/AddlMaterials/Development/inlinecomments.asm {asm}[Inline Comments]
:::

View the No No Inline Comments and Inline Comments tabs to compare the visual effect of using block comments

### Function Comments
This is an overview of what the code does at a high-level

::: code-group
<<< @/public/examples/AddlMaterials/Development/inlinecomments.asm {asm}[No Function Comments]
<<< @/public/examples/AddlMaterials/Development/functioncomments.asm {asm}[Function Comments]
:::

View the No No Function Comments and Function Comments tabs to compare the visual effect of using block comments