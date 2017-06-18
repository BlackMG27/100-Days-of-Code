/*
The previous chapter introduced the standard function Math.min that returns its
smallest argument. We can do that ourselves now. Write a function min that takes
two arguments and returns their minimum.
*/

function min(a, b){
	var mMin = Math.min(a,b);
  return mMin;
}

/*
Bean Counting

Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to
be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

function countBs(str){
  //find the letter(s) that equals 'B'
  var letterFind = "B";
  //create variable to store findings
      var letterCheck = 0;
  	for(var i = 0; i<= str.length; i++){
      //add letterFind to letterCheck if found
      if(str.charAt(i) == letterFind){
        //make it return the number
      	 letterCheck++;
      }
    }
  return letterCheck;
}

function countChar(str, char){
  //create variable to store findings
  var letterCheck = 0;
	for(var i = 0; i <= str.length; i++){
    	if(str.charAt(i) == char){
        	letterCheck++;
        }
    }
  return letterCheck;
}
