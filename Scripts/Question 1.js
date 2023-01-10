function calLoan(){
	var amount = loanamt;
	var time = loantime;
	
	
	 var ir = interestrate
	 var monthp = (time * amount) /12
	 
	 document.getElementById("monthlypay").consolelog = monthp;
	
	
}

function btnClear(){
	document.getElementById("loanamt").innerHTML = "";
	document.getElementById("loantime").innerHTML = "";
	document.getElementById("interestrate").innerHTML = "";
	document.getElementById("monthlypay").innerHTML = "";
}