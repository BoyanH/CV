if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

if (!Object.prototype.extend) {
    Object.prototype.extend = function (properties) {
        function f() { };
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }
}

var SchoolRepository = (function () {
    
    var School = {

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
    };

    var Person = {

        init: function(fname, lname, age) {

            this.fname = fname;
            this.lname = lname;
            this.age = age;
        },

        introduce: function() {

            return "First Name: " + this.fname + ", Last Name: " + this.lname + ", Age: " + this.age;
        }

    };

    var Student = Person.extend({

        init: function(fname, lname, age, grade) {

            Person.init.apply(this, arguments);
            this.grade = grade;
        },

        introduce: function() {

            console.log("[Student] " + Person.introduce.apply(this) + ", Grade: " + this.grade);
        }
    });

    var Teacher = Person.extend({

        init: function(fname, lname, age, speciality) {

            Person.init.apply(this, arguments);
            this.speciality = speciality;
        },

        introduce: function() {

            console.log("[Teacher] " + Person.introduce.apply(this) + ", Speciality: " + this.speciality);
        }

    });

        var SchoolClass = {

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

                return "[SchoolClass] " + "Name: " + this.name + ", Capacity: " + this.capacity + ", Form-Teacher: " + this.formTeacher + ", List Of Students: " + JSON.stringify(this.setOfStudents); 
            }
        };

        return {

            School: School,
            Student: Student,
            Teacher: Teacher,
            SchoolClass: SchoolClass
        }

}());

alert("Open console and please check my code");

var neg = Object.create(SchoolRepository.School);
neg.init("91 NEG", "Sofia");
console.log(neg.toString());
console.log("");

var tony = Object.create(SchoolRepository.Student);
tony.init("Anton", "Karakochev", 17, 11);
tony.introduce();
console.log("");

var gregury = Object.create(SchoolRepository.Teacher);
gregury.init("Grigor", "Dimitrov", 60, "geography");
gregury.introduce();
console.log("");

var elfE = Object.create(SchoolRepository.SchoolClass);
elfE.init("11e", 1, "Valentina Pavlova");
console.log(elfE.toString());
console.log("");

console.log("Adding Anton to 11e");
elfE.addStudent(tony);
console.log(elfE.toString());
console.log("");

var boyan = Object.create(SchoolRepository.Student);
boyan.init("Boyan", "Hristov", 17, 11);
boyan.introduce();
console.log("");

console.log("Adding Boyan to 11e, with no more places in 11e");
elfE.addStudent(boyan);
console.log(elfE.toString());




