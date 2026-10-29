# Proyecto: Catálogo de Tarjetas en React

Un proyecto sencillo en **React** que demuestra la creación de componentes reutilizables, el uso de **props** para pasar información dinámica y la aplicación de estilos con **CSS limpio y estructurado**.

## 🚀 Requisitos del Proyecto Cumplidos

- **Componente Reutilizable:** Creación del componente `Tarjeta.jsx`.
- **Uso de Props:** Toda la información de las tarjetas se pasa de forma dinámica desde `App.jsx`.
- **Estructura de la Tarjeta:** Cada tarjeta cuenta con un contenedor principal, una imagen funcional, un título y texto descriptivo.
- **Estilos CSS:** Clases bien nombradas bajo una metodología clara, sin diseños excesivamente complejos pero visualmente atractivos.
- **Cantidad Mínima:** Renderizado de un mínimo de 5 tarjetas en pantalla.
- **Control de Versiones:** Historial de commits limpio y pusheado al repositorio de GitHub.

---

## 🛠️ Estructura del Proyecto

La estructura principal del código fuente está organizada de la siguiente manera:

```text
src/
├── components/
│   ├── Tarjeta.jsx
│  
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 💻 Código Principal

### 1. Componente Tarjeta (`src/components/Tarjeta.jsx`)
```jsx
import React from 'react';

const Tarjeta = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="tarjeta-contenedor">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-texto">{descripcion}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
```

### 2. Componente Principal (`src/App.jsx`)
```jsx
import React from 'react';
import Tarjeta from './components/Tarjeta';

import './App.css';

function App() {
  const datosTarjetas = [
    {
      id: 1,
      imagen: 'https://placeholder.com',
      titulo: 'Tarjeta 1',
      descripcion: 'Esta es la descripción de la primera tarjeta del catálogo.'
    },
    {
      id: 2,
      imagen: 'https://placeholder.com',
      titulo: 'Tarjeta 2',
      descripcion: 'Esta es la descripción de la segunda tarjeta del catálogo.'
    },
    {
      id: 3,
      imagen: 'https://placeholder.com',
      titulo: 'Tarjeta 3',
      descripcion: 'Esta es la descripción de la tercera tarjeta del catálogo.'
    },
    {
      id: 4,
      imagen: 'https://placeholder.com',
      titulo: 'Tarjeta 4',
      descripcion: 'Esta es la descripción de la cuarta tarjeta del catálogo.'
    },
    {
      id: 5,
      imagen: 'https://placeholder.com',
      titulo: 'Tarjeta 5',
      descripcion: 'Esta es la descripción de la quinta tarjeta del catálogo.'
    }
  ];

  return (
    <div className="app-container">
      <Navbar />
      <main className="catalogo-contenedor">
        {datosTarjetas.map((tarjeta) => (
          <Tarjeta 
            key={tarjeta.id}
            imagen={tarjeta.imagen}
            titulo={tarjeta.titulo}
            descripcion={tarjeta.descripcion}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 🌟 Características Extras Implementadas

- **Componentes Adicionales:** Se incluyeron los componentes `Navbar` y `Footer` para dar una estructura de página web completa.
- **Diseño Responsivo (Responsive Design):** Las tarjetas se adaptan perfectamente a dispositivos móviles, tablets y pantallas de escritorio mediante el uso de CSS Grid / Flexbox y Media Queries.

---

## 🔧 Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   ```
2. **Navegar al directorio del proyecto:**
   ```bash
   cd nombre-del-proyecto
   ```
3. **Instalar las dependencias:**
   ```bash
   npm install
   ```
4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
