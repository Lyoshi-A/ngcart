'use strict';

import products from './products';

function runBlock($log, $window) {
	'ngInject';
	$window.localStorage.setItem('products', angular.toJson(products));
}

export default runBlock;
