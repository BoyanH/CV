function check() {

    var answer = document.getElementById("answer");
    var a = parseInt(document.getElementById("numbera").value);
    var b = parseInt(document.getElementById("numberb").value);
    var c = parseInt(document.getElementById("numberc").value);
    var d = b*b - 4*a*c;
    var xone;
    var xtwo;
    var roots = "The quadratic equation's roots are: ";

    if ((isNaN(a) || isNaN(b)) || isNaN(c)) {
        result = "Invalid Integer!";
    }
        else {
            if (d < 0) {
                result = "The given quadratic equation has no roots";
            }
                else {

                    xone = "x1 = " + (-b + Math.sqrt(d))/2*a + "; ";
                    xtwo = "x2 = " + (-b - Math.sqrt(d))/2*a + "; ";
                    result = roots + xone + xtwo;

                    if (d == 0) {
                        result = roots + xone + "(This quadratic equation has only 1 root)";
                    }
                  }
         }

    answer.innerHTML = result;

}