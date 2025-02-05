class TwlsIconMoon extends HTMLElement {
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
        <svg width="${width}" height="${height}" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 84 / 84;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 5.53446e-06 42 3.67176e-06C18.804 5.69961e-06 -9.78702e-07 18.804 1.04915e-06 42C-4.55239e-06 65.196 18.804 84 42 84ZM15.2445 68.3326C30.3947 69.5778 45.3709 61.4833 52.0862 46.9269C58.8024 32.3685 55.2392 15.7237 44.4588 5.00636C48.708 5.35474 52.9707 6.39751 57.0703 8.2888C75.7825 16.9213 83.9806 39.0305 75.3802 57.6732C66.7807 76.3137 44.6392 84.4289 25.927 75.7964C21.8274 73.9051 18.2674 71.3391 15.2445 68.3326Z" fill="${fill}" />
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-moon", TwlsIconMoon);

export default TwlsIconMoon;