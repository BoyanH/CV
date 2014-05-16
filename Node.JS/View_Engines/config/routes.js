module.exports = function(app){

	//home route
	var home = require('../app/controllers/home'),
		phones = require('../app/controllers/phones'),
		tablets = require('../app/controllers/tablets'),
		wearables = require('../app/controllers/wearables');

	app.locals.navitems = [
	      		{link: '/phones', content: 'Phones'},
	      		{link: '/tablets', content: 'Tablets'},
	      		{link: '/wearables', content: 'Wearables'}
			];

	app.get('/', home.index);
	app.get('/phones', phones.index);
	app.get('/tablets', tablets.index);
	app.get('/wearables', wearables.index);

};
