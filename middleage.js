const data = [
{ sex: 'male', age: 28 },
{ sex: 'female', age: 34 },
{ sex: 'male', age: 27 },
{ sex: 'female', age: 32 }, 
{ sex: 'male', age: 27 },
{ sex: 'male', age: 43 } 
];

// To find average males age. Better if solution would be one string
// i.e. const averageAge = ….

// -----------------------------------------

var males_quantity=0;
var average_male_age = 0;
var age = 0;
for(i=0;i<data.length;i++){
	if(data[i].sex=="male"){
		males_quantity++;
		age+=data[i].age;
		average_male_age=age/males_quantity;
	}
}
console.log(average_male_age);