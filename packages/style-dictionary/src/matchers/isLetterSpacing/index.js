const isLetterSpacing = ({ attributes }) => {
  const { subitem } = attributes;


  return subitem === "letterSpacing";
};

module.exports = isLetterSpacing;
