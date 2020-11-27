const isLineHeight = ({ attributes }) => {
  const { subitem } = attributes;


  return subitem === "lineHeight";
};

module.exports = isLineHeight;
