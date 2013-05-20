module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    ,compass: {
      dev: {
        options: {
          basePath: '_src'
          ,sassDir: 'sass'
          ,cssDir: 'css'
          ,imagesDir: 'img'
          ,javascriptsDir: 'js'
          ,relativeAssets: true
        }
      }
    }

    ,concat: {
      app: {
        src: ['_src/js/plugins.js', '_src/js/main.js']
        ,dest: '_dist/js/edge-demo.js'
      }
    }
    
    ,copy: {
      main: {
        files: [
          {expand: true, cwd: '_src/css/', src: ['**'], dest: '_dist/css/'} // makes all src relative to cwd
          ,{expand: true, cwd: '_src/img/', src: ['**'], dest: '_dist/img/'} // makes all src relative to cwd
          ,{expand: true, cwd: '_src/js/vendor/', src: ['**'], dest: '_dist/js/vendor/'} // makes all src relative to cwd
        ]
      }
    }
    
    ,groundskeeper: {
      compile: {
        files: {
          '_dist/js/edge-demo.js' : '_dist/js/edge-demo.js'
        }
      }
    }
    
    ,jshint: {
      options: {
        laxbreak:     true
        ,laxcomma:    true
        ,undef:       true
        ,predef: ['console', 'jQuery']
        // ,predef : ["Ext", "tv", "atelist", "al", "log", "google", "log4javascript", "exports", "require", "module", "process", "console", "global", "__dirname", "toString", "$"]
        ,browser:     true
        ,loopfunc:    true
        ,smarttabs:   true
      }
      ,uses_defaults : [ '_src/js/main.js' ]
    }
    
    ,preprocess : {
      options: {
        context : {
          DEBUG: true
          ,env: 'dev'
        }
      },
      multifile : {
        files : {
          '_dist/index.html' : '_src/index.html'
          ,'_dist/404.html'   : '_src/404.html'
        }
      }

      // js : {
      //   src : 'test/test.js',
      //   dest : 'test/test.processed.js'
      // }
    }
    
    ,uglify: {
      options: {
        banner: '/* ! <%= pkg.name %> - v<%= pkg.version %> Last edited: <%= grunt.template.today("mm-dd-yyyy") %>  \n' +
          'Last edited by: <%= pkg.author %> <%= pkg.authorEmail %>\n' +
          'DO NOT EDIT THIS FILE! Refer to the README.md file for instructions on updating this file. */ \n'
      }
      ,app: {
        files: {
          '_dist/js/edge-demo.min.js' : ['_dist/js/edge-demo.js']
        }
      }
    }
    
    ,watch: {
      scripts: {
        files: ['_src/*.html', '_src/includes/*.html', '_src/js/*.js', '_src/sass/*.scss', '_src/img/*.png', '_src/img/*.jpg']
        ,tasks: ['default']
        ,options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-groundskeeper');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // default task(s)
  grunt.registerTask( 'default', ['jshint', 'compass', 'preprocess', 'concat', 'copy'] );

  // default task(s)
  grunt.registerTask( 'dev', ['jshint', 'compass', 'preprocess', 'copy'] );

  // on production, concat and minify
  grunt.registerTask('prod', ['concat', 'preprocess:prod', 'copy', 'groundskeeper', 'uglify']);
}