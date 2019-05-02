'use strict';

import './cart.scss';

import CartComponent from './cart.component';

const cartModule = angular.module('cart-module', [
    'ui.router'
])
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('cart', {
            url: '/cart',
            component: 'cart'
        });
})
    .component('cart', new CartComponent());

export default cartModule;