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
            src: 'scss/*.scss',
            dest: 'css/main.css',
          }]
        }
    },

    watch: {
        options: {
            livereload: 35730,
        },
        css: {
            files: ['scss/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        },
        html : {
            files: ['*.html']
        } 
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
