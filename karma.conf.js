module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'], // Asegúrate de que esto esté aquí
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      '@angular-devkit/build-angular', // Esto también debe estar aquí
    ],
    client: {
      clearContext: false // Mantiene visible el contexto de Jasmine
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'], // Cambia a 'Chrome' si es necesario
    singleRun: false,
    restartOnFileChange: true
  });
};
