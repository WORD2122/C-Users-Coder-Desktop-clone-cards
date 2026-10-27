import React from 'react';
// Importamos correctamente el componente Tarjeta desde su carpeta
import Tarjeta from './assets/components/Tarjeta'; // Corregido: usualmente va en src/components/

export default function App( ) {
  
  const ciudades = [
    {
      id: 1,
      nombre: "Bogotá",
      pais: "Colombia",
      foto: "./src/assets/Bogota.png", 
      descripcion: "Una vibrante metrópolis en el corazón de los Andes, conocida por su riqueza cultural, museos de oro y su histórico barrio de La Candelaria."
    },
    {
      id: 2,
      nombre: "Ciudad de México",
      pais: "México",
      foto: "./src/assets/Ciudad-de-Mexico.png", 
      descripcion: "Una de las ciudades más grandes del mundo, llena de vida, con una herencia prehispánica imponente y una gastronomía inigualable."
    },
    {
      id: 3,
      nombre: "Lisboa",
      pais: "Portugal",
      foto: "./src/assets/Lisboa.png", 
      descripcion: "La capital costera de Portugal, famosa por sus tranvías amarillos, sus fachadas de azulejos tradicionales y sus vistas al río Tajo."
    },
    {
      id: 4,
      nombre: "Río de Janeiro",
      pais: "Brasil",
      foto: "./src/assets/rio-de-janeiro.png", 
      descripcion: "Conocida por sus playas icónicas como Copacabana e Ipanema, su espectacular carnaval y la imponente estatua del Cristo Redentor."
    },
    {
      id: 5,
      nombre: "Madrid",
      pais: "España",
      foto: "./src/assets/Madrid.png", 
      descripcion: "Una metrópolis ultra moderna que combina rascacielos iluminados con templos históricos y una cultura única en el mundo."
    }
  ];

  return (
    <div className="seccion-ciudades">
      {ciudades.map(ciudad => (
        
        <Tarjeta 
          key={ciudad.id} 
          foto={ciudad.foto}
          nombre={ciudad.nombre}
          pais={ciudad.pais}
          descripcion={ciudad.descripcion}
        />
      ))}
    </div>
  );
}
