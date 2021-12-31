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
          return this.makeRandomString();
        }

        case "number": {
          return this.makeRandomNumber(99999, 0);
        }
        case "integer": {
          return this.makeRandomInt(99999, -99999);
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
            Obj[item] = this.makeRandomString();
          }
          break;
        case "number":
          {
            Obj[item] = this.makeRandomNumber(99999, 0);
          }
          break;
        case "integer":
          {
            Obj[item] = this.makeRandomInt(99999, -99999);
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
