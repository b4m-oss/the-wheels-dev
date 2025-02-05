class TwlsIconTriangle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    const width = this.getAttribute("width") || "16";
    const height = this.getAttribute("height") || "16";
    const fill = this.getAttribute("fill") || "currentColor";
    const rotate = this.getAttribute("rotate") || "0";

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <svg width="${width}" height="${height}" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 61 / 70;">
          <path d="M58.5 30.6699C61.8333 32.5944 61.8333 37.4056 58.5 39.3301L7.50001 68.775C4.16668 70.6995 4.25077e-06 68.2939 4.41902e-06 64.4449L6.99317e-06 5.55514C7.16141e-06 1.70614 4.16668 -0.699493 7.50001 1.22501L58.5 30.6699Z" fill="${fill}" />
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-triangle", TwlsIconTriangle);

export default TwlsIconTriangle;