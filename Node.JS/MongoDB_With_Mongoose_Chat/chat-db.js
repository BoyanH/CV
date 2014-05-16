var	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ChatSystem');

var User = mongoose.model('User', {
	username: String,
	pass: String
});

var Message = mongoose.model('Message', {

	from: String,
	to: String,
	text: String
});

exports.registerUser = function (req, res) {

	var user = new User({
		username: req.username,
		pass: req.pass
	});

	User.find({username: user.username}, function (err, docs) {

		if (docs.length) {
			
			console.log('---------------------------------------------------------------------------');
			console.error('User [' + user.username + '] already exists');
			console.log('---------------------------------------------------------------------------');

		}
			else{
				user.save(function (err) {
					if (err) throw err;
					User.find({
						username: user.username
					})
						.exec(function (err, users) {
							if (err) throw err;
							console.log('---------------------------------------------------------------------------');
							console.log('User registered!');
							for (var i = 0; i < users.length; i++) {
								console.log(users[i]);
							}
							console.log('---------------------------------------------------------------------------');
						});
				});
			}
	}).limit(1)


}

exports.sendMessage = function (req, res) {

	var message = new Message({

		from: req.from,
		to: req.to,
		text: req.text
	});

	message.save(function (err) {
		if (err) throw err;
		Message.find({
			from: message.from,
			to: message.to,
			text: message.text
		})
			.exec(function (err, messages) {
				if (err) throw err;
				console.log('---------------------------------------------------------------------------');
				console.log('Message sent! [This finds all messages with same sender, reciever and text.' 
					+'If there are two messages, a same message was simply sent twice');
				for (var k = 0; k < messages.length; k++) {
					console.log(messages[k]);
				}
				console.log('---------------------------------------------------------------------------');
			});
	});
};

exports.getMessages = function (req, res) {

	var sharedCorrespondancy = [];

	Message.find({
		from: req.with,
		to: req.and
	})
		.exec(function (err, messages) {
			for (var j = 0; j < messages.length; j++) {
				sharedCorrespondancy.push(messages[j]);
			}

			Message.find({
				from: req.and,
				to: req.with
			})
				.exec(function (err, messages) {

					for (var z = 0; z < messages.length; z++) {
						sharedCorrespondancy.push(messages[z]);
					}

					console.log('---------------------------------------------------------------------------');
					console.log('MESSAGES BETWEEN ' + req.with + ' AND ' + req.and);
					if(sharedCorrespondancy.length) {

						for (var i = 0; i < sharedCorrespondancy.length; i++) {
							console.log(sharedCorrespondancy[i]);
						};	
					}
						else{
							console.log('NO MESSAGES BETWEEN THOSE USERS!');
						}
					console.log('---------------------------------------------------------------------------');
				});
		});

};