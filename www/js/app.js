// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
        .state('search', {
               url: '/search',
               templateUrl: 'templates/search.html'
               })
        .state('settings', {
               url: '/settings',
               templateUrl: 'templates/settings.html'
               })
        .state('tabs', {
               url: "/tab",
               abstract: true,
               templateUrl: "templates/tabs.html"
               })
        .state('tabs.home', {
               url: "/home",
               views: {
               'home-tab': {
               templateUrl: "templates/home.html",
               controller: 'HomeTabCtrl'
               }
               }
               })
        .state('tabs.facts', {
               url: "/facts",
               views: {
               'home-tab': {
               templateUrl: "ftemplates/acts.html"
               }
               }
               })
        .state('tabs.facts2', {
               url: "/facts2",
               views: {
               'home-tab': {
               templateUrl: "templates/facts2.html"
               }
               }
               })
        .state('tabs.about', {
               url: "/about",
               views: {
               'about-tab': {
               templateUrl: "templates/about.html"
               }
               }
               })
        .state('tabs.navstack', {
               url: "/navstack",
               views: {
               'about-tab': {
               templateUrl: "templates/nav-stack.html"
               }
               }
               })
        .state('tabs.contact', {
               url: "/contact",
               views: {
               'contact-tab': {
               templateUrl: "templates/contact.html"
               }
               }
               });
        
        
        $urlRouterProvider.otherwise("/tab/home");
        
        })
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
            $scope.showMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
            };
            $scope.showRightMenu = function () {
            $ionicSideMenuDelegate.toggleRight();
            };
            })
.controller('HomeTabCtrl', function($scope) {
            });