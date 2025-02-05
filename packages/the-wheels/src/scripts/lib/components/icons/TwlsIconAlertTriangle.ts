class TwlsIconAlertTriangle extends HTMLElement {
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
        <svg width="${width}" height="${height}" viewBox="0 0 94 89" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 94 / 89;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.1078 49.1828C42.1078 51.9317 44.2984 54.1599 47.0009 54.1599C49.7034 54.1599 51.8941 51.9317 51.8941 49.1828V34.2513C51.8941 31.5025 49.7034 29.2742 47.0009 29.2742C44.2984 29.2742 42.1078 31.5025 42.1078 34.2513V49.1828ZM51.8941 64.0585C51.8941 61.3096 49.7034 59.0813 47.0009 59.0813C44.2984 59.0813 42.1078 61.3096 42.1078 64.0585V64.1142C42.1078 66.8631 44.2984 69.0914 47.0009 69.0914C49.7034 69.0914 51.8941 66.8631 51.8941 64.1142V64.0585ZM34.1679 7.68011C39.761 -2.56004 54.2393 -2.56004 59.8322 7.68011L92.1318 66.8173C97.5671 76.7696 90.4921 89 79.2995 89H14.7006C3.5077 89 -3.56729 76.7696 1.8684 66.8173L34.1679 7.68011Z" fill="${fill}"/>
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-alert-triangle", TwlsIconAlertTriangle);

export default TwlsIconAlertTriangle;