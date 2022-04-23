.ORIG x3000
x3000 LEA R1, MyArray1 ; Load the address of MyArray1 into R1
x3001 ADD R3, R3, #-2  ; Place -2 in R3
x3001 SDR R3, R1, #2   ; Store R3 into MyArray1[2]
x3002 MyArray1 .FILL #12 ; MyArray1[0]
x3003          .FILL #22 ; MyArray1[1]
x3004          .FILL #-7 ; MyArray1[2]. Will contain 2 after STR instruction executes