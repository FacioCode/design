const web = {
  buildPath: "dist/",
  files: [
    {
      destination: "index.css",
      format: "css/variables",
    },
  ],
  // transformGroup: "web",
  transforms: ["attribute/cti", "name/cti/kebab", "color/css"],
};

module.exports = web;
