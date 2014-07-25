'use strict';

/**
 * @ngdoc service
 * @name stoogeBloggerzApp.author
 * @description
 * # author
 * Service in the stoogeBloggerzApp.
 */
angular.module('stoogeBloggerzApp')
  .service('author', function author() {

  	return {
  		getAuthor: function(){
  			return [
  			{ author: 'Moe'},
 			  { author: 'Curly'},
		  	{ author: 'Larry'},
        { author: 'All'},
			];
  		}
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
