const btn = document.getElementById("btnFlores");
const ramo = document.getElementById("ramo");

btn.addEventListener("click", () => {
  ramo.innerHTML = "";

  // 🌻 RAMO TIPO TRIÁNGULO (como imagen)
  const posiciones = [
    // 🔝 arriba
    { x: 0, y: 140, rot: 0 },

    // 🌼 medio
    { x: -50, y: 110, rot: -6 },
    { x: 50, y: 110, rot: 6 },

    // 🌻 base media
    { x: -90, y: 80, rot: -8 },
    { x: 0, y: 80, rot: 0 },
    { x: 90, y: 80, rot: 8 },

    // 🌿 abajo
    { x: 0, y: 50, rot: 0 }
  ];

  posiciones.forEach((pos, i) => {
    setTimeout(() => {
      crearGirasol(pos);
    }, i * 120);
  });
});

/* 🌻 CREAR GIRASOL */
function crearGirasol(pos) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("girasol-container");

  // 📍 centrado tipo ramo
  contenedor.style.left = `calc(50% + ${pos.x}px)`;
  contenedor.style.bottom = `${pos.y}px`;

  // 🎯 rotación suave (natural)
  const variacion = (Math.random() - 0.5) * 4;
  contenedor.style.transform = `translateX(-50%) rotate(${pos.rot + variacion}deg)`;

  // 🌼 FLOR
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

  // 🌿 TALLO (ligera variación de altura)
  const tallo = document.createElement("div");
  tallo.classList.add("tallo");
  tallo.style.height = `${120 + Math.random() * 30}px`;

  flor.appendChild(centro);
  contenedor.appendChild(flor);
  contenedor.appendChild(tallo);

  ramo.appendChild(contenedor);
}

btn.addEventListener("click", () => {
  ramo.innerHTML = "";

  crearEnvoltura();
  crearHojas();
  crearBrillos();

  const posiciones = [
    { x: 0, y: 140, rot: 0 },
    { x: -50, y: 110, rot: -6 },
    { x: 50, y: 110, rot: 6 },
    { x: -70, y: 80, rot: -8 },
    { x: 0, y: 80, rot: 0 },
    { x: 70, y: 80, rot: 8 },
    { x: 0, y: 50, rot: 0 }
  ];

  posiciones.forEach((pos, i) => {
    setTimeout(() => {
      crearGirasol(pos);
    }, i * 120);
  });
});

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

  // ligera variación para que no se vea rígido
  hojaIzq.style.transform += ` rotate(${(Math.random() - 0.5) * 10}deg)`;
  hojaDer.style.transform += ` rotate(${(Math.random() - 0.5) * 10}deg)`;

  ramo.appendChild(hojaIzq);
  ramo.appendChild(hojaDer);
}

function crearBrillos() {
  for (let i = 0; i < 25; i++) {
    const brillo = document.createElement("div");
    brillo.classList.add("brillo");

    brillo.style.left = Math.random() * 100 + "%";
    brillo.style.top = Math.random() * 100 + "%";
    brillo.style.animationDelay = Math.random() * 2 + "s";

    ramo.appendChild(brillo);
  }
}