module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      options: {
      // Task-specific options go here.
        sizes: [{
          name: "thumb",
          width: 650,
          quality: 75
        }]
      },
      your_target: {
        // Target-specific file lists and/or options go here.
          expand: true,
          src: ['_portfolio/officemax/gallery/*.{jpg,gif,png}'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

};
