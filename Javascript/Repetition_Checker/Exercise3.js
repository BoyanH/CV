function check(i) {

    var word = document.getElementById("word").value;
    var textarea = document.getElementById("textarea").value;
    var answer = document.getElementById("answer");
    var text = textarea.split(" ");
    var reps = 0;

    for (i = 0; i < text.length; i++) {

        if (text[i] == word) {
            reps++;
        }
    }
    


        answer.innerHTML = "The word " + "`" + word + "`" + " is repeated " + reps + " times";

}