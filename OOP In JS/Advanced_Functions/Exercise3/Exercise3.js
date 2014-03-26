var specialConsole = (function () {

  function createMessage () {

    var messageSlots = [];
    var message = arguments[0];
    if (arguments.length == 1) {
        message = arguments[0];
    } else if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {

            messageSlots.push(new messageSlot("\\{" + (i - 1) + "\\}", JSON.stringify(arguments[i])));
        }
        for (var i = 0; i < messageSlots.length; i++) {
           
            var re = new RegExp(messageSlots[i].place, "g");
            message = message.replace(re, messageSlots[i].text);
        }
    }
    return message;

  }

  function messageSlot(place, text) {
    this.place = place;
    this.text = text;
  }

  return {

    writeLine: function () {
        console.log(createMessage.apply(null, arguments));
      },
    writeError: function () {
        console.error(createMessage.apply(null, arguments));
      },
    writeWarning: function () {
        console.warn(createMessage.apply(null, arguments));
      }
  };

}());

specialConsole.writeLine("Message: hello");                     //logs to the console "Message: hello"
specialConsole.writeLine("Message: {0}", "hello");             //logs to the console "Message: hello"
specialConsole.writeError("Error: {0}", "Something happened");//Writes an error "Error: Something happened"
specialConsole.writeWarning("Warning: {0}", "A warning");    //Writes a warning "Warning: A warning"

specialConsole.writeError("Long warning message(NOTE THAT IT IS RETURNING EVERYTHING FINE AND NOT [object Object]): {0}, {1}, {2}",
    {},
    {someKey: "thisKeyValue", nestedKeyAndValue: {theKey: "theValue"}},
    [
      {anotherKey: "anotherValue"},
      new Number(13),
      13,
      "aString",                                                                                    //Loggs everything fine, not just [object Object]
      new String("newString"),
      [1],
      true,
      new Date,
      new Boolean(3+1==5),
      function functionName(argumentOne, argumentTwo) {return argumentOne == argumentTwo}
    ]);

var pesho = {
  name: "Peter",
  age: 12,
  sex: "male"
}
specialConsole.writeWarning(pesho); //Loggs the whole object, not just [object Object]

