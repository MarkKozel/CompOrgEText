  .ORIG x3000

    LD R1, myData

    BRzp Done
        NOT R1, R1
        ADD R1, R1, #1

    Done 
        ST R1, myData
    HALT

    myData .fill #-2
  .END 