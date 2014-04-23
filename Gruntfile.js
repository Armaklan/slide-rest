module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['*.*'],
                options: {
                    livereload: true,
                },
            },
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                    keepalive: true,
                    livereload: true
                }
            },
            dist: {
                options: {
                    port: 8000,
                    base: './',
                    keepalive: true,
                    livereload: false
                }
            }
        },
        concurrent: {
            serve: ['watch', 'connect:server'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:serve']);
    grunt.registerTask('serve', ['connect:dist']);

}
