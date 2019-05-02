'use strict';

//import cartTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/cart/cart.html';

function routeConfig($urlRouterProvider) { //, $stateProvider, resolverProvider) {//}, $locationProvider) {
  'ngInject';

    // $stateProvider
    //     .state('cart', {
    //         url: '/cart',
    //         templateUrl: cartTemplate,
    //         controller: 'cartController',
    //         resolve: {
    //             cartPreloading: resolverProvider.cartPagePrealoading
    //         }
    //     });

  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  // $locationProvider.hashPrefix('');
}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

