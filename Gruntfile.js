module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var yeomanConfig = {
    assets: 'contents/assets'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,

    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      sass: {
        files: ['<%= yeoman.assets %>/sass/{,*/}*.scss'],
        tasks:  ['sass']
      }
    },

    sass: {
      dist: {
        options: {
          require: 'susy',
          style: 'expanded'
        },
        files: [{
          expand: true, // Recursive
          cwd: "<%= yeoman.assets %>/sass", // The startup directory
          src: ["style.scss"], // Source files
          dest: "<%= yeoman.assets %>/css", // Destination
          ext: ".css" // File extension 
        }]
      }
    }

  });
};
