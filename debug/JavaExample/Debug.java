package debug.JavaExample;

import java.util.List;
import java.util.ArrayList;

public class Debug {
  String temporary = "Hello World!";

  public static void main(String args[]) throws Exception {
    List<Integer> list = new ArrayList<>();
    System.out.println("The size of the list is: " + list.size());

    // Test for enumeration.
    EDebug value = EDebug.TEST_ENUM_ONE;
    System.out.println("Enumeration test: " + value);
  }
}
