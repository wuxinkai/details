require.config({
    baseUrl: "./",
    paths: {       
        'angular': 'bower_components/angular/angular/angular',
        'angular-route': 'bower_components/angular/angular-route/angular-route',
        'domReady': 'bower_components/domReady/domReady',
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'jquery': {
            exports: 'jquery'
        },
        'bootstrap': {
            deps: ['jquery'],
        }
    },
    deps: ['./js/angularstart']
});
