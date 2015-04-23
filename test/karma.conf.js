module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,
    singleRun: true,

    frameworks: ['jasmine'],

    browsers : ['Firefox'],

    plugins : [
            'karma-html-reporter',
            'karma-mocha-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    colors : true,

    reporters: ['html', 'mocha'],

    htmlReporter: {
      outputDir: 'karma_report',
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false // simply replaces spaces with _ for files/dirs

      // experimental
      //preserveDescribeNesting: false, // folded suites stay folded 
      //foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
