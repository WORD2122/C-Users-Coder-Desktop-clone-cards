import React from 'react';

export default function Tarjeta({ foto, nombre, pais, descripcion }) {
  return (
    <div className="contenedor-ciudades">
      <div className="contenedor-imagen-ciudades">
        <img 
          className="imagen-ciudades" 
          src={foto} 
          alt={`Fotografía de ${nombre}`} 
        />
      </div>
      <div className="contenedor-texto-ciudades">
        <h2 className="nombre-ciudades">{nombre}</h2>
        {/* Cambiado de .cargo-testimonio a .pais-ciudad */}
        <p className="pais-ciudad">{pais}</p>
        {/* Cambiado de .texto-testimonio a .descripcion-ciudad */}
        <p className="descripcion-ciudad">{descripcion}</p>
      </div>
    </div>
  );
}
