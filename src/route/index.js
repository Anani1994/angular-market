module.exports = function (App) {
    App.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                // 路径问题
                // templateUrl: absolute/path 建议改成 template: require('relative/path')
                template: require('../views/login/login.pug')
            }).when('/index', {
                template: require('../views/index/index.pug')
        }).otherwise({redirectTo: '/index'});
    }]);
}