const btn = document.getElementById("btnFlores");
const ramo = document.getElementById("ramo");

btn.addEventListener("click", () => {
  // Limpiamos el ramo para poder "re-regalar" las flores
  ramo.innerHTML = "";

  // Creamos los elementos de fondo primero
  crearEnvoltura();
  crearBrillos();

  // 🌻 POSICIONES COORDINADAS (Apretaditas para que no se dispersen)
  // x: desplazamiento lateral | y: altura desde el fondo
  const posiciones = [
    { x: 0,   y: 160, rot: 0 },   // Flor más alta (centro)
    { x: -35, y: 145, rot: -10 }, // Fila superior izquierda
    { x: 35,  y: 145, rot: 10 },  // Fila superior derecha
    { x: -55, y: 120, rot: -15 }, // Fila media izquierda
    { x: 0,   y: 125, rot: 0 },   // Fila media centro
    { x: 55,  y: 120, rot: 15 },  // Fila media derecha
    { x: 0,   y: 90,  rot: 0 }    // Flor base (asoma apenas)
  ];

  posiciones.forEach((pos, i) => {
    setTimeout(() => {
      crearGirasol(pos);
    }, i * 100);
  });
});

function crearGirasol(pos) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("girasol-container");

  // Posicionamiento relativo al centro del div #ramo
  contenedor.style.left = `calc(50% + ${pos.x}px)`;
  contenedor.style.bottom = `${pos.y}px`;

  // Rotación aleatoria pequeña para que se vea natural
  const variacion = (Math.random() - 0.5) * 5;
  contenedor.style.transform = `translateX(-50%) rotate(${pos.rot + variacion}deg)`;

  const flor = document.createElement("div");
  flor.classList.add("flor");

  // Crear 12 pétalos
  for (let i = 0; i < 12; i++) {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");
    petalo.style.transform = `translate(-50%, -100%) rotate(${i * 30}deg)`;
    flor.appendChild(petalo);
  }

  const centro = document.createElement("div");
  centro.classList.add("centro");

  // Tallo: lo ajustamos para que se hunda en la envoltura
  const tallo = document.createElement("div");
  tallo.classList.add("tallo");
  tallo.style.height = `100px`; 

  flor.appendChild(centro);
  contenedor.appendChild(flor);
  contenedor.appendChild(tallo);

  ramo.appendChild(contenedor);
}

function crearEnvoltura() {
  const env = document.createElement("div");
  env.classList.add("envoltura");
  ramo.appendChild(env);
}

function crearBrillos() {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.classList.add("brillo");
    b.style.left = Math.random() * 100 + "%";
    b.style.top = Math.random() * 100 + "%";
    b.style.animationDelay = Math.random() * 2 + "s";
    ramo.appendChild(b);
  }
}