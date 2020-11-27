const sizes = ({ packageName }) => ({
  className: "Sizes",
  destination: "lib/sizes.dart",
  filter: {
    attributes: {
      category: "size",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
});

module.exports = sizes;
