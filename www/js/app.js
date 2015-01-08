/////////////////////////////////////////////////////////////////////
var app = angular.module("app", ["ionic", "app.controllers", "app.services", "angular-growl"]);

/////////////////////////////////////////////////////////////////////
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

/////////////////////////////////////////////////////////////////////
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl"
    })

    .state("app.browse", {
        url: "/browse",
        views: {
            "menuContent": {
                templateUrl: "templates/browse.html"
            }
        }
    })

    .state("app.reddits", {
        url: "/reddits",
        views: {
            "menuContent": {
                templateUrl: "templates/reddits.html",
                controller: "redditsController"
            }
        }
    })

    .state("app.repos", {
        url: "/repos",
        views: {
            "menuContent": {
                templateUrl: "templates/repos.html",
                controller: "reposController"
            }
        }
    })

    .state("app.repo", {
        url: "/repos/:repoId",
        views: {
            "menuContent": {
                templateUrl: "templates/repo.html",
                controller: "reposController"
            }
        }
    });

    $urlRouterProvider.otherwise("/app/repos");
});

/////////////////////////////////////////////////////////////////////
app.config(["growlProvider", function(growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition("bottom-right");
    growlProvider.onlyUniqueMessages(false);
}]);