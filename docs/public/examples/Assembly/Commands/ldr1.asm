.ORIG x3000
x3000 LEA R1, MyArray1 ; Load the address of MyArray1 into R1
x3001 LDR R3, R1, #2   ; Load MyArray1[2] into R3
x3002 MyArray1 .FILL #12 ; MyArray1[0]
x3003          .FILL #22 ; MyArray1[1]
x3004          .FILL #-7 ; MyArray1[2]