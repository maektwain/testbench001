module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server:{
                options: {
                port: 9000,
                open: true,
                livereload: 35729,
                hostname: 'localhost'
            } , 

            development: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('app')
                        ];
                    }
                }
            }
        }
        }

            
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', []);
    grunt.registerTask('serve', [
    'connect:server'
]);
    grunt.loadNpmTasks('grunt-contrib-connect');
};
