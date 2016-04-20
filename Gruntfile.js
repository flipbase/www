module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var yeomanConfig = {
    assets: 'public',
    dist: 'contents/assets'
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
          dest: "<%= yeoman.dist %>/css", // Destination
          ext: ".css" // File extension 
        }]
      }
    },

    clean: {
      dist: ['<%= yeoman.dist %>/*']
    },

    copy: {
      img: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.assets %>/images',
          dest: '<%= yeoman.dist %>/images',
          src: [
            '**/*'
          ]
        }]
      },
      js: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.assets %>/js',
          dest: '<%= yeoman.dist %>/js',
          src: [
            '**/*'
          ]
        }]
      },
      components: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.assets %>/components',
          dest: '<%= yeoman.dist %>/components',
          src: [
            'bxslider-4/dist/jquery.bxslider.min.*',
            'bxslider-4/dist/images/bx_loader.*',
            'covervid/covervid.min.js',
            'html5shiv/dist/html5shiv.min.js',
            'jquery/dist/jquery.min.*',
            'normalize.css/normalize.css',
            'rrssb/css/rrssb.css',
            'rrssb/js/rrssb.min.js',
            'rrssb/icons/*',
            'smoothstate/jquery.smoothState.min.js',
            'components-font-awesome/fonts/*',
            'components-font-awesome/css/font-awesome.min.css',
          ]
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

  grunt.registerTask('build', [
    'clean',
    'modernizr',
    'sass',
    'copy'
  ]);

};