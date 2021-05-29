function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    var y = document.forms["myForm"]["phone"].value;
    if (y == "") {
        alert("Phone must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
    /*
    if (x !="" && y !="" && z !="" ) {
       alert ("Successful");
    }*/

    var regularExpression = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (regularExpression.test(x) ){
        alert ("Name is correct");}
    else alert ("Name is incorrect")

    var regularExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (regularExpression.test(y) ){
        alert ("Phone is correct");}
    else alert ("Phone is incorrect")

    var regularExpression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     if (regularExpression.test(z) ){
         alert ("Email is correct");}
     else alert ("Email is incorrect")

}

