module.exports = function (App) {
    // App.config(['$routeProvider', function ($routeProvider) {
    //     $routeProvider
    //         .when('/', {
    //             // 路径问题
    //             // templateUrl: absolute/path 建议改成 template: require('relative/path')
    //             template: require('../views/jade/login/login.pug')
    //         }).when('/index', {
    //             template: require('../views/jade/index/index.pug')
    //     }).otherwise({redirectTo: '/index'});
    // }]);
    App.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/',

            })
            .state('app.index', {
                url: '/index',
                templateUrl: '../views/jade/index/index.html'
    
            })
            .state('app.login', {
                url: '/login',
                templateUrl: '../views/jade/login/login.html'
    
            });
    }]);
}
