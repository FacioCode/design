const isComponentTextAlign = require("../../../matchers/isComponentTextAlign");

const componentFlutterAlignment = {
  matcher: isComponentTextAlign,
  name: "component/flutter/alignment",
  transformer: ({ value }) => `Alignment.${value}`,
  type: "value",
};

module.exports = componentFlutterAlignment;
