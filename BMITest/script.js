var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

function validateForm() {
  if (age.value == "" || height.value == "" || weight.value == "") {
    alert("Please fill out all fields");
    document
        .getElementsById("submit")
        .removeEventListener("click", calculateBMI);
  } else {
    calculateBMI();
  }
}

document.getElementsById("submit").addEventListener("click", validateForm);

function calculateBMI() {
    var bmi = (weight.value / (height.value * height.value)) * 703;
    var result ='';
    if (bmi < 18.5) {
        result = " You are underweight.";
    }
    else if (bmi > 18.5 && bmi < 25) {
        result = " You are normal weight.";
    }
    else if (bmi > 25 && bmi < 30) {
        result = " You are overweight.";
    }
    else if (bmi > 30) {
        result = " You are obese.";
    }
    
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");

    var t = document.createTextNode(result);
    var t2 = document.createTextNode("BMI Calculated: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(t);
    h2.appendChild(t2);
    h2.appendChild(r);

    document.appendChild(h1);
    document.appendChild(h2);

    document.getElementById("submit").removeEventListener("click", calculateBMI);
    
    document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", calculateBMI);
