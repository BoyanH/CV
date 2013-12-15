function check() {
    var theinput = document.getElementById("theinput");
    var answer = document.getElementById("answer");
    var number = parseInt(theinput.value);
    var singles = number % 10;
    var decades = Math.floor(number / (Math.pow(10, 1)) % 10);
    var hundreds = Math.floor(number / (Math.pow(10, 2)) % 10);
    var strTeens = decades.toString() + singles.toString();
    var decadesIsOne = strTeens*1;
    var text = "The english word for the given number is: ";
    
    if (isNaN(number)) {
        result = "Invalid Integer!";
    }
        else {
            if (number > 999) {

                result = "Please enter a maximum 3 digit number!"
            }
                else {
                    if (decades == 1) {
                        var teens;
                        switch (decadesIsOne) {

                            case 11: teens = "Eleven"; break;
                            case 12: teens = "Twelve"; break;
                            case 13: teens = "Thrirteen"; break;
                            case 14: teens = "Fourteen"; break;
                            case 15: teens = "Fifteen"; break;
                            case 16: teens = "Sixteen"; break;
                            case 17: teens = "Seventeen"; break;
                            case 18: teens = "Eighteen"; break;
                            case 19: teens = "Nineteen"; break;
                            default: teens = "";   

                       }
                       switch (hundreds) {
                                
                            case 1: hundreds = "One hundred and "; break;
                            case 2: hundreds = "Two hundred and "; break;
                            case 3: hundreds = "Three hundred and "; break;
                            case 4: hundreds = "Four hundred and "; break;
                            case 5: hundreds = "Five hundred and "; break;
                            case 6: hundreds = "Six hundred and "; break;
                            case 7: hundreds = "Seven hundred and "; break;
                            case 8: hundreds = "Eight hundred and "; break;
                            case 9: hundreds = "Nine hundred and "; break;
                            default: hundreds = "";
                            }

                            result = text + hundreds + teens;
                    }
                        else {
                             switch (hundreds) {
                                
                                case 1: hundreds = "One hundred and "; break;
                                case 2: hundreds = "Two hundred and "; break;
                                case 3: hundreds = "Three hundred and "; break;
                                case 4: hundreds = "Four hundred and "; break;
                                case 5: hundreds = "Five hundred and "; break;
                                case 6: hundreds = "Six hundred and "; break;
                                case 7: hundreds = "Seven hundred and "; break;
                                case 8: hundreds = "Eight hundred and "; break;
                                case 9: hundreds = "Nine hundred and "; break;
                                default: hundreds = "";
                            }
                            switch (decades) {
                              
                                case 2: decades = "Twenty "; break;
                                case 3: decades = "Thrirty "; break;
                                case 4: decades = "Forty "; break;
                                case 5: decades = "Fifty "; break;
                                case 6: decades = "Sixty "; break;
                                case 7: decades = "Seventy "; break;
                                case 8: decades = "Eightty "; break;
                                case 9: decades = "Ninety "; break;
                                default: decades = " "; break; 

                            }
                            switch (singles) {

                                case 1: singles = "One"; break;
                                case 2: singles = "Two"; break;
                                case 3: singles = "Three"; break;
                                case 4: singles = "Four"; break;
                                case 5: singles = "Five"; break;
                                case 6: singles = "Six"; break;
                                case 7: singles = "Seven"; break;
                                case 8: singles = "Eight"; break;
                                case 9: singles = "Nine"; break;
                                default: singles = " "; break;

                            }
                            result = text + hundreds + decades + singles;
                        }
                }
        }

        answer.innerHTML = result;

}