package debug.java;

import java.util.ArrayList;
import java.util.List;

public class DuskyTheme implements ITheme {

  public void arrowFunction(String param) {
    List<String> list = new ArrayList<>();
    list.add(param);
    list.stream().filter(predicate -> predicate.length() > 5);
  }
}
