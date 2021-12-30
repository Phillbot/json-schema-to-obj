const Utils = require("./utils.js");

class Common {
  constructor() {}

  static types = ["integer", "number", "string", "array", "object"];

  static props = [
    "description",
    "exclusiveMinimum",
    "minItems",
    "uniqueItems",
    "properties",
    "required",
  ];
}

module.exports = Common;
