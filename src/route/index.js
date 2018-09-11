// 引入 pug
import indexTemp from '../views/jade/index.pug';
import loginTemp from '../views/jade/login.pug';
// 引入 controller
import loginCtrl from '../views/js/controllers/login.js';

function router ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/index');
    $stateProvider
        .state('app', {
            url: '/index',
            template: indexTemp,
            controller: function ($scope) {
                $scope.title = 'My Contacts';
            }
        })
        .state('login', {
            url: '/login',
            template: loginTemp,
            controller: ['$scope', '$state', '$timeout', loginCtrl]
        })
        .state('page-404', {
            url: '/page-404',
            template: 'loginTemp',
            controller: function ($scope) {
                $scope.title = 'My Contacts';
            }
        });

    $urlRouterProvider.otherwise('/page-404');
}

export default router;
