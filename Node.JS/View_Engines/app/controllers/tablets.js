exports.index = function(req, res){
    res.render('tablets/index', {
      title: 'Most Modern Tablets',
      tablets: [{name: 'PRESTIGIO PMP5785C_QUAD', picture: 'http://www.technomarket.bg/files/ARTIKLI/09131841/image_thumb_250.jpg', price: '270'},
      			{name: 'SONY XPERIA™ TABLET Z2 BLACK', picture: 'http://www.technomarket.bg/files/ARTIKLI/09135741/image_thumb_250.jpg', price: '1000'},
      			{name: 'LG G PAD 8.3 V500 WHITE', picture: 'http://www.technomarket.bg/files/ARTIKLI/09133152/image_thumb_250.jpg', price: '500'}
      ]
    });
};