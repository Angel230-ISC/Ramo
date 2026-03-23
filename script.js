const btn = document.getElementById("btnFlores");
const ramo = document.getElementById("ramo");

btn.addEventListener("click", () => {
  ramo.innerHTML = "";

  crearEnvoltura();
  crearHojas();
  crearBrillos();

  // 🌻 POSICIONES COMPACTAS (Valores x e y reducidos para que no se separen)
  const posiciones = [
    { x: 0,   y: 110, rot: 0 },   // Flor central arriba
    { x: -30, y: 95,  rot: -10 }, // Izquierda arriba
    { x: 30,  y: 95,  rot: 10 },  // Derecha arriba
    { x: -45, y: 75,  rot: -15 }, // Izquierda medio
    { x: 0,   y: 75,  rot: 0 },   // Centro medio
    { x: 45,  y: 75,  rot: 15 },  // Derecha medio
    { x: 0,   y: 50,  rot: 0 }    // Base
  ];

  posiciones.forEach((pos, i) => {
    setTimeout(() => {
      crearGirasol(pos);
    }, i * 100); // Un poco más rápido para que el efecto sea fluido
  });
});

/* 🌻 CREAR GIRASOL */
function crearGirasol(pos) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("girasol-container");

  // Usamos los valores ajustados
  contenedor.style.left = `calc(50% + ${pos.x}px)`;
  contenedor.style.bottom = `${pos.y}px`;

  const variacion = (Math.random() - 0.5) * 5;
  contenedor.style.transform = `translateX(-50%) rotate(${pos.rot + variacion}deg)`;

  const flor = document.createElement("div");
  flor.classList.add("flor");

  for (let i = 0; i < 12; i++) {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");
    petalo.style.transform = `translate(-50%, -100%) rotate(${i * 30}deg)`;
    flor.appendChild(petalo);
  }

  const centro = document.createElement("div");
  centro.classList.add("centro");

  // Tallo más corto para que no sobresalga por abajo del ramo
  const tallo = document.createElement("div");
  tallo.classList.add("tallo");
  tallo.style.height = `${90 + Math.random() * 20}px`; 

  flor.appendChild(centro);
  contenedor.appendChild(flor);
  contenedor.appendChild(tallo);

  ramo.appendChild(contenedor);
}

function crearEnvoltura() {
  const envoltura = document.createElement("div");
  envoltura.classList.add("envoltura");
  ramo.appendChild(envoltura);
}

function crearHojas() {
  const hojaIzq = document.createElement("div");
  hojaIzq.classList.add("hoja-grande", "hoja-izq");
  const hojaDer = document.createElement("div");
  hojaDer.classList.add("hoja-grande", "hoja-der");
  ramo.appendChild(hojaIzq);
  ramo.appendChild(hojaDer);
}

function crearBrillos() {
  for (let i = 0; i < 20; i++) {
    const brillo = document.createElement("div");
    brillo.classList.add("brillo");
    brillo.style.left = Math.random() * 100 + "%";
    brillo.style.top = Math.random() * 100 + "%";
    brillo.style.animationDelay = Math.random() * 2 + "s";
    ramo.appendChild(brillo);
  }
}