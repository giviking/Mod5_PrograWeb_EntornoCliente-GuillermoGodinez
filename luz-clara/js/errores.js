//errores.js - try, catch y finally
try {
    console.log("Inicio");
    const nombre = null;
    console.log(nombre.toUpperCase());
    console.log("esta linea no se muestra");
} catch (error) {
    console.log("Se atrapo: ", error.message);
} finally {
    console.log("Fin ndel intento");
}
console.log("El programa sigue");
