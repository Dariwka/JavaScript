function calculate() {
  let kg = Number(document.querySelector("#kg").value);
  let m = Number(document.getElementById("m").value);
  let answer = document.querySelector("#answer");
  let solution = document.querySelector("#solution");

  let BMI = Math.floor(kg / m);
  let text;

  /*   BIM < 18.5
        ? (text = "Underweight")
  
      BIM => 18.5   
        ? (text = )
        : (text = "Ups, you have to stay here");*/

  if (kg === 0 && m === 0) {
    alert("Please put information inside input or check if it correct")
  }

  if (BMI < 18.5) {
    text = "Underweight";
  } else

    if (BMI => 18.5 && BMI < 24.9) {
      text = "Normal or Healthy Weight";
    } else

      if (BMI => 25 && BMI < 29.9) {
        text = "Overweight";
      } else

        if (BMI => 30) {
          text = "Obese";
        }

  answer.textContent = `Your BMI is ${BMI}`;
  solution.textContent = text;
}