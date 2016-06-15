var fizzbuzz = function(input){
	for(i=1; i<=input; i++){
		if(i % 15 === 0){
			console.log("Fizzbuzz");
		}
		else if(i % 3 === 0){
			console.log("Fizz");
		}
		else if(i % 15 === 0){
			console.log("Buzz");
		}else{
			console.log(i);
		}	
	}
}

var num = prompt("Select a number: ");

num = parseInt(+num);


fizzbuzz(num);


