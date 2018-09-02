import indexTemp from '../views/jade/index/test.html';
import loginTemp from '../views/jade/login/login.pug';

function router ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<h1>My Contacts</h1>',
            controller: function ($scope) {
                $scope.title = 'My Contacts';
            }

        })
        .state('index', {
            url: '/index',
            template: indexTemp,
            controller: function ($scope) {
                $scope.title = 'My Contacts';
            }
        });

    $urlRouterProvider.otherwise('/');
}

router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default router;
