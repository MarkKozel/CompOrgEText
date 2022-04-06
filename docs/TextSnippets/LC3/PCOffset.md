During assembly, the memory address of each instruction is calculated during the *First Pass* of the assembler. When teh assembler encounters a label, it adds the label and calculates memory location of that label in a **Symbol Table**.

Once all addresses are calculated and all symbols have be identified, the assembler starts the **Second Pass**. During this process, each instruction that reference a label is identified. The assembler looks up the label in the **Symbol Table**, then uses the associated address to calculate an offset from the instruction's memory address.

Recall that the Program Counter (PC) register keeps track of the next instruction's memory address when the program is running.

The assembler calculates what value the PC will contain for each instruction when it is executing. It uses this value and the address of the label to create an offset from the instruction to the label.

The 9-bit offset (offset from the expected PC values at runtime)calculated is added to the instruction's operands, based on the instruction's structure. This is the 9-bit PC Offset, notes as PCOffset9 in teh ISA documentation.