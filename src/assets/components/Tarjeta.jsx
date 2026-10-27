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
        <p className="cargo-testimonio">{pais}</p>
        <p className="texto-testimonio">{descripcion}</p>
      </div>
    </div>
  );
}
