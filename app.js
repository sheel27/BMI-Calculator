window.onload = () => {
	let button = document.querySelector("#btn");
  
	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
  };
  
  function calculateBMI() {
	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document.querySelector("#height").value);
  
	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document.querySelector("#weight").value);
  
	let age = parseInt(document.querySelector("#age").value);
	let gender = document.querySelector("#gender").value;
  
	let result = document.querySelector("#result");
  
	// Checking if the user provides proper values
	if (height === "" || isNaN(height))
	  result.innerHTML = "Provide a valid Height!";
	else if (weight === "" || isNaN(weight))
	  result.innerHTML = "Provide a valid Weight!";
	else if (age === "" || isNaN(age))
	  result.innerHTML = "Provide a valid Age!";
	// If all inputs are valid, calculate the BMI
	else {
	  // Fixing up to 2 decimal places
	  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
	  // Dividing as per the BMI conditions
	  if (age < 18) {
		if (gender === "male") {
		  if (bmi < 16) result.innerHTML = `Severely Underweight : <span>${bmi}</span>`;
		  else if (bmi >= 16 && bmi < 18.5)
			result.innerHTML = `Underweight : <span>${bmi}</span>`;
		  else if (bmi >= 18.5 && bmi < 25)
			result.innerHTML = `Normal : <span>${bmi}</span>`;
		  else if (bmi >= 25 && bmi < 30)
			result.innerHTML = `Overweight : <span>${bmi}</span>`;
		  else result.innerHTML = `Obese : <span>${bmi}</span>`;
		} else if (gender === "female") {
		  if (bmi < 15) result.innerHTML = `Severely Underweight : <span>${bmi}</span>`;
		  else if (bmi >= 15 && bmi < 18.5)
			result.innerHTML = `Underweight : <span>${bmi}</span>`;
		  else if (bmi >= 18.5 && bmi < 24)
			result.innerHTML = `Normal : <span>${bmi}</span>`;
		  else if (bmi >= 24 && bmi < 30)
			result.innerHTML = `Overweight : <span>${bmi}</span>`;
		  else result.innerHTML = `Obese : <span>${bmi}</span>`;
		}
	  } else {
		if (bmi < 18.6) result.innerHTML = `Underweight : <span>${bmi}</span>`;
		else if (bmi >= 18.6 && bmi < 24.9)
		  result.innerHTML = `Normal : <span>${bmi}</span>`;
		else result.innerHTML = `Overweight : <span>${bmi}</span>`;
	  }
	}
  }
  