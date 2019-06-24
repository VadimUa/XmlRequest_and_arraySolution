const users = [
{ sex: 'male', age: 28 },
{ sex: 'female', age: 34 },
{ sex: 'male', age: 27 },
{ sex: 'female', age: 32 }, 
{ sex: 'male', age: 27 },
{ sex: 'male', age: 43 } 
];
let result = users.reduce(function(males, arrayelement){
	if(arrayelement.sex === "male" && arrayelement.age>25){
		males++;return males;
	}
	return males;
}, 0); 
console.log(result);