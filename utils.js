class Utils {
  constructor() {}

  static makeRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static makeRandomNumber(max, min) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
  }

  static makeRandomString() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  static makeArray(length, type) {
    const array = Array.from(Array(length).keys()).map(() => {
      switch (type) {
        case "string": {
          return Utils.makeRandomString();
        }

        case "number": {
          return Utils.makeRandomNumber(99999, 0);
        }
        case "integer": {
          return Utils.makeRandomInt(99999, -99999);
        }
        case "array": {
          return this.makeArray(); //need tyest keys
        }

        case "object": {
          return this.makeObject(); //need tyest keys
        }
      }
    });
    return array;
  }

  static makeObject({ required, properties }) {
    let Obj = {};

    required.forEach((item) => {
      const type = properties[item].type;

      switch (type) {
        case "string":
          {
            Obj[item] = Utils.makeRandomString();
          }
          break;
        case "number":
          {
            Obj[item] = Utils.makeRandomNumber(99999, 0);
          }
          break;
        case "integer":
          {
            Obj[item] = Utils.makeRandomInt(99999, -99999);
          }
          break;
        case "array":
          {
            Obj[item] = this.makeArray(); //need tyest keys
          }
          break;
        case "object":
          {
            Obj[item] = this.makeObject(); //need tyest keys
          }
          break;
        default:
          break;
      }
    });

    return Obj;
  }
}

module.exports = Utils;
