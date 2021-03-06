module.exports = function (config) {
  return config.set({
    basePath: '.',

    browsers: [ 'Chrome', 'Firefox' ],

    frameworks: [ 'mocha' ],

    files: [
      './test/**/*.test.js*',
      './test/index.html'
    ],

    preprocessors: {
      './test/**/*.test.js*': [ 'webpack' ],
      '**/*.html': [ 'html2js' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      'karma-webpack',
      'karma-html2js-preprocessor',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha-reporter',
      'karma-mocha'
    ],

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      noInfo: true
    }

  })

}
