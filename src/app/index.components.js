'use strict';

import footerModule from './components/footer/footer.module';
import leftbarModule from './components/leftbar/leftbar.module';

export default angular.module('index.components', [
	footerModule.name,
	leftbarModule.name,
]);
