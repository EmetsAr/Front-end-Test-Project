/**
 * Sass - CSS preprocessor (Ruby version)
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('sass', {
    dist: {
      options: {
        style: 'expanded',
        loadPath: [
          '<%= xh.src %>/bower_components/'
        ],
        sourcemap: 'none',
        unixNewlines: true
      },
      files: {
        '<%= xh.dist %>/css/main.css': '<%= xh.src %>/scss/main.scss'
      }
    }
  });
};
