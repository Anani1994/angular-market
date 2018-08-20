import('./global-tips.less');

module.exports = function (App) {
    App.directive('globalTips', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: require('./global-tips.pug'),
            link: function ($scope, $element, $attr) {
                $scope.tipsTitle = $attr.tipstitle;
                $scope.tipsContent = $attr.tipscontent;
                $scope.tipsHref = $attr.tipshref;
                $scope.tipsFooter = $attr.tipsfooter;
                $scope.startSlide = function () {
                    if ('slide-to-right' === $scope.slideClass) {
                        $scope.slideClass = '';
                    } else {
                        $scope.slideClass = 'slide-to-right';
                    }
                }
            }
        }
    });
};