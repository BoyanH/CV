exports.index = function(req, res){
    res.render('wearables/index', {
      title: 'Most Fashionable Wearables',
      wearables: [{name: 'LOGITECH G430 HEADSET 981-000537', picture: 'http://www.technomarket.bg/files/ARTIKLI/09134116/image_thumb_250.jpg', price: '160'},
      {name: 'GOLLA G1506 DUCK BLACK', picture: 'http://www.technomarket.bg/files/ARTIKLI/09129834/image_thumb_250.jpg', price: '36'},
      {name: 'TISSOT "VELOCI-T" T024.417.27.051.00', picture: 'http://watchesbg.com/image/cache/data/TISSOT/T024.417.27.051.00-650x650.jpg', price: '840'}]
    });
};