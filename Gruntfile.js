/*
 * Requirements: gem install sass
 *
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        dist: {
          files: [{
            src: '*/*.scss',
            dest: 'app/app.css',
          }]
        }
    },

    watch: {
        options: {
            livereload: 35730,
        },
        css: {
            files: ['app/**/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        },
        html : {
            files: ['app/**/*.html']
        }, 
        scripts: {
            files: ['app/**/*.js']
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
