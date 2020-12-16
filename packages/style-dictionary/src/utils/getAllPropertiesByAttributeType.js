// eslint-disable-next-line id-length
const _ = require("lodash");

const getAllPropertiesByAttributeType = (allProperties) => (
  _.chain(allProperties).groupBy("attributes.type").
    map((value, key) => ({ key, value })).
    value()
);

module.exports = getAllPropertiesByAttributeType;
