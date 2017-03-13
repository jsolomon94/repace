/**
 * Created by jonathan.solomon on 12/5/2016.
 */
var rayApp = angular.module('rayApp', ['ui.router']);

rayApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    //let's make some routes for the pages that don't technically exist yet!
        .state('home',{

            url: '/home',
            templateUrl: '../views/main.html',
            controller: 'controllers/mainController.js'

        });

        /*.state('outfit',{

            url: '/outfit',
            templateUrl: '../views/outfit.html',
            controller: 'controllers/fitController.js'

        })

        .state('cart',{

            url: '/cart',
            templateUrl: '../views/cart.html',
            controller: 'controllers/contactController.js'

        });*/

    $locationProvider.html5Mode(true);

});