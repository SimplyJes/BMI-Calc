
function calculate() {
  let bmi;
  let result = document.getElementById("result-paragraph");
  let statement = document.getElementById("result-statement");
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let power = height ** 2;
  bmi = (weight / power).toFixed(2);
  result.textContent = "Result: " + bmi;

  if(bmi <= 18.49){
    statement.textContent = "Oops, you are Underweight 🙄"
  } else if((bmi >= 18.50) && (bmi <= 24.99)){
    statement.textContent = "Yay, you have a Normal Weight 😍"
  } else if((bmi >= 25) && (bmi <= 29.99)){
    statement.textContent = "Hmm, you are becoming weightier 🤔. You need to start watching your weight."
  } else if(bmi >= 30){
    statement.textContent = "Ohh No, you fall within the Obese range 😪"
  } else{
    state.textContent = "Error, no input received!!!"
  }
}
