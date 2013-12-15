function check() {

    var answer = document.getElementById("answer");
    var n = parseInt(document.getElementById("theinput").value);
    var i;
    var result = "";

        if (isNaN(n)) {
            result = "Invalid Integer!";
        }
            else {
                for (var i=1; i<=n; i++){
                        result += i + " ";
                }
                    if (result == "") {
                        result = "Incorrect input!";
                    }
                }

        answer.innerHTML = result;

}