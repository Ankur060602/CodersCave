function calculateBmi() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight/(Math.pow(height,2)));

    document.getElementById('heading').innerHTML='Your BMI is :';
    document.getElementById('bmi-output').innerHTML=bmi.toFixed(2);

    if (bmi<=24.9) {
        document.getElementById('message').innerHTML="You are underweight";
    }
    else if (bmi>=25 && bmi <=29.9) {
        document.getElementById('message').innerHTML="You are a healthy weight";
    }
    else {
        document.getElementById('message').innerHTML="Your are Overweight";
    }

}

function reload() {
    window.location.reload();
}