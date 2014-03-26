var pesho = {name: "Peter", age: 17, sex: "male"};

function hasProp(obj, prop) {
    return (prop in obj)
}

jsConsole.writeLine("---------------------");
jsConsole.writeLine(JSON.stringify(pesho));
jsConsole.writeLine("---------------------");
jsConsole.writeLine("hasProp(pesho, 'name') results in: " + hasProp(pesho, "name"));
jsConsole.writeLine("---------------------");

jsConsole.writeLine("hasProp(pesho, 'laptop') results in: " + hasProp(pesho, "laptop"));
jsConsole.writeLine("---------------------");

