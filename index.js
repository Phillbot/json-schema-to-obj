const schema = require("./shema.json");
const Utils = require("./utils.js");
const Common = require("./common.js");

const convrter = () => {
  const object = {};

  Object.keys(schema.properties).forEach((key) => {
    const type = Common.types.find(
      (type) => type === schema.properties[key].type
    );

    switch (type) {
      case "string":
        {
          object[key] = Utils.makeRandomString();
        }
        break;
      case "number":
        {
          object[key] = Utils.makeRandomNumber(99999, 0);
        }
        break;
      case "integer":
        {
          object[key] = Utils.makeRandomInt(99999, -99999);
        }
        break;
      case "array":
        {
          const arrayElements = Utils.makeArray(
            schema.properties[key].minItems,
            schema.properties[key].items.type
          );

          object[key] = [...arrayElements];
        }
        break;
      case "object": {
        const objElements = Utils.makeObject(schema.properties[key]);
        object[key] = { ...objElements };
        break;
      }

      default:
        break;
    }
  });

  console.log(object);
};

convrter();
