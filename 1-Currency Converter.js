	
	var rub;
	var RUBtoUSD = rub*58.84;
	var RUBtoEUR = rub*69.24;

	do 	{
    	  rub  = prompt('Введите сумму в рублях:', '0');
		} 
	while (isNaN(rub));

	alert("RUB to USD: " + RUBtoUSD, 
		  "RUB to EUR: " + RUBtoEUR);