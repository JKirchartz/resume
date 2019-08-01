/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    "pkg": grunt.file.readJSON("package.json"),
    // Task configuration.
    "sass": {
      docs : {
        options : {
          style: "expanded"
        },
        files: {
          "docs/style.css": "src/style.scss"
        }
      }
    },
    "compile-handlebars": {
      allStatic: {
        files: [{
          expand: true,
          cwd: "src",
          src: "index.hbs",
          dest: "docs",
          ext: ".html",
        },{
          expand: true,
          cwd: "src",
          src: "plain.hbs",
          dest: "docs",
          ext: ".html",
        }],
        helpers: ["src/helpers.js"],
        globals: ["src/resume.json"]
      }
    },
    watch: {
      files: "src/**",
      tasks: ["sass", "compile-handlebars"]
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [ "src/**" ]
        },
        options: {
          watchTask: true,
          open: false,
          server: "./docs/"                 }
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-compile-handlebars");
  grunt.loadNpmTasks("grunt-browser-sync");

  // Default task.
  grunt.registerTask("dev", ["browserSync", "watch"]);
  grunt.registerTask("default", ["compile-handlebars", "sass"]);

};
