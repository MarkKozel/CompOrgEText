.ORIG x3000

; Get input character
 START	LDI R1, KBSR	; Check the KBSR
	    	BRzp START	  ; Loop back if no new key yet
	LDI R0, KBDR	      ; key pressed, load ascii value

	HALT  ;End of Program

;Data Declarations-------------
	KBSR	.FILL xFE00	;Keyboard Status Register
	KBDR	.FILL xFE02 ;Keyboard Data Register
.END