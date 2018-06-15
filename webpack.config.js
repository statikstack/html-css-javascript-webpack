module.exports = (env) => {
  const config = require(`./webpack/webpack.${env.env}`);

  return config;
};
