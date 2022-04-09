### For Loop Example

```java
int x = 0;
for(int i = 0; i < 10; i++) {
x += i; //Add current value if i to x
}
```

``` 
.ORIG x3000
  ADD R1, R1, #0; int x = 0
  ADD R2, R2, #0; int i = 0;
loop   

  Done HALT
.END


```