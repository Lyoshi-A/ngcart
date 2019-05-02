'use strict';

import leftbarTpl from './leftbar.html';
import LeftbarController from './leftbar.controller';

export default class LeftbarComponent {
    constructor() {
        this.templateUrl = leftbarTpl;
        this.controller = LeftbarController;
    }
}