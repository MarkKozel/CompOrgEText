; Creates a new entry in the TRAP Jump Table
; Sets address x0700 into memory location x002a

.ORIG x002a ; Jump Table Address
.FILL x0700 ; Jump Table Entry
.END