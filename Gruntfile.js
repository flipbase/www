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
      },
      js: {
        files: ['<%= yeoman.assets %>/js/{,*/}*.js'],
        tasks:  ['uglify']        
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

    uglify: {  
      options: {  
        compress: true  
      },
      deps: {
        src: [  
          '<%= yeoman.assets %>/components/jquery/dist/jquery.min.js',
          '<%= yeoman.assets %>/components/foundation-sites/dist/js/foundation.js',
          '<%= yeoman.assets %>/components/jquery-placeholder/jquery.placeholder.min.js',
          '<%= yeoman.assets %>/components/covervid/covervid.min.js',
          '<%= yeoman.assets %>/components/bxslider-4/dist/jquery.bxslider.min.js',
          '<%= yeoman.assets %>/components/rrssb/js/rrssb.js',
          '<%= yeoman.assets %>/components/motion-ui/dist/motion-ui.js'
        ],
        dest: '<%= yeoman.dist %>/js/dependencies.js'
      }, 
      page: {  
        src: [  
          '<%= yeoman.assets %>/js/form.js',
          '<%= yeoman.assets %>/js/page.js'
        ],  
        dest: '<%= yeoman.dist %>/js/page.js'  
      }
    },

    cssmin: {
      target: {
        files: [{
          src: [
            '<%= yeoman.assets %>/components/normalize.css/normalize.css',
            '<%= yeoman.assets %>/components/foundation-sites/dist/css/foundation.min.css',
            '<%= yeoman.assets %>/components/Ionicons/css/ionicons.css',
            '<%= yeoman.assets %>/components/bxslider-4/dist/jquery.bxslider.min.css',
            '<%= yeoman.assets %>/components/motion-ui/dist/motion-ui.css'
          ],
          dest: '<%= yeoman.dist %>/css/dependencies.min.css'
        }]
      }
    },

    copy: {
      htaccess: {
        expand: true,
        dot: true,
        cwd: './',
        dest: 'www',
        src: [
          '.htaccess'
        ]
      },
      html: {
        expand: true,
        dot: true,
        cwd: 'legacy_html',
        dest: 'www',
        src: [
          '**/*'
        ]
      },
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
      ionicons: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.assets %>/fonts',
        src: [  
          '*'
        ],  
        dest: '<%= yeoman.dist %>/fonts'  
      },
      assets: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.assets %>/components',
          dest: '<%= yeoman.dist %>/components',
          src: [
            'bxslider-4/dist/images/bx_loader.*'
          ]
        }]
      },
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
          "flexbox",
          "lastchild",
          "mediaqueries",
          "nthchild",
          "opacity",
          "overflowscrolling",
          "csspositionsticky",
          "rgba",
          "videoautoplay",
          "videoloop",
          "videopreload",
          "siblinggeneral",
          "csstransforms",
          "csstransitions",
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
    'cssmin',
    'uglify',
    'copy:img',
    'copy:assets',
  ]);

};