;Updated 11/3/2022
.ORIG x3000
  AND R0, R0, #0  ;Load x with 0
  AND R1, R1, #0  ;Load i with 0

  ; for(i = 0; i < 10; i++)
  ForLoop 
          ADD R0, R0, #1    ;Work: x += 1
          ADD R1, R0, #-10  ;Test to loop again...Update i with x - 10
          BRn ForLoop       ;Loop again if i is negative
                            ;Fall through to Done if i is 0 or positive
  Done HALT
.END
