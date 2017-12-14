	
	var dollar = 63, // текущий курс доллара
	euro = 69, // текущий курс евро 
	rub;

	do 	{
    	  rub  = prompt('Введите сумму в рублях:', '0');
		} 
	while (isNaN(rub));

	alert ("Сумма в долларах: " + (rub/dollar).toFixed(2) + " $" +'\n' + "Сумма в евро: " + (rub/euro).toFixed(2) + " €")