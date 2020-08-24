// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  var processEnv = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'API_KEY':JSON.stringify(process.env.API_KEY),
      'AUTH_DOMAIN':JSON.stringify(process.env.AUTH_DOMAIN),
      'DATABASE_URL':JSON.stringify(process.env.DATABASE_URL),
      'PROJECT_ID':JSON.stringify(process.env.PROJECT_ID),
      'STORAGE_BUCKET':JSON.stringify(process.env.STORAGE_BUCKET),
      'MESSAGING_SENDER_ID':JSON.stringify(process.env.MESSAGING_SENDER_ID),
      'SECRET_KEY':JSON.stringify(process.env.SECRET_KEY),
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': JSON.stringify(publicUrl)
    });
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
