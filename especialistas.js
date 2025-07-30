// especialistas.js

// Datos completos por ID del especialista
const mapaEspecialistas = {
  especialista1: {
    nombre: "Dra. Jessica",
    especialidad: "Medicina General, Longevidad y Dermoestética",
    descripcion: "Especialista en medicina de precisión y tratamientos regenerativos. Más de 10 años de experiencia."
  //},
  //especialista2: {
  //  nombre: "Dr. David",
  //  especialidad: "Endocrinología, Nutrición y Biohacking",
  //  descripcion: "Experto en nutrición funcional, optimización hormonal y planes de longevidad basados en datos."
  }
};

// Función auxiliar para obtener nombre desde URL
function obtenerNombreEspecialistaDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("especialista");
  return mapaEspecialistas[id]?.nombre || "Especialista desconocido";
}
