'use strict';

/**
 * @ngdoc service
 * @name stoogeBloggerzApp.blog
 * @description
 * # blog
 * Service in the stoogeBloggerzApp.
 */
 //var stoogeBloggerzApp = anglular.module('stoogeBloggerzApp', [])  same as
angular.module('stoogeBloggerzApp')
  .service('blog', function blog() {
  	
  	return {
  		getPosts: function(){
  			return [
  			{ title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
 			 { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
 			 { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
		  	{ title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
			];
  		}
  	};
  });
