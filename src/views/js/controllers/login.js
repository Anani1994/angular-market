function loginCtrl ($scope, $state, $timeout) {
    $scope.toIndex = () => {
        $timeout(() => {
            localStorage.isLogin = true;
            console.log($scope.username, $scope.password);
            $state.go('app');
        })
    }
}

export default loginCtrl;
