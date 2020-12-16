const shadowCss = {
  matcher: ({ attributes }) => attributes.subitem === "boxShadow",
  name: "shadow/css",
  transformer: ({ value }) => {
    const { blurRadius, color, inset, offsetX, offsetY, spreadRadius } = value;

    return `${inset && "inset "}${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${color}`;
  },
  type: "value",
};

module.exports = shadowCss;
