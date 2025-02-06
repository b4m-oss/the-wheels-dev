class TwlsIconChevronEnd extends HTMLElement {
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
      <svg width="${width}" height="${height}" viewBox="0 0 73 94" fill="none" xmlns="http://www.w3.org/2000/svg" transform: rotate(${rotate}deg);">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.9481 47C54.9481 48.3299 54.3599 49.5917 53.3413 50.4467L7.94623 88.5518C6.04268 90.1496 3.20424 89.9018 1.60638 87.9983C0.00852609 86.0948 0.256333 83.2563 2.15987 81.6585L43.4489 47L2.15988 12.3415C0.256336 10.7437 0.00852951 7.90525 1.60638 6.0017C3.20424 4.09816 6.04269 3.85035 7.94623 5.44821L53.3413 43.5533C54.3599 44.4083 54.9481 45.6701 54.9481 47Z" fill="${fill}" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.947 0.595291C71.1561 0.595291 72.947 2.38615 72.947 4.59529L72.947 89.4047C72.947 91.6138 71.1561 93.4047 68.947 93.4047C66.7378 93.4047 64.947 91.6138 64.947 89.4047L64.947 4.59529C64.947 2.38615 66.7378 0.595291 68.947 0.595291Z" fill="black"/>
      </svg>
    `;
  }
}

customElements.define("twls-icon-chevron-end", TwlsIconChevronEnd);

export default TwlsIconChevronEnd;