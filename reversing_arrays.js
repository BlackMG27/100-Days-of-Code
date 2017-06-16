function reverseArray(arrayValue){
  var arr = [];
	for(var i = arrayValue.length - 1; i >= 0; i--){
    	arr.push(arrayValue.pop());
    }

  return arr;
}

function reverseArray(arrayValue){
	var arr = [];
  while(arrayValue.length){
  	arr.push(arrayValue.pop());//the items inside arrayValue are being pushed into arr backwards
  }

  return arr;
}

function reverseArrayInPlace(arrayValue){
	for(var i = 0; i < arrayValue.length; i++){
    	var a = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length-1-i];
        arrayValue[arrayValue.length-1-i] = a;
    }

}


function reverseArrayInPlace(arrayValue){
  var i = 0,
      n = arrayValue.length;
  var middle = Math.floor(n/2),//this determines the halfway point since the middle item will stay in the same place
      a = null;//var needed to temporarily store array items

  for(; i < middle; i++){
  	a = arrayValue[i];
   arrayValue[i] = arrayValue[n-1-i];
    arrayValue[n-1-i] = a;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
