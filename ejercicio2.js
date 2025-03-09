/* 2.1 Dado el siguiente array, crea una copia usando spread operators. */
const pointsList = [32, 54, 21, 64, 75, 43]
const copiedList = [...pointsList]
console.log("2.1 "+"---".repeat(20))
console.log(copiedList)


/* /* 2.2 Dado el siguiente objeto, crea una copia usando spread operators. */
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiedToy = {...toy}
console.log("2.2 "+"---".repeat(20))
console.log(copiedToy)

/* /* 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */

const pointsLis2 = [54, 87, 99, 65, 32];
const combinedList = [...pointsList, ...pointsLis2]
console.log("2.3 "+"---".repeat(20))
console.log(combinedList)


/* /* 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const combinedToys = {...toy, ...toyUpdate}
console.log("2.4 "+"---".repeat(20))
console.log(combinedToys)



/* /* 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const colorsCopy = [...colors.slice(0,2),...colors.slice(3)] //crea una copia de colors del 0 al 2 sin incluir, y del 3 en adelante.
console.log("2.5 "+"---".repeat(20))
console.log(colorsCopy)
console.log(colors)
