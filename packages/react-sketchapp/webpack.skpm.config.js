module.exports = (config) => {
  // eslint-disable-next-line no-process-env
  if (process.env.LOCAL_DEV) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
      },
    };
  }
};
