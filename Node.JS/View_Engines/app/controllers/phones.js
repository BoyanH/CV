exports.index = function(req, res){

    res.render('phones/index', {
      title: 'Smart Phones',
      phones: [{name: 'Samsung Galaxy S5', picture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeG5CNHIuAT2RYr9ERwhyUBBxL7St4hT-UfRULOn7VyQBgILFQBQ',
  				price: '1 250'},
  				{name: 'Nokia 3210', picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyAgcJ9t_rS5_U0xhHRQCj02WEEuWWS-5j9lnmjSaHJfIqGcTjCg', price: '10'},
  				{name: 'Prestigio PAP 4055 DUO', picture: 'http://news.smartphone.bg/wp-content/uploads/2013/06/index-prestigio-multiphone-4055-duo.jpg', price: '240'}
      ]   
    });
};