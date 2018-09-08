function loginCtrl ($scope, $state) {
    $scope.testText = 'is login?';
    $scope.toIndex = () => {
        localStorage.isLogin = true;
        $state.go('app');
    }
}

export default loginCtrl;
