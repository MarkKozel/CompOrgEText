This is an Example of a generic ADD instruction State Entry.

![von Neumann Model - Control Unit](/images/Foundations/vonNeumann/StateMachineEntry_ADD.png)

The Control Unit has decoded an assembly instruction and determined it will add two (2) values stored in the General Purpose (GP) Registers and store the result in the GP Register. When complete, the Condition Register (CC) is updated to indicate that the result was positive, negative, or zero.

1. Copy the first value from a GP Register into the Data Bus to transfer it to the ALU
1. Copy the second value from a GP Register into the Data Bus to transfer it to the ALU
1. Send the ADD signal to the ALU
1. Extract the result (placed on the Data Bus by the ALU) from the bus
1. Copy result into a GP Register
1. Update the CC Register based on the result's sign/value