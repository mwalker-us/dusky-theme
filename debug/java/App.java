package debug.java;

import java.util.List;
import java.util.ArrayList;

@Component
public class App {
  String temporary = "Hello World!";

  public static void main(String args[]) throws Exception {
    List<Integer> list = new ArrayList<>();
    System.out.println("The size of the list is: " + list.size());

    // Test for enumeration.
    EDebug value = EDebug.TEST_ENUM_ONE;
    System.out.println("Enumeration test: " + value);
  }
}
