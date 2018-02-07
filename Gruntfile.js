module.exports = function(grunt) {

  // Load the wiredep plugin
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.initConfig({
    wiredep: {
      target: {
        src: 'public/index.html'
      }
    }
  });  
};