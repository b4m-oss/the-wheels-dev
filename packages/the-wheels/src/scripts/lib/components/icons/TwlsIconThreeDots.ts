class TwlsIconThreeDots extends HTMLElement {
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
        <svg width="${width}" height="${height}" viewBox="0 0 22 78" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg);">
          <circle cx="11" cy="10.6678" r="10.6759" fill="${fill}"/>
          <circle cx="11" cy="39" r="10.6759" fill="${fill}"/>
          <circle cx="11" cy="67.3322" r="10.6759" fill="${fill}"/>
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-three-dots", TwlsIconThreeDots);

export default TwlsIconThreeDots;