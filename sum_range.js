var arr = [];

function range(a, b){
	if(a < b){
      for(var i = a; i <= b; i++){
    	arr.push(i);
    }
  }else if(a > b){
  	for(var i = a; i >= b; i--){
    	arr.push(i);
    }
  }else{
  	return "No can do";
  }
  		return arr;
};

function sum(arr){
	var total = 0;//used to store the numbers
  	for(var i in arr){
    	total = total + arr[i];
    }
  return total;
  delete total;
}



console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
