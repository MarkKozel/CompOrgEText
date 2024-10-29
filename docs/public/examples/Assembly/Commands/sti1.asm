.ORIG x3000
x3000 ADD R3, R3, #14 
x3001 STI R3, MyAddr1; memory location x7000 will be updated with value found in R3 
x3002 MyAddr1 .FILL x7000 ; address to update