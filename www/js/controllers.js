/////////////////////////////////////////////////////////////////////
var controllers = angular.module("app.controllers", []);

/////////////////////////////////////////////////////////////////////
controllers.controller("AppCtrl", function($scope, $ionicModal, $timeout) {

    $scope.loginData = {};

    $ionicModal.fromTemplateUrl("templates/login.html", {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.doLogin = function() {
        console.log("Doing login", $scope.loginData);

        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
});

/////////////////////////////////////////////////////////////////////
controllers.controller("reposController", function($scope, githubService, $ionicLoading) {
    
    $ionicLoading.show({template: "Loading..."});
    githubService.all("lucasmouilleron").then(function(repos) {
        $scope.repos = repos;
        $ionicLoading.hide();
    });

    $scope.doRefresh = function() {
        githubService.all("lucasmouilleron").then(function(repos) {
            $scope.repos = repos;
            $scope.$broadcast("scroll.refreshComplete");
        });
    };
});

/////////////////////////////////////////////////////////////////////
controllers.controller("redditsController", function($scope, redditService, $ionicLoading) {
    var next = 0;
    var loading = false;
    $scope.reddits = [];
    $scope.loadMore = function() {
        if(!loading) {
            loading = true;
            return redditService.from(next).then(function(redditsResponse) {
                next = redditsResponse.next;
                console.log(redditsResponse.items);
                for (i in redditsResponse.items) {
                    $scope.reddits.push(redditsResponse.items[i]);
                }
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }).finally(function() {
                loading = false;
            });
        }
    };
    $scope.loadMore();
});
