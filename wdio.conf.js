exports.config = {
    specs: [
        './src/**/*.spec.js'
    ],
    exclude: [],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './test/',
    baseUrl: 'http://localhost:8181',
    waitforTimeout: 10000,
    framework: 'jasmine',
    reporter: 'spec',
    reporterOptions: {
        outputDir: './'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 9999999
    },
    onPrepare: function() {},
    onComplete: function() {},
    plugins: {
        webdrivercss: {
            screenshotRoot: 'tests/screenshots',
            failedComparisonsRoot: 'tests/comparisons',
            misMatchTolerance: 0.05,
            screenWidth: [320]
        }
    }
};