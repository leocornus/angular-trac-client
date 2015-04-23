var HtmlReporter = require('protractor-html-screenshot-reporter');
var path = require('path');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  chromeOnly: false,

  baseUrl: 'http://localhost:8800/app/',

  framework: 'jasmine',

  onPrepare: function() {
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'screenshots',
      takeScreenShotsOnlyForFailedSpecs: false,
      pathBuilder: function pathBuilder(spec, descriptions, 
                                        results, capabilities) {
        var monthMap = {
          "1": "Jan",
          "2": "Feb",
          "3": "Mar",
          "4": "Apr",
          "5": "May",
          "6": "Jun",
          "7": "Jul",
          "8": "Aug",
          "9": "Sep",
          "10": "Oct",
          "11": "Nov",
          "12": "Dec"
        };

        var currentDate = new Date(),
            currentHoursIn24Hour = currentDate.getHours(),
            currentTimeInHours = currentHoursIn24Hour>12 ? currentHoursIn24Hour - 12 : currentHoursIn24Hour,
            totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()+1]+ '-'+(currentDate.getYear()+1900) + 
                                '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

        return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
      }
    }));
  },

  jasmineNodeOpts: {
    isVerbose: true,
    defaultTimeoutInterval: 30000
  }
};
