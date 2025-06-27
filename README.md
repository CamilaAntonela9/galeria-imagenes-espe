# Galería de Imágenes ESPE

---

## Objetivo

Personalizar el comportamiento de un Web Componente usando **LitElement**, integrando:

- Estados dinámicos reactivos usando `@property` para manejar atributos como `loading`, `currentIndex` y `images`.
- Temas y estilos alineados al Manual de Imagen de la ESPE (colores institucionales, tipografía Arial/Roboto, espaciado y bordes redondeados).
- Eventos personalizados para comunicación intercomponente (`imagen-cambiada`, `imagen-seleccionada`).
- Validación básica del estado de carga y accesibilidad para usuarios con teclado y lectores de pantalla.
- Aplicar buenas prácticas de desarrollo para asegurar originalidad y calidad del código.

---

## Descripción General del Proyecto

El componente `<espe-image-gallery>` es una galería de imágenes que permite navegar entre un conjunto de imágenes proporcionadas por el usuario. Implementa un manejo reactivo de estados con LitElement, actualizando automáticamente la interfaz cuando cambian los datos. La navegación se puede realizar mediante botones o mediante teclado, cumpliendo con criterios básicos de accesibilidad.

---

## Estructura del Proyecto
/
├── components/
│ └── espe-image-gallery.js # Componente LitElement personalizado
├── assets/
│ ├── 1.jpeg
│ ├── 2.jpeg
│ └── 3.jpeg # Imágenes usadas en la galería
├── index.html # Archivo principal HTML para mostrar la galería
└── README.md # Documentación completa del proyecto

## Asignar imágenes mediante JavaScript
js
Copiar
Editar
const gallery = document.querySelector('espe-image-gallery');
gallery.images = [
  './assets/1.jpeg',
  './assets/2.jpeg',
  './assets/3.jpeg'
];

## Navegación
Botones "Anterior" y "Siguiente" para recorrer las imágenes.

Navegación mediante teclado: flechas izquierda/derecha para moverse, Enter o espacio para seleccionar la imagen activa.

Visualización de spinner mientras la imagen se carga.


## Atributos y Estados Reactivos
Propiedad	Tipo	Descripción
images	Array	Array de URLs de las imágenes que se mostrarán.
currentIndex	Number	Índice actual que indica qué imagen se está mostrando.
loading	Boolean	Indica si la imagen actual está en proceso de carga.

## Eventos personalizados
 | Evento                | Descripción                                              | Detalle (`event.detail`)         |
| --------------------- | -------------------------------------------------------- | -------------------------------- |
| `imagen-cambiada`     | Se dispara cuando cambia la imagen activa en la galería. | `{ index: Number, url: String }` |
| `imagen-seleccionada` | Se dispara al seleccionar una imagen (clic o teclado).   | `{ index: Number, url: String }` |


## Temas y Estilos
Basado en el Manual de Imagen de la ESPE:

Azul institucional: #003C71.

Tipografía Arial y Roboto.

Espaciados definidos con variable CSS --spacing-unit (8px).

Bordes redondeados de 4px.

Uso de CSS Variables para facilitar personalización de colores y espaciados.

Estilos encapsulados en el Shadow DOM para evitar conflictos con estilos externos.

Animaciones suaves de opacidad para transición de imágenes.


## Ventajas de LitElement sobre JavaScript Puro para Web Components
Reactividad automática: Los cambios en las propiedades decoradas con @property actualizan la interfaz sin código adicional.

Declaración clara de propiedades: Facilita el manejo y validación de atributos.

Encapsulación de estilos y templates: Evita interferencia con otros estilos de la página.

Integración simple con eventos personalizados: dispatchEvent fácil para comunicar cambios.

Mejor legibilidad y mantenimiento: Código más limpio y modular.

Comunidad y soporte: LitElement es estándar moderno con amplia adopción y documentación.

