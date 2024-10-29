.ORIG x3000
  LEA R0, HWString	; Load address of 1st character of HWString
  TRAP x22 	        ; Print HWString to display
  HALT
HWString .STRINGZ "Hello, world!"
.END