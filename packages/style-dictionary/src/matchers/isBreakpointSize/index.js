const isBreakpointSize = ({ attributes }) => {
  const { category, type } = attributes;

  return (category === "size" && type === "breakpoint");
};

module.exports = isBreakpointSize;
