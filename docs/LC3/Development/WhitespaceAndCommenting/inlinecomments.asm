  .ORIG x3000
    
    LD R1, myData ; Load data to evaluate

    BRzp Done  ; Skip around if myData is not negative
        ;2's complement conversion
        ;from negative to positive
        NOT R1, R1
        ADD R1, R1, #1

    Done 
        ST R1, myData ; Store result
    HALT

    myData .fill #-2
  .END 