'use strict';

import CartController from './cart.controller';
import cartTpl from './cart.html';

export default class CartComponent {
    constructor() {
        this.controller = CartController;
        this.templateUrl = cartTpl;
    }
}