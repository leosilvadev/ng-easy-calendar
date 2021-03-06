// Karma configuration
// Generated on Sun Sep 06 2015 19:34:11 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/components/angular/angular.min.js',
      'src/components/angular-mocks/angular-mocks.js',
      'src/modules/easyCalendarModule.js',
      'src/modules/services/*.js',
      'src/modules/values/*.js',
      'src/modules/controllers/*.js',
      'src/modules/directives/*.js',
      'src/modules/filters/*.js',
		'src/modules/views/*.html',
      'test/unit/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

	 ngHtml2JsPreprocessor: {
		stripPrefix: 'src/',
		prependPrefix: '/',
		moduleName: 'easyCalendar.templates'
	 },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'coveralls'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    preprocessors: {
      'src/modules/services/*.js' : 'coverage',
      'src/modules/filters/*.js' : 'coverage',
      'src/modules/values/*.js' : 'coverage',
      'src/modules/controllers/*.js' : 'coverage',
      'src/modules/directives/*.js' : 'coverage',
		'src/modules/views/*.html' : 'ng-html2js'
    },

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      subdir: '.'
    },

	plugins: [
		'karma-phantomjs-launcher',
		'karma-jasmine',
		'karma-chrome-launcher',
		'karma-coverage',
		'karma-coveralls',
		'karma-ng-html2js-preprocessor'
	 ],


  });
}
