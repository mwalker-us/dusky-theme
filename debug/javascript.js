module.exports = exports = function () {
  console.log("Hello World!");
};

/**
 * Defines the basic properties to identify a Visual Studio Code
 * theme along with the actions available for those properties.
 */
class Theme {
  constructor(name, identifier, version) {
    this.name = name;
    this.identifier = identifier;
    this.version = version;
  }

  /**
   * Creates a string representation of theme by combing the name,
   * version, and identifier for the theme.
   * @returns the string representation of the theme.
   */
  toString() {
    return 'name: ' + this.name + ', identifier: ' + this.identifier + ', version: ' + this.version;
  }
}

/**
 * Defines the basic elements that identify the Dusky Theme for
 * Visual Studio Code along with the actions that are availble
 * on those properties.
 */
class DuskyTheme extends Theme {
  constructor(version) {
    super('Dusky Theme', 'mwalker-us.vscode-theme-dusky', version)
  }
}

/**
 * Determines whether the theme version number is a numeric value or
 * not and returns true if it is and false otherwise.
 * @returns true or false.
 */
function verifyThemeVersionIsNumeric() {
  let theme = new DuskyTheme('v0.1.0');
  return theme.toString().match(/\d{1,2}.\d{1,2}.\d{1,2}$/);
}

async function testAsynchronous() {
  // Test comment.
  return new Observable();
}
