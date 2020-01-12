//password generator//
function generate() {

//password legnth/complexity//
let complexity = document.getElementById("slider").value;

//possible password values
let values = "a0123456789";

let password = "";


//create for loop to choose passwords
for (var i = 0; i <= complexity; i++) {
password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//add passwords to textbox/display area
document.getElementById("display").value = password;

//add password to previously generated passwords section
document.getElementById("lastnums").innerHTML += password + "<br/>"
}

//set defult length of 25
document.getElementById("length").innerHTML = "length: 25"

//length function based on slider position
document.getElementById("slider").oninput = function(){
    
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length:" + document.getElementById("slider").value
    }

    else{
        document.getElementById("length").innerHTML = "length: 1"
    }

}

//copy to clipboard
function copypassword() {

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("password copied to clipboard");
}
