var Class = (function() {
  function createClass(properties) {
      var f = function () {
          //This is an addition to enable super (base) class with inheritance
        if(this._superConstructor){
            this._super = new this._superConstructor(arguments);
            }
      this.init.apply(this, arguments);
    }
    for (var prop in properties) {
      f.prototype[prop] = properties[prop];
    }
    if (!f.prototype.init) {
      f.prototype.init = function() {}
    }
    return f;
  }

  Function.prototype.inherit = function(parent) {
    var oldPrototype = this.prototype;
    this.prototype = new parent();
    this.prototype._superConstructor = parent;
    for (var prop in oldPrototype) {
      this.prototype[prop] = oldPrototype[prop];
    }
  }

  return {
    create: createClass,
  };
}());

var SchoolRepository = (function () {
    
    var School = Class.create({

        init: function(name, town) {
            
            this.name = name;
            this.town = town;
            this.classesOfStudents = [];
        },

        addClass: function(studentsClass) {

            this.classesOfStudents.push(studentsClass);
        },

        toString: function() {

            return "[School] " + "Name: " + this.name + ", Town: " + this.town + ", Classes: " + this.classesOfStudents.join(", "); 
        }
    });

    var Person = Class.create({

        init: function(fname, lname, age) {

            this.fname = fname;
            this.lname = lname;
            this.age = age;
        },

        introduce: function() {

            return "First Name: " + this.fname + ", Last Name: " + this.lname + ", Age: " + this.age;
        }

    });

    var Student = Class.create({

        init: function(fname, lname, age, grade) {

            this._super.init.apply(this, arguments);
            this.grade = grade;
        },

        introduce: function() {

            console.log("[Student] " + this._super.introduce.apply(this) + ", Grade: " + this.grade);
        }
    });

    Student.inherit(Person);

    var Teacher = Class.create({

        init: function(fname, lname, age, speciality) {

            this._super.init.apply(this, arguments);
            this.speciality = speciality;
        },

        introduce: function() {

            console.log("[Teacher] " + this._super.introduce.apply(this) + ", Speciality: " + this.speciality);
        }

    });

    Teacher.inherit(Person);

    var SchoolClass = Class.create({

        init: function(name, capacity, formTeacher) {

            this.name = name;
            this.capacity = capacity;
            this.formTeacher = formTeacher;
            this.setOfStudents = [];
        },

        addStudent: function(student) {

            if(this.setOfStudents.length < this.capacity) {

                this.setOfStudents.push(student);
            }

                else {

                    console.log("This class is already full! Find another class for: " + student.fname);
                }
        },

        toString: function() {

            return "[SchoolClass] " + "Name: " + this.name + ", Capacity: " + this.capacity + ", Form-Teacher: " + this.formTeacher 
                    + ", List Of Students: " + JSON.stringify(this.setOfStudents); 
        }
    });

    return {

        School: School,
        Student: Student,
        Teacher: Teacher,
        SchoolClass: SchoolClass
    }

}());

alert("Please check my code!");

var School = SchoolRepository.School;
var Student = SchoolRepository.Student;
var Teacher = SchoolRepository.Teacher;
var SchoolClass = SchoolRepository.SchoolClass;

var neg = new School("91 NEG", "Sofia");
console.log(neg.toString());
console.log("");

var tony = new Student("Anton", "Karakochev", 17, 11);
tony.introduce();
console.log("");

var gregury = new Teacher("Grigor", "Dimitrov", 60, "geography");
gregury.introduce();
console.log("");

var elfE = new SchoolClass("11e", 1, "Valentina Pavlova");
console.log(elfE.toString());
console.log("");

console.log("Adding Anton to 11e");
elfE.addStudent(tony);
console.log(elfE.toString());
console.log("");

var boyan = new Student("Boyan", "Hristov", 17, 11);
boyan.introduce();
console.log("");

console.log("Adding Boyan to 11e, with no more places in 11e");
elfE.addStudent(boyan);
console.log(elfE.toString());