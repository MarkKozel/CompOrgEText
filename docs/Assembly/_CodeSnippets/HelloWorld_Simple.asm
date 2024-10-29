.ORIG x3000
LEA R0, HW;	Load address of first character
PUTS
HALT ;End of Program

;Data Declarations-------------
HW .STRINGZ "Hello, World!"; String to print
.END