class TwlsIconChevron extends HTMLElement {
  static get observedAttributes() {
    return ["width", "height", "fill", "rotate"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(oldValue: string | null, newValue: string | null) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  private render() {
    const width = this.getAttribute("width") || "16";
    const height = this.getAttribute("height") || "16";
    const fill = this.getAttribute("fill") || "currentColor";
    const rotate = this.getAttribute("rotate") || "0";

    this.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 56 86" fill="none" xmlns="http://www.w3.org/2000/svg" style="aspect-ratio: 56/86; transform: rotate(${rotate}deg);">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1975 43C55.1975 44.3299 54.6093 45.5917 53.5907 46.4467L8.19566 84.5518C6.29211 86.1496 3.45367 85.9018 1.85581 83.9983C0.257954 82.0948 0.505761 79.2563 2.4093 77.6585L43.6983 43L2.40931 8.34155C0.505764 6.74369 0.257957 3.90525 1.85581 2.0017C3.45367 0.0981588 6.29211 -0.149649 8.19566 1.44821L53.5907 39.5533C54.6093 40.4083 55.1975 41.6701 55.1975 43Z" fill="${fill}"/>
      </svg>
    `;
  }
}

customElements.define("twls-icon-chevron", TwlsIconChevron);

export default TwlsIconChevron;