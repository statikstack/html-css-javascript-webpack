module.exports = (env) => {
  const config = require(`./webpack.${env.env}`);

  return config;
};
