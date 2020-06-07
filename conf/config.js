exports.config = {
  
    specs: [
        './src/features/*.feature',
    ],
    
 
    suites: {
        login: ['./src/features/login.feature'],
        binadding: ['./src/features/binadding.feature']
    },
    
   
    services: ['selenium-standalone'],
    maxInstances: 1,

    
    capabilities: [{
        browserName: 'chrome'
    }],

   
    sync: true,
   
    coloredLogs: true,
   
    baseUrl: 'https://rozetka.com.ua/',
    
    waitforTimeout: 20000,
 
    connectionRetryTimeout: 90000,
   
    connectionRetryCount: 3,
   
    framework: 'cucumber',
 
    reporters: ['spec'],
    reporterOptions: {
        outputDir: './output/reports'
    },
   
    cucumberOpts: {
        compiler: ["ts:ts-node/register"],
        require: [
            './src/steps/'
        ], 
        backtrace: true, 
        
        dryRun: false, 
        failFast: false, 
        format: ['pretty'], 
                            
        colors: true, 
        snippets: true, 
                        
        source: true, 
        profile: [], 
        strict: true, 
      
        timeout: 40000,     
        ignoreUndefinedDefinitions: false, 
    },

   
    before: function before() {
       

        browser.timeouts('implicit', 10000);

       
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    
};
