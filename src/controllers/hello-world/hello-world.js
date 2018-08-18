import('./hello-world.less');
module.exports = function (App) {
    App.directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<div>Hello world</div>',
            replace: true,
            controller: function ($scope, $element) {
                $element.bind('click', function () {
                    console.log('测试成功');
                })
            }
        }
    });
}