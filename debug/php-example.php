<?php
class Theme {
  public $name;
  public $identifier;
  public $version;
  public $number = 1;
  public $string = 'String example';

  protected function __construct($name, $identifier, $version) {
    $this->name = $name;
    $this->identifier = $identifier;
    $this->version = $version;
  }

  function toString() {
    return "name: $name, identifier: $identifier, version: $version";
  }
}

class DuskyTheme extends Theme {
  public function __construct($version) {
    $this->name = "Dusky Theme";
    $this->identifier = "mwalker-us.vscode-theme-dusky";
    $this->version = $version;
  }
}

function verifyThemeVersionIsNumeric() {
  $theme = new DuskyTheme("v0.1.0");
  echo preg_match("/\d{1,2}.\d{1,2}.\d{1,2}$/", $theme);
}

verifyThemeVersionIsNumeric();
?>
