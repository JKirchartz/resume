/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		"pkg": grunt.file.readJSON("package.json"),
		// Task configuration.
		"copy" : {
			main: {
				files: [{
					src: "src/headshot.jpg",
					dest: "dist/headshot.jpg"
				}]
			}
		},
		"sass": {
			dist : {
				options : {
					style: "expanded"
				},
				files: {
					"dist/style.css": "src/style.scss"
				}
			}
		},
		"compile-handlebars": {
			allStatic: {
				files: [{
					expand: true,
					cwd: "src",
					src: "index.hbs",
					dest: "dist",
					ext: ".html",
				}],
				globals: ["src/resume.json"]
			}
		},
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-compile-handlebars");

	// Default task.
	grunt.registerTask("default", ["copy", "compile-handlebars", "sass"]);

};
