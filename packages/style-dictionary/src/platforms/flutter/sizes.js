const sizes = ({ destination, packageName }) => ({
  className: "Sizes",
  destination,
  filter: {
    attributes: {
      category: "size",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
});

module.exports = sizes;
