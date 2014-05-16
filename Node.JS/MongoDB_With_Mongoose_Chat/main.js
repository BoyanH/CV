var	chatDb = require('./chat-db');

//I SET INTERVALS HERE, BECAUSE SOME OPERATION ON THE DATABASE ARE MUCH SLOWER THAN OTHERS, WHICH CAUSES CERTAIN PROBLEMS

//FOR EXAMPLE: WHEN EXECUTING SENDMESSAGE AND FINDMESSAGES DATABASE IS FIRT GIVING US THE EMPTY SET OF MESSAGES AND THAN SAVING
//THE SENT MESSAGE. IN REAL LIFE SUCH THINGS CANNOT HAPPEN, BECAUSE 1)NOBODY CAN BE THAT FAST 2)AUTHENTICATION NEEDED
//3) IN A CHAT CLIENT MESSAGES ARE QUERIED MULTIPLE TIMES, SO EVEN IF THEY ARE NOT FOUND THE FIRST TIME, THEY WILL BE SOME TIME LATER 

chatDb.registerUser({username: 'BoyanH', pass: 'notrealpass'});
setTimeout(chatDb.registerUser, 1, {username: 'DonchoMinkov', pass: '123456q'});

setTimeout(chatDb.sendMessage, 200, {from: 'Doncho Minkov', to: 'BoyanH', text: 'Napishi si domashnite, ej!'});
setTimeout(chatDb.sendMessage, 300, {from: 'BoyanH', to: 'Doncho Minkov', text: 'Tamun gi dovurshvam, nqma da se plashish ;)'});

setTimeout(chatDb.getMessages, 800, {with: 'Doncho Minkov', and: 'BoyanH'});
