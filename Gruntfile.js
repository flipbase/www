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
          require: ['susy', 'breakpoint'],
          style: 'expanded',
          compass: true
        },
        files: [{
          expand: true, // Recursive
          cwd: "<%= yeoman.assets %>/sass", // The startup directory
          src: ["style.scss"], // Source files
          dest: "<%= yeoman.assets %>/css", // Destination
          ext: ".css" // File extension 
        }]
      }
    },

    modernizr: {
      dist: {
        "crawl": false,
        "customTests": [],
        "dest": "contents/assets/js/modernizr.custom.min.js",
        "tests": [
          "cssall",
          // "video",
          "cssanimations",
          "bgpositionxy",
          "backgroundsize",
          "bgsizecover",
          "borderradius",
          "boxshadow",
          "boxsizing",
          "fontface",
          // "cssgradients",
          "lastchild",
          "mediaqueries",
          "nthchild",
          "opacity",
          "overflowscrolling",
          "csspositionsticky",
          "rgba",
          "siblinggeneral",
          // "target",
          // "textshadow",
          "csstransforms",
          "csstransitions",
          // "localstorage",
          "inlinesvg"
        ],
        "options": [
          "setClasses"
        ],
        "uglify": true
      }
    }

  });
};