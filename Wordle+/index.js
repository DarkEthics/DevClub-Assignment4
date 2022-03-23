const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);

	const GUESS = req.url.split("=").pop(); // Write logic to parse the word which the user guessed from the URL string
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	let flag=0;
	
	function fun(){
	  for(let i=0;i<GUESS.length;i++){
		if(GUESS[i]==SECRET[i]){
			feedback=feedback + "g"; // char found at correct position
		}
		
		else{
			for(let j=0;j<SECRET.length;j++){
				if(GUESS[i]==SECRET[j]){
					feedback=feedback + "y";  //char is found but misplaced
					flag=1;
					break;
				}
			}
			
			if(flag==0)  // required char not found
			        feedback=feedback + "b";	
		}  
		
	  }	
	}
	
	fun();
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
