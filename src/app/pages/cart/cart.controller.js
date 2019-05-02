'use strict';

class CartController {
  constructor($log, $window) {
    'ngInject';
    this.$log = $log;
    this.window = $window;
    this.cart = JSON.parse($window.localStorage.getItem('cart'))
    this.prepareInfo();
  }

  prepareInfo() {
    this.products = (this.cart&&this.cart.products)?this.cart.products:[];
    this.cart.items = this.products.length;
    this.cart.total = this.products.reduce((acc, prod) => acc+(prod.price*prod.quantity), 0);
    this.header = {
      _id:'#',
      title:"Name",
      short_description:"Description",
      quantity:"Quantity",
      price:"Price",
      amount:"Amount",
      action: true
    };

    this.footer = {
      _id:'',
      title:"Total:",
      short_description:"",
      quantity:"",
      price:"",
      amount: this.cart.total,
      action: true
    };
    this.info = [this.header, ...this.products.map(i=>{
      i.amount = i.price*i.quantity;
      return i;
    }), this.footer];
  }

  removeFromCart(product) {
    const inx = this.cart.products.findIndex(p => p._id === product._id);
    this.cart.products = [...this.cart.products.slice(0,inx), ...this.cart.products.slice(inx+1)];
    this.window.localStorage.setItem('cart', angular.toJson(this.cart));
    this.prepareInfo();
  }
}

export default CartController;
