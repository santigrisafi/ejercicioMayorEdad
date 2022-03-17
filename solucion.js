let nombreUsuario = prompt("Ingrese su nombre de usuario");
let edad = prompt("Ingrese su edad");

let edadInt = Number(edad); //Casting de la variable es un parseInt

let verificarEdad = (edad) => {
  return new Promise((resolve, reject) => {
    resolve(edad >= 18 ? alert("Podes entrar") : alert("No podes entrar"));
  });
};

verificarEdad(edadInt)
  .then((resultado) => {})
  .catch(() => document.write("Surgio un error en la ejecuccion"));
