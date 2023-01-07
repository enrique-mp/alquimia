window.onload = () => {
  let button = document.querySelector("#btn");

  // Function for calculating chemistry
  button.addEventListener("click", calculateALQ);
};

function calculateALQ() {

  /* Getting input from user into flavour percentage variable.
  Input is string so typecasting is necessary. */
  let pcAroma = parseInt(document.querySelector("#pcAroma").value);

  /* Getting input from user into quantity of flavour variable.
  Input is string so typecasting is necessary.*/
  let mlAroma = parseInt(document.querySelector("#mlAroma").value);

  let result = document.querySelector("#result");

  // Checking the user provide a proper value or not
  if (pcAroma === "" || isNaN(pcAroma))
      result.innerHTML = "Provide a valid Percentage!";

  else if (mlAroma === "" || isNaN(mlAroma))
      result.innerHTML = "Provide a valid Quantity!";

  // If both input are valid, calculate the chemistry
  else {

    // Doing the calculate
    let base = (((mlAroma / pcAroma) * 100) - mlAroma);

    let liq = (base + mlAroma);

    result.innerHTML = 
    `La cantidad de base necesaria es <strong><mark>${base} 
    ml.</mark></strong><br>
     para un total de <strong><mark>${liq} ml.</mark></strong> de 
     líquido final`

  }
  
}
