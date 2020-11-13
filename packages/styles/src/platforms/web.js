const web = {
  buildPath: "dist/",
  files: [
    {
      destination: "index.css",
      format: "css/variables",
    }, {
      destination: "index.js",
      format: "javascript/module",
    },
  ],
  transformGroup: "web",
};

module.exports = web;
