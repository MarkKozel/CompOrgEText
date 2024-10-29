During assembly, the memory address of each instruction is calculated during the *First Pass* of the assembler. When the assembler encounters a label, it adds the label and calculates memory location of that label in a **Symbol Table**.

Once all addresses are calculated and all symbols have be identified, the assembler starts the **Second Pass**. During this process, each instruction that reference a label is identified. The assembler looks up the label in the **Symbol Table**, then uses the associated address to calculate an offset from the instruction's memory address.

Recall that the Program Counter (PC) register keeps track of the next instruction's memory address when the program is running.

The assembler calculates what value the PC will contain for each instruction when it is executing. It uses this value and the address of the label to create an offset from the instruction to the label. Using a 9-bit offset from the current PC value, the address calculated can be in the range of -256 to +255 memory location before the current PC.

The 9-bit offset (offset from the expected PC values at runtime) calculated is added to the instruction's operands, based on the instruction's structure. This is the 9-bit PC Offset, notes as PCOffset9 in the ISA documentation.

![PCOffset Diagram](/images/Snippets/PCOffset9_Example.png)

- The blue arrow indicates the current instruction being executed.  In this example, the instruction at x3001 is being executed
- The **PC** is x3002 (recall the PC is incremented at fetch stage of an instruction cycle)
- **MyVal1** memory label is at x3004
- **MyVal1** (x3004) - **PC** (x3002) = 2<sub>10</sub> -or- 000000010 <sub>2</sub>

> PC Offsets and the PCOffset9 binary values are shown for other instruction
>
> The PC Offset/PCOffset9 values need to be recalculated each time the PC changes