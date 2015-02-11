angular.module('scheduleApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate','firebase']);

angular.module('scheduleApp').config(function($routeProvider) {

    $routeProvider.when('/main',{templateUrl: 'main/main.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/main'});

});

angular.module('scheduleApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
