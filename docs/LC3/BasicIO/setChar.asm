.ORIG x3000
	LD R0, A ; Load ascii value of 'A'

	; Write characher to screen
	WAIT 	LDI R1, DSR	; Check DSR for ready
		BRzp WAIT			; loop until DSR is empty/ready
	STI R0, DDR		; Update DDR to display character

		HALT
;End of Program

;Data Declarations-------------
	A	.FILL x41
	DSR	.FILL xFE04
	DDR	.FILL xFE06
.END