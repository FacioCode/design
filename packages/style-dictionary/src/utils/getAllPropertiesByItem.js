// eslint-disable-next-line id-length
const _ = require("lodash");

const getAllPropertiesByItem = (allProperties) => (
  _.chain(allProperties).groupBy("attributes.item").
    map((value, key) => ({ key, value })).
    value()
);

module.exports = getAllPropertiesByItem;
