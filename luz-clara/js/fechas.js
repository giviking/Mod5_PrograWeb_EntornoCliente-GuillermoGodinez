//fechas.js - Fechas con DATE
const hoy = new Date(); //fecha y hora de ahora
console.log(hoy.getFullYear); // año = 2026
console.log(hoy.getMonth() + 1); //mes enpieza en cero
console.log(hoy.getDate()); // dia del mes lunes
console.log(hoy.toLocaleDateString("es-CR")); // formato de CR
const sesion = new Date(2026, 11, 5);
console.log(sesion.toLocaleDateString("es-CR", {dateStyle: "full"}));