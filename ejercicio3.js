/* 3.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const usersName = users.map(user => user.name)
console.log("3.1 "+"---".repeat(20))
console.log(usersName)

/* 3.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const nameListStartsWithA = users.map(user => user.name.startsWith("A") ? "Anacleto" : user.name)
console.log("3.2 "+"---".repeat(20))
console.log(nameListStartsWithA)

/* 3.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];  
const updateCities = cities.map(city => city.isVisited ? `${city.name} (Visitado)` : city.name)
console.log("3.3 "+"---".repeat(20))
console.log(updateCities)

//creamos udateCities, con un map iteramos en cities, y si es visited true ponemos visitado y city.name sino solo city.name