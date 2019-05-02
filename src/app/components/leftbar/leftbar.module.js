'use strict';

import LeftbarComponent from './leftbar.component';
import './leftbar.scss';

const leftbarModule = angular.module('leftbar-module', []);

leftbarModule
    .component('leftBar', new LeftbarComponent());

export default leftbarModule;
