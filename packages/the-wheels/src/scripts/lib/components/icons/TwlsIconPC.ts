class TwlsIconPC extends HTMLElement {
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
        <svg width="${width}" height="${height}" viewBox="0 0 90 78" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 90 / 78;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M78.6 0.733337C84.7856 0.733337 89.8 5.82734 89.8 12.1111V51.9333C89.8 58.2171 84.7856 63.3111 78.6 63.3111H56.2V71.8445H64.6C66.1464 71.8445 67.4 73.118 67.4 74.6889C67.4 76.2598 66.1464 77.5333 64.6 77.5333H25.4C23.8536 77.5333 22.6 76.2598 22.6 74.6889C22.6 73.118 23.8536 71.8445 25.4 71.8445H33.8V63.3111H11.4C5.21441 63.3111 0.200001 58.2171 0.200001 51.9333V12.1111C0.200001 5.82734 5.21441 0.733337 11.4 0.733337H78.6ZM50.6 71.8445V63.3111H39.4V71.8445H50.6Z" fill="${fill}"/>
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-pc", TwlsIconPC);

export default TwlsIconPC;