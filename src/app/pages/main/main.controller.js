'use strict';

export default class MainController {
    constructor($log, $window) {
        'ngInject';
        this.$log = $log;
        this.window = $window;
        this.awesomeThings = ['Angular', 'Webpack', 'babel'];
        this.products = JSON.parse($window.localStorage.getItem('products'))
    }

    // $onInit() {
    // }

    addToCart(product) {
        this.cart = JSON.parse(this.window.localStorage.getItem('cart'));
        if (!this.cart) {
            this.cart = {
                products : [product],
            };
            this.cart.products[0].quantity = 1;
        } else {
           let inx = this.cart.products.findIndex(prod => {
               if (prod._id === product._id) {
                   prod.quantity++;
                   return true;
               }
               return false
           })
           if (inx === -1) {
               this.cart.products.push(product);
               this.cart.products[this.cart.products.length-1].quantity = 1;
           }
        }
        this.window.localStorage.setItem('cart', angular.toJson(this.cart));
    }
}
