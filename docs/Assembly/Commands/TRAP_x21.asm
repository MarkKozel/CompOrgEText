.ORIG x3000
  LD R0, MyChar	 ; Load 'A' into R0
  TRAP x21 	 ; Print 'A' to display
  HALT
MyChar .FILL x65 ; acscii 'A'
.END