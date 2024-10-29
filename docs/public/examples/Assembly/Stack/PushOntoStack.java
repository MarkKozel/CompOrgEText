import java.util.Stack;

public class StackExample {

  public static void main(String[] args) {
    // Create an empty stack
    Stack<String> names = new Stack<>();

    // Push elements onto the stack
    names.push("Alice");
    names.push("Bob");
    names.push("Charlie");
  }

  System.out.println("Elements in the stack (top to bottom):");
    while (!names.isEmpty()) {
      System.out.println(names.pop());
    }
}