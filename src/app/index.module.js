'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import cartModule from './pages/cart/cart.module';


const App = angular.module(
  "betting", [
    // plugins
    uiRouter,
    "ngAnimate", 
	"ngCookies", 
	"ngTouch", 
	"ngSanitize", 
	"ngMessages", 
	"ngAria", 
	"ngResource", 
	"oc.lazyLoad",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,
    cartModule.name

  ]
);

App
  .config(config)
  .run(run);



export default App;
