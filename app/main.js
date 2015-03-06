require.config({
urlArgs: "bust=" + (new Date()).getTime(),
paths: {
'angular': '../vendor/angular/angular',
        'app': 'app',
        'controllers': 'controllers'
},
/**
* for libs that either do not support AMD out of the box, or
* require some fine tuning to dependency mgt'
*/
shim: {
        'app': {
            deps: ['angular', 'controllers']
        },
        'controllers': {
            deps: ['angular']
        },	
		'angular': {'exports': 'angular'}
}


});



require(['app','controllers'], function () {
    angular.bootstrap(document, ['app']);
});