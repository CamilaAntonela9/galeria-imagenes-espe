import { LitElement, html, css } from 'lit';

export class EspeImageGallery extends LitElement {
  static properties = {
    images: { type: Array },
    currentIndex: { type: Number },
  };

  static styles = css`
    .contenedor{
        display: column;
        justify-content: center;
        align-items: center;
    }
    :host {
      display: block;
      font-family: Arial, Roboto, sans-serif;
      background-color: var(--bg-color, #F5F9FC);
      padding: var(--spacing-unit, 8px);
      border-radius: 4px;
      border: 1px solid #ccc;
      max-width: 400px;
    }

    .image-container {
      position: relative;
      text-align: center;
    }

    img {
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
    }

    button {
      background-color: var(--color-primario, #003C71);
      color: white;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 1rem;
    }

    button:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  `;

  constructor() {
    super();
    this.images = [];
    this.currentIndex = 0;
  }

  render() {
    if (this.images.length === 0) {
      return html`<p>No hay imágenes para mostrar.</p>`;
    }

    const currentImage = this.images[this.currentIndex];

    return html`
        <div class="contenedor">
      <div class="image-container">
        <img
          src="${currentImage}"
          alt="Imagen ${this.currentIndex + 1}"
          @click=${() => this._emitSeleccion()}
          tabindex="0"
          role="img"
          aria-label="Imagen ${this.currentIndex + 1}"
        />
      </div>

      <div class="controls">
        <button
          @click=${this._prev}
          ?disabled=${this.currentIndex === 0}
          aria-label="Anterior"
          tabindex="0"
          role="button"
        >
          < Anterior
        </button>
        <button
          @click=${this._next}
          ?disabled=${this.currentIndex === this.images.length - 1}
          aria-label="Siguiente"
          tabindex="0"
          role="button"
        >
          Siguiente >
        </button>
      </div>
        </div>
    `;
  }

  _next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this._emitCambio();
    }
  }

  _prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this._emitCambio();
    }
  }

  _emitCambio() {
    this.dispatchEvent(new CustomEvent('imagen-cambiada', {
      detail: {
        index: this.currentIndex,
        url: this.images[this.currentIndex]
      }
    }));
  }

  _emitSeleccion() {
    this.dispatchEvent(new CustomEvent('imagen-seleccionada', {
      detail: {
        index: this.currentIndex,
        url: this.images[this.currentIndex]
      }
    }));
  }
}

customElements.define('espe-image-gallery', EspeImageGallery);
