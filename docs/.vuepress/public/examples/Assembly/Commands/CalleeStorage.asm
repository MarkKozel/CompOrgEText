.ORIG x5000

mySub   ST R1, SaveR1 ;save R1
        ST R2, SaveR2 ;save R2
        ST R7, SaveR7 ;save R7

        ;code that changes R1 & R2
        AND R1, R1, #17
        ADD R2, R1, #-12

        LD R1, SaveR1 ;restore R1
        LD R2, SaveR2 ;restore R2
        LD R7, SaveR7 ;restore R7
        RET           ;Return back to caller with R1 & R2 restored

;Allocate 1 memory slots for storing registers
SaveR1  .BLKW 1
SaveR2  .BLKW 1
SaveR5  .BLKW 1