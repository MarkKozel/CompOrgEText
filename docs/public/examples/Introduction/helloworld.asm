.ORIG x3000

LEA R0, HW;	Load address of first character

Main  LDR R1, R0, #0; Load character
		  BRz Done ; If loaded character was zero, jump down to Done
 
 			; Got a character, print it
			WAIT1 	LDI R5, DSR	; Check DSR for ready
			BRzp WAIT1			; loop until DSR is empty/ready
			STI R1, DDR		; Copy character to display buffer...it will then be displayed

			ADD R0, R0, 1 ; change to reference to the address of the next character

			BR Main ; Loop back up and do it again

			; We are here when all characters are written
			; Write the NewLine character to the display
Done 	LD R0, NewLine
			; Write characher to screen
			WAIT2 	LDI R1, DSR	; Check DSR for ready
			BRzp WAIT2			; loop until DSR is empty/ready
			STI R0, DDR		; Update DDR to display character

HALT ;End of Program

;Data Declarations-------------
	HW .STRINGZ "Hello, World!"; String to print
	NewLine .FILL #13 ; Newline character

	;Display registers
	DSR	.FILL xFE04 ; Status Register
	DDR	.FILL xFE06 ; Data Buffer Register
.END